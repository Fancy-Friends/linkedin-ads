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
 * LinkedIn Ads's identity on the authoring surface, shared by every LinkedIn
 * Ads node.
 *
 * This file must import nothing from the js package: a PHP or Python project
 * installs the ui package and never that one, and the import would be a
 * dangling module the moment it did.
 *
 * ## The sandbox trap
 *
 * LinkedIn's test estate is one API-created test Ad Account per developer
 * application. It uses the same host and member OAuth flow, but every child
 * campaign and creative inherits the account's test flag, creatives are never
 * served, and campaigns are not billed. The account cannot later be converted
 * between test and production.
 */

import type { ConnectorDomain, ConnectorMeta } from "@particle-academy/fancy-flow/connectors";

/**
 * The connector API version this package was GENERATED against.
 *
 * A literal, never imported — an imported constant lets an upgrade rewrite the
 * very claim it exists to detect.
 */
export const CONNECTOR_API_VERSION = 1;

/** The parts of a connector's identity that belong to the SERVICE, not the node. */
export const LINKEDIN_ADS_SERVICE = {
  service: "linkedin_ads",
  serviceTitle: "LinkedIn Ads",
  domain: "marketing",
  sandbox: "separate-account",
} as const satisfies Pick<ConnectorMeta, "service" | "serviceTitle" | "domain" | "sandbox">;

/**
 * Every connector domain weaver knows, pinned against fancy-flow's union.
 *
 * A closed set copied into three codebases stays correct only while something
 * MAKES it: this line fails to compile the moment weaver carries a value
 * fancy-flow does not, including the values no provider uses yet.
 */
const WEAVER_DOMAINS: readonly ConnectorDomain[] = [
  "payments",
  "commerce",
  "messaging",
  "email",
  "crm",
  "support",
  "storage",
  "calendar",
  "productivity",
  "database",
  "devtools",
  "analytics",
  "marketing",
  "ai",
  "forms",
  "hr",
  "geo"
];
void WEAVER_DOMAINS;

/** The credentials a LinkedIn Ads connection holds. */
export const LINKEDIN_ADS_CREDENTIALS = [
  {
    "key": "clientId",
    "label": "OAuth client ID",
    "scope": "provider",
    "secret": false,
    "help": "From the LinkedIn Developer application's Auth tab; one value for the whole installation."
  },
  {
    "key": "clientSecret",
    "label": "OAuth client secret",
    "scope": "provider",
    "secret": true,
    "help": "From the same application. Used by the host for code exchange and programmatic refresh, never sent to the Marketing API."
  },
  {
    "key": "accessToken",
    "label": "Member access token",
    "scope": "account",
    "secret": true,
    "help": "Per connected LinkedIn member. It expires after 60 days and only reaches Ad Accounts where that member has a sufficient role."
  },
  {
    "key": "refreshToken",
    "label": "Programmatic refresh token",
    "scope": "account",
    "secret": true,
    "help": "Per connected member, available to approved Marketing Developer Platform partners. It keeps its original one-year expiry when reused."
  }
] as const;

/**
 * The OAuth2 exchange LinkedIn Ads requires — DECLARED here, performed by the
 * host.
 *
 * A consent screen needs a browser, a redirect URI and somewhere to persist
 * the result, and all three belong to the host; a package that ran the dance
 * itself would have to own a web server. So this says precisely enough for a
 * host to do it.
 *
 * The access token lasts 5184000 seconds. A host that never refreshes will
 * work all afternoon and be broken by morning, which is why the lifetime is
 * stated rather than left to be discovered.
 *
 * Its refresh tokens do NOT rotate: the same one is reusable, so a refresh may
 * safely be retried and may run concurrently. That is stated rather than
 * assumed because the opposite — a provider that spends the token and revokes
 * the grant on a replay — looks identical until it happens.
 */
export const LINKEDIN_ADS_OAUTH = {
  "flow": "authorization_code",
  "authorizeUrl": "https://www.linkedin.com/oauth/v2/authorization",
  "tokenUrl": "https://www.linkedin.com/oauth/v2/accessToken",
  "scopes": [
    "r_ads"
  ],
  "accessTokenCredential": "accessToken",
  "refreshTokenCredential": "refreshToken",
  "refreshTokenRotates": false,
  "accessTokenTtlSeconds": 5184000
} as const;

/** Build a LinkedIn Ads node's connector metadata from the operation it performs. */
export function linkedinAdsMeta(
  role: ConnectorMeta["role"],
  operation: string,
  docs: string,
): ConnectorMeta {
  return { ...LINKEDIN_ADS_SERVICE, role, operation, docs };
}
