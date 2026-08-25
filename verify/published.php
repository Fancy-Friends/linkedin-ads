<?php

declare(strict_types=1);

/*
 * LinkedIn Ads — the published Composer package.
 *
 * GENERATED — do not edit. Fix weaver's template/ and regenerate.
 *
 * This runs against the PUBLISHED package, installed by name from the
 * registry into a project that has never seen this repo. Every other test
 * here imports from ../src and therefore cannot see the packaging.
 */

$autoload = getcwd().'/vendor/autoload.php';

if (! is_file($autoload)) {
    fwrite(STDERR, 'No vendor/autoload.php in '.getcwd().PHP_EOL);
    fwrite(STDERR, 'Run this from a project that has composer-required the published package:'.PHP_EOL);
    fwrite(STDERR, '    composer require particle-academy/linkedin-ads-php'.PHP_EOL);
    exit(2);
}

require $autoload;

use ParticleAcademy\Connectors\FakeValues;
use ParticleAcademy\LinkedinAds\LinkedinAdsFaker;

$goldens = [
    [
        'operation' => 'campaign_get',
        'config' => [],
        'expected' => [
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
        ],
    ],
];

foreach ($goldens as $golden) {
    $operation = $golden['operation'];
    $config = $golden['config'];

    $fake = new FakeValues(FakeValues::seedForCall('linkedin_ads', $operation, $config));
    $faked = LinkedinAdsFaker::respond($operation, ['config' => $config, 'fake' => $fake]);

    if ($faked !== $golden['expected']) {
        fwrite(STDERR, "the PUBLISHED package produced different bytes for {$operation}\n");
        fwrite(STDERR, '  got:      '.json_encode($faked)."\n");
        fwrite(STDERR, '  expected: '.json_encode($golden['expected'])."\n");
        exit(1);
    }

    echo "  ok   {$operation}\n";
}

echo "\n  ".count($goldens)." operations verified against the published package.\n";
