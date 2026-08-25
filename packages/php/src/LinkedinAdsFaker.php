<?php

declare(strict_types=1);

namespace ParticleAcademy\LinkedinAds;

use ParticleAcademy\Connectors\FakeRequest;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/fixtures/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/fixtures/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- linkedin_ads
 */
/**
 * The LinkedIn Ads faker — the PHP twin of the js package's `src/faker.ts`.
 *
 * Bit-for-bit identical: the same FNV-1a seed and the same xorshift32
 * sequence, so a golden fixture asserts the exact faked payload and BOTH
 * runtimes have to produce it. That turns the faker into a parity test rather
 * than a convenience.
 */
final class LinkedinAdsFaker
{
    /** @param array<string,mixed> $request */
    public static function respond(string $operation, array $request): mixed
    {
        /** @var array<string,mixed> $config */
        $config = $request['config'] ?? [];
        /** @var FakeValuesLike $fake */
        $fake = $request['fake'];

        return match ($operation) {
            'campaign_get' => self::CampaignGet($config, $fake),
            default => throw new \InvalidArgumentException(
                // A faker asked for an operation it has no shape for must SAY so.
                // Making something up would produce a green run whose output
                // silently has none of the fields the author is about to reference.
                'linkedin_ads: no fake response is defined for "'.$operation.'". '
                    .'Add a fixture under provider/fixtures/ and regenerate — a connector without a faker '
                    .'cannot be developed against, tested, or demonstrated.'
            ),
        };
    }

    /** @param array<string,mixed> $config */
    private static function CampaignGet(array $config, mixed $fake): array
    {
        return [
        'account' => $fake->id('urn:li:sponsoredAccount:'),
        'associatedEntity' => 'urn:li:organization:2414183',
        'audienceExpansionEnabled' => false,
        'campaignGroup' => 'urn:li:sponsoredCampaignGroup:602277684',
        'changeAuditStamps' => [
            'created' => [
                'time' => 1530119777000,
            ],
            'lastModified' => [
                'time' => 1530119777000,
            ],
        ],
        'costType' => 'CPC',
        'connectedTelevisionOnly' => false,
        'creativeSelection' => 'OPTIMIZED',
        'dailyBudget' => [
            'amount' => '1800',
            'currencyCode' => 'USD',
        ],
        'id' => $fake->int(100000000, 999999999),
        'locale' => [
            'country' => 'US',
            'language' => 'en',
        ],
        'name' => 'Campaign Sponsored update B',
        'offsiteDeliveryEnabled' => false,
        'optimizationTargetType' => 'NONE',
        'test' => false,
        'runSchedule' => [
            'end' => 1893456000000,
            'start' => 1787590800000,
        ],
        'servingStatuses' => [
            'ACCOUNT_SERVING_HOLD',
        ],
        'status' => 'ACTIVE',
        'type' => 'SPONSORED_UPDATES',
        'unitCost' => [
            'amount' => '15',
            'currencyCode' => 'USD',
        ],
        'version' => [
            'versionTag' => '1',
        ],
    ];
    }
}
