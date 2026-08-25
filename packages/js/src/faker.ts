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
 * The LinkedIn Ads faker.
 *
 * Shapes, not behaviour: the goal is that a downstream node sees the field
 * NAMES LinkedIn Ads actually publishes, so an author can wire {{
 * $json.data.id }} against a fake and have it keep working against the real
 * thing.
 *
 * Deterministic — same inputs, same output. A faker returning a fresh uuid
 * every call cannot be asserted on, so its fixtures degrade to "it did not
 * throw", which is the assertion that catches nothing.
 */

import type { ConnectorFaker, FakeRequest } from "@particle-academy/fancy-connector-core";

function fakeCampaignGet({ config, fake }: FakeRequest): unknown {
  return {
    "account": fake.id("urn:li:sponsoredAccount:"),
    "associatedEntity": "urn:li:organization:2414183",
    "audienceExpansionEnabled": false,
    "campaignGroup": "urn:li:sponsoredCampaignGroup:602277684",
    "changeAuditStamps": {
      "created": {
        "time": 1530119777000,
      },
      "lastModified": {
        "time": 1530119777000,
      },
    },
    "costType": "CPC",
    "connectedTelevisionOnly": false,
    "creativeSelection": "OPTIMIZED",
    "dailyBudget": {
      "amount": "1800",
      "currencyCode": "USD",
    },
    "id": fake.int(100000000, 999999999),
    "locale": {
      "country": "US",
      "language": "en",
    },
    "name": "Campaign Sponsored update B",
    "offsiteDeliveryEnabled": false,
    "optimizationTargetType": "NONE",
    "test": false,
    "runSchedule": {
      "end": 1893456000000,
      "start": 1787590800000,
    },
    "servingStatuses": [
      "ACCOUNT_SERVING_HOLD",
    ],
    "status": "ACTIVE",
    "type": "SPONSORED_UPDATES",
    "unitCost": {
      "amount": "15",
      "currencyCode": "USD",
    },
    "version": {
      "versionTag": "1",
    },
  };
}

export const linkedinAdsFaker: ConnectorFaker = (operation, request) => {
  switch (operation) {
    case "campaign_get":
      return fakeCampaignGet(request);

    default:
      // A faker asked for an operation it has no shape for must SAY so. Making
      // something up would produce a green run whose output silently has none
      // of the fields the author is about to reference.
      throw new Error(
        `linkedin_ads: no fake response is defined for "${operation}". ` +
          "Add a fixture under provider/fixtures/ and regenerate — a connector without a faker " +
          "cannot be developed against, tested, or demonstrated.",
      );
  }
};
