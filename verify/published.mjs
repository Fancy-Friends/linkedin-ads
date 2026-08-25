/*
 * LinkedIn Ads — the published npm packages.
 *
 * GENERATED — do not edit. Fix weaver's template/ and regenerate.
 *
 * This runs against the PUBLISHED package, installed by name from the
 * registry into a project that has never seen this repo. Every other test
 * here imports from ../src and therefore cannot see the packaging.
 */

import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { linkedinAdsFaker } from "@particle-academy/linkedin-ads-js";
import { LINKEDIN_ADS_KINDS } from "@particle-academy/linkedin-ads-ui";
import { fakeRequest } from "@particle-academy/fancy-connector-core";

/*
 * WHERE did that come from?
 *
 * Node resolves a bare specifier from the importing MODULE's directory, not
 * the working directory. So running this script across from a checkout
 * resolves out of the REPO's node_modules and silently tests the source
 * again — which it did, and passed, before CI caught it.
 *
 * Two things are checked, because neither is enough alone: that the package
 * came from an INSTALL rather than from source, and that this script is not
 * sitting inside the provider repo it is supposed to be testing.
 */
const resolved = import.meta.resolve("@particle-academy/linkedin-ads-js");
const here = dirname(fileURLToPath(import.meta.url));

assert.ok(
  !existsSync(join(here, "..", "packages", "js", "package.json")),
  `${here} is inside the provider repo, so a bare import resolves the repo's ` +
    "own node_modules. Copy this script into a project that installed the " +
    "published package and run it there.",
);
assert.match(resolved, /node_modules/, `resolved ${resolved}, which is not an installed package`);
console.log(`  ok   resolved from ${resolved}`);

const GOLDENS = [
  {
    "operation": "campaign_get",
    "config": {},
    "expected": {
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
    }
  }
];

for (const { operation, config, expected } of GOLDENS) {
  const faked = linkedinAdsFaker(operation, fakeRequest("linkedin_ads", operation, config));

  assert.deepEqual(
    faked,
    expected,
    `the PUBLISHED package produced different bytes for ${operation} than the repo does`,
  );
  console.log(`  ok   ${operation}`);
}

// The ui package is a separate tarball, and js depends on it by its
// published name — so this also proves that dependency resolves.
assert.equal(LINKEDIN_ADS_KINDS.length, 1);
for (const kind of LINKEDIN_ADS_KINDS) {
  const keys = kind.configSchema.map((field) => field.key);
  assert.equal(keys[0], "connection");
  assert.equal(keys[1], "mode");
  assert.ok(kind.outputShape.length > 0, `${kind.name} declares no output shape`);
}
console.log(`  ok   ui kinds resolve from ${"@particle-academy/linkedin-ads-ui"}`);

console.log(`\n  ${GOLDENS.length} operations verified against the published packages.`);
