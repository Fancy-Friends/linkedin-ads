<?php

declare(strict_types=1);

use ParticleAcademy\LinkedinAds\LinkedinAdsFaker;
use ParticleAcademy\Connectors\FakeValues;

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
 * The golden fixtures — the SAME values the TypeScript and Python packages
 * assert.
 *
 * Bit-for-bit identical is the claim, and this is what checks it.
 * Cross-runtime drift does not fail loudly on its own: it completes, down one
 * path, with no error.
 */

it('campaign_get fakes the shape LinkedIn Ads publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('linkedin_ads', 'campaign_get', $config));

    $faked = LinkedinAdsFaker::respond('campaign_get', ['config' => $config, 'fake' => $fake]);

    expect($faked)->toBe([
        'account' => 'urn:li:sponsoredAccount:_fake_d03d950f3114',
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
        'id' => 546759565,
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
    ]);
});

it('throws for an operation with no fixture rather than inventing a shape', function () {
    $fake = new FakeValues(FakeValues::seedForCall('linkedin_ads', 'no_such_operation', []));

    expect(fn () => LinkedinAdsFaker::respond('no_such_operation', ['config' => [], 'fake' => $fake]))
        ->toThrow(InvalidArgumentException::class);
});
