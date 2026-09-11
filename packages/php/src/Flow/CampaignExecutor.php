<?php

declare(strict_types=1);

namespace ParticleAcademy\LinkedinAds\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\LinkedinAds\Actions\CampaignGet;
use ParticleAcademy\LinkedinAds\LinkedinAds;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/campaign-get.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/campaign-get.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- linkedin_ads
 */
/**
 * LinkedIn ad campaign, run on a fancy-flow-php host.
 *
 * The PHP twin of `linkedinAdsCampaignExecutor` in
 * @particle-academy/linkedin-ads-js: the same request, built from the node's
 * config by the same `Actions\CampaignGet` a host would call directly, and the
 * same value on `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than LinkedIn Ads. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/linkedin_ads_campaign',
    aliases: [
        'linkedin_ads_campaign',
    ],
    category: 'io',
    label: 'LinkedIn ad campaign',
    description: 'Retrieve one LinkedIn advertising campaign.',
    inputs: [
        [
            'id' => 'in',
        ],
    ],
    outputs: [
        [
            'id' => 'out',
        ],
    ],
    sideEffects: 'none',
    outputShape: [
        [
            'path' => 'data.id',
            'type' => 'number',
            'description' => 'LinkedIn\'s numeric campaign id.',
        ],
        [
            'path' => 'data.account',
            'type' => 'string',
            'description' => 'The immutable sponsored-account URN that owns the campaign.',
        ],
        [
            'path' => 'data.name',
            'type' => 'string',
            'description' => 'The campaign name.',
        ],
        [
            'path' => 'data.status',
            'type' => 'string',
            'description' => 'The user-managed campaign status, such as ACTIVE, PAUSED or DRAFT.',
        ],
        [
            'path' => 'data.type',
            'type' => 'string',
            'description' => 'The placement family, such as SPONSORED_UPDATES or TEXT_AD.',
        ],
        [
            'path' => 'data.test',
            'type' => 'boolean',
            'description' => 'True when the campaign belongs to LinkedIn\'s separate test Ad Account estate.',
        ],
        [
            'path' => 'data.dailyBudget.amount',
            'type' => 'string',
            'description' => 'The daily budget amount. LinkedIn returns money amounts as decimal strings, not JSON numbers.',
        ],
        [
            'path' => 'data.dailyBudget.currencyCode',
            'type' => 'string',
            'description' => 'The ISO currency code for the daily budget.',
        ],
        [
            'path' => 'data.runSchedule.start',
            'type' => 'number',
            'description' => 'Campaign start time as Unix epoch milliseconds.',
        ],
        [
            'path' => 'data.runSchedule.end',
            'type' => 'number',
            'description' => 'Campaign end time as Unix epoch milliseconds, when one is set.',
        ],
    ],
)]
final class CampaignExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            LinkedinAds::descriptor(),
            CampaignGet::OPERATION,
            $config,
            [
                'method' => CampaignGet::METHOD,
                'path' => CampaignGet::path($config),
                'query' => CampaignGet::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'linkedin_ads campaign_get'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
