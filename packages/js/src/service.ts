/**
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
 * @particle-academy/fancy-connector-core carries what is true of ALL
 * connectors. This carries what is true of LinkedIn Ads: its base URL, its
 * auth scheme, its idempotency header, and its faker.
 *
 * ## The sandbox trap, written down where it is used
 *
 * LinkedIn's test estate is one API-created test Ad Account per developer
 * application. It uses the same host and member OAuth flow, but every child
 * campaign and creative inherits the account's test flag, creatives are never
 * served, and campaigns are not billed. The account cannot later be converted
 * between test and production.
 */

import type { ConnectorMode, PreparedRequest, ServiceDescriptor } from "@particle-academy/fancy-connector-core";

import { linkedinAdsFaker } from "./faker.js";

/**
 * The connector API version this package was GENERATED against.
 *
 * A literal, never imported. An imported constant lets an upgrade rewrite the
 * very claim it exists to detect, after which the copy agrees with itself
 * forever.
 */
export const CONNECTOR_API_VERSION = 1;

export const LINKEDIN_ADS_BASE_URLS = {
  "live": "https://api.linkedin.com",
  "sandbox": "https://api.linkedin.com"
} as const;

/** Credential keys a remote call cannot proceed without. */
export const LINKEDIN_ADS_REQUIRES = [
  "accessToken"
] as const;

/**
 * Apply LinkedIn Ads's auth scheme to an outgoing request.
 *
 * Advertising permissions are MEMBER permissions in LinkedIn's three-legged
 * OAuth flow, not application permissions. The member must both grant r_ads
 * and hold a role on the requested Ad Account; a valid app token alone cannot
 * read a campaign.
 *
 * The mode is passed in because for some providers auth and estate are the
 * same decision expressed in the URL; here it is unused, and saying so is
 * cheaper than wondering later whether it was forgotten.
 */
export function linkedinAdsAuthorize(
  credentials: Record<string, string | undefined>,
  request: PreparedRequest,
  _mode: ConnectorMode,
): void {
  request.headers["LinkedIn-Version"] = "202608";
  request.headers["X-Restli-Protocol-Version"] = "2.0.0";

  request.headers.Authorization = `Bearer ${credentials.accessToken ?? ""}`;
}

/** The LinkedIn Ads service, for the TypeScript runtime. */
export const LINKEDIN_ADS: ServiceDescriptor = {
  service: "linkedin_ads",
  title: "LinkedIn Ads",
  sandbox: "separate-account",
  baseUrls: { ...LINKEDIN_ADS_BASE_URLS },
  requires: [...LINKEDIN_ADS_REQUIRES],
  authorize: linkedinAdsAuthorize,
  faker: linkedinAdsFaker,
};
