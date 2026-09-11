<?php

declare(strict_types=1);

namespace ParticleAcademy\LinkedinAds;

use ParticleAcademy\Connectors\FakeValues;
use ParticleAcademy\Connectors\Mode;
use ParticleAcademy\Connectors\PreparedRequest;
use ParticleAcademy\Connectors\SandboxKind;
use ParticleAcademy\Connectors\ServiceDescriptor;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/manifest.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/manifest.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- linkedin_ads
 */
/**
 * LinkedIn Ads, as one service descriptor shared by every LinkedIn Ads
 * operation.
 *
 * The PHP twin of the js package's `src/service.ts`.
 *
 * ## The sandbox trap, written down where it is used
 *
 * LinkedIn's test estate is one API-created test Ad Account per developer
 * application. It uses the same host and member OAuth flow, but every child
 * campaign and creative inherits the account's test flag, creatives are never
 * served, and campaigns are not billed. The account cannot later be converted
 * between test and production.
 */
final class LinkedinAds
{
    // The connector API version this package was GENERATED against. A
    // literal, never imported: an imported constant lets an upgrade rewrite
    // the very claim it exists to detect.
    public const CONNECTOR_API_VERSION = 1;

    public const SERVICE = 'linkedin_ads';

    public const LIVE_URL = 'https://api.linkedin.com';
    public const SANDBOX_URL = 'https://api.linkedin.com';

    /** @var list<string> Credential keys a remote call cannot proceed without. */
    public const REQUIRES = [
        'accessToken',
    ];

    public static function descriptor(): ServiceDescriptor
    {
        return new ServiceDescriptor(
            service: self::SERVICE,
            title: 'LinkedIn Ads',
            sandbox: SandboxKind::SeparateAccount,
            baseUrls: [
                Mode::Live->value => self::LIVE_URL,
                Mode::Sandbox->value => self::SANDBOX_URL,
            ],
            requires: self::REQUIRES,
            authorize: self::authorize(...),
            // The core calls a faker ($operation, $config, $fake, $input); respond()
            // takes TypeScript's FakeRequest shape. This is the translation.
            faker: static fn (string $operation, array $config, FakeValues $fake, mixed $input = null): mixed => LinkedinAdsFaker::respond(
                $operation,
                ['config' => $config, 'fake' => $fake, 'input' => $input],
            ),
        );
    }

    /**
     * Apply LinkedIn Ads's auth scheme to an outgoing request.
     *
     * Advertising permissions are MEMBER permissions in LinkedIn's three-legged
     * OAuth flow, not application permissions. The member must both grant r_ads
     * and hold a role on the requested Ad Account; a valid app token alone cannot
     * read a campaign.
     *
     * @param array<string,string> $credentials
     */
    public static function authorize(array $credentials, PreparedRequest $request, Mode $mode): void
    {
        $request->withHeader('LinkedIn-Version', '202608');
        $request->withHeader('X-Restli-Protocol-Version', '2.0.0');

        $request->withHeader('Authorization', 'Bearer '.($credentials['accessToken'] ?? ''));
    }
}
