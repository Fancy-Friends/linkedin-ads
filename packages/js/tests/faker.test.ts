/**
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
 * The golden fixtures.
 *
 * Deterministic on purpose: the same seed produces the same bytes in
 * TypeScript, PHP and Python, so this file and its twins in the other packages
 * assert the SAME values. That turns the faker into a parity test rather than
 * a convenience — which matters, because cross-runtime drift does not fail
 * loudly. It completes, down one path, with no error.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { fakeRequest } from "@particle-academy/fancy-connector-core";

import { linkedinAdsFaker } from "../src/faker.js";

test("campaign_get fakes the shape LinkedIn Ads publishes", () => {
  const config = {};

  const faked = linkedinAdsFaker("campaign_get", fakeRequest("linkedin_ads", "campaign_get", config));

  assert.deepEqual(faked, {
    "account": "urn:li:sponsoredAccount:_fake_d03d950f3114",
    "associatedEntity": "urn:li:organization:2414183",
    "audienceExpansionEnabled": false,
    "campaignGroup": "urn:li:sponsoredCampaignGroup:602277684",
    "changeAuditStamps": {
      "created": {
        "time": 1530119777000
      },
      "lastModified": {
        "time": 1530119777000
      }
    },
    "costType": "CPC",
    "connectedTelevisionOnly": false,
    "creativeSelection": "OPTIMIZED",
    "dailyBudget": {
      "amount": "1800",
      "currencyCode": "USD"
    },
    "id": 546759565,
    "locale": {
      "country": "US",
      "language": "en"
    },
    "name": "Campaign Sponsored update B",
    "offsiteDeliveryEnabled": false,
    "optimizationTargetType": "NONE",
    "test": false,
    "runSchedule": {
      "end": 1893456000000,
      "start": 1787590800000
    },
    "servingStatuses": [
      "ACCOUNT_SERVING_HOLD"
    ],
    "status": "ACTIVE",
    "type": "SPONSORED_UPDATES",
    "unitCost": {
      "amount": "15",
      "currencyCode": "USD"
    },
    "version": {
      "versionTag": "1"
    }
  });
});

test("an operation with no fixture throws rather than inventing a shape", () => {
  assert.throws(() => linkedinAdsFaker("no_such_operation", fakeRequest("linkedin_ads", "no_such_operation", {})), /no fake response/);
});
