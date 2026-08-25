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
 * Retrieve one LinkedIn advertising campaign.
 *
 * GET /rest/adAccounts/{adAccountId}/adCampaigns/{campaignId} —
 * https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?view=li-lms-2026-07#get-a-campaign
 *
 * Notice what is NOT here: no key, no base URL, no mode check, no retry loop,
 * no fake/real branch. This describes the request; callConnector resolves the
 * connection, picks the estate, and either calls LinkedIn Ads or calls the
 * faker.
 */

import {
  callConnector,
  type ConnectorResult,
  type RequestedMode,
  type Transport,
} from "@particle-academy/fancy-connector-core";
import { LINKEDIN_ADS } from "../service.js";

export const CAMPAIGN_GET_OPERATION = "campaign_get";

export type CampaignGetOptions = {
  /** The node's resolved config. Keys: adAccountId, campaignId. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function linkedinAdsCampaignGet(options: CampaignGetOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.adAccountId === undefined || config.adAccountId === null || config.adAccountId === "") {
    throw new Error(`campaign_get: "adAccountId" is required (Ad Account ID).`);
  }

  if (config.campaignId === undefined || config.campaignId === null || config.campaignId === "") {
    throw new Error(`campaign_get: "campaignId" is required (Campaign ID).`);
  }

  return callConnector(LINKEDIN_ADS, {
    operation: CAMPAIGN_GET_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "GET",
      path: `/rest/adAccounts/${encodeURIComponent(String(config.adAccountId))}/adCampaigns/${encodeURIComponent(String(config.campaignId))}`,
      query: {},
    },
  });
}
