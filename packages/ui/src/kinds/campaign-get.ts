/**
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
 * LinkedIn ad campaign — Retrieve one LinkedIn advertising campaign.
 *
 * https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?view=li-lms-2026-07#get-a-campaign
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { linkedinAdsMeta } from "../service.js";

export const LINKEDIN_ADS_CAMPAIGN_KIND = "@particle-academy/linkedin_ads_campaign";
export const LINKEDIN_ADS_CAMPAIGN_OPERATION = "campaign_get";

export const LINKEDIN_ADS_CAMPAIGN_META = linkedinAdsMeta("action", "retrieve a campaign", "https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?view=li-lms-2026-07#get-a-campaign");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const LINKEDIN_ADS_CAMPAIGN_OUTPUT: OutputField[] = [
  {
    "path": "data.id",
    "type": "number",
    "description": "LinkedIn's numeric campaign id."
  },
  {
    "path": "data.account",
    "type": "string",
    "description": "The immutable sponsored-account URN that owns the campaign."
  },
  {
    "path": "data.name",
    "type": "string",
    "description": "The campaign name."
  },
  {
    "path": "data.status",
    "type": "string",
    "description": "The user-managed campaign status, such as ACTIVE, PAUSED or DRAFT."
  },
  {
    "path": "data.type",
    "type": "string",
    "description": "The placement family, such as SPONSORED_UPDATES or TEXT_AD."
  },
  {
    "path": "data.test",
    "type": "boolean",
    "description": "True when the campaign belongs to LinkedIn's separate test Ad Account estate."
  },
  {
    "path": "data.dailyBudget.amount",
    "type": "string",
    "description": "The daily budget amount. LinkedIn returns money amounts as decimal strings, not JSON numbers."
  },
  {
    "path": "data.dailyBudget.currencyCode",
    "type": "string",
    "description": "The ISO currency code for the daily budget."
  },
  {
    "path": "data.runSchedule.start",
    "type": "number",
    "description": "Campaign start time as Unix epoch milliseconds."
  },
  {
    "path": "data.runSchedule.end",
    "type": "number",
    "description": "Campaign end time as Unix epoch milliseconds, when one is set."
  }
];

export const linkedinAdsCampaignKind: NodeKindDefinition = defineConnectorKind(LINKEDIN_ADS_CAMPAIGN_META, {
  name: LINKEDIN_ADS_CAMPAIGN_KIND,
  aliases: ["linkedin_ads_campaign"],
  label: "LinkedIn ad campaign",
  description: "Retrieve one LinkedIn advertising campaign.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: LINKEDIN_ADS_CAMPAIGN_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "adAccountId",
      "label": "Ad Account ID",
      "required": true,
      "description": "The numeric Sponsored Account id from Campaign Manager; send digits only, without the urn:li:sponsoredAccount: prefix."
    },
    {
      "type": "text",
      "key": "campaignId",
      "label": "Campaign ID",
      "required": true,
      "description": "The numeric campaign id within that Ad Account; send digits only, without a sponsoredCampaign URN prefix."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(LINKEDIN_ADS_CAMPAIGN_META, config as Record<string, unknown>, "retrieve a campaign"),
});
