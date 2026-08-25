# LinkedIn Ads

LinkedIn Ads for [fancy-flow][flow] — as **four imported, versioned packages**, one
per runtime. Not vendored source: a copy cannot be upgraded, and third-party APIs
change.

[flow]: https://github.com/Particle-Academy/fancy-flow

| Runtime | Package | Install |
|---|---|---|
| Authoring surface (every host) | `@particle-academy/linkedin-ads-ui` | `npm install @particle-academy/linkedin-ads-ui` |
| Node | `@particle-academy/linkedin-ads-js` | `npm install @particle-academy/linkedin-ads-js` |
| PHP 8.4+ | `particle-academy/linkedin-ads-php` | `composer require particle-academy/linkedin-ads-php` |
| Python 3.11+ | `fancy-linkedin-ads` | `pip install fancy-linkedin-ads` |

The `ui` package is the editor surface and is React on every host — a PHP or
Python project installs it *and* its own runtime package, and never the `js` one.

## What it costs you

One dependency: `@particle-academy/fancy-connector-core` (or
`particle-academy/fancy-connector-core` on Composer), which the `js` and `php`
packages pull in themselves. The Python package has **zero** runtime
dependencies.

**No LinkedIn Ads SDK.** Plain HTTP, deliberately: a vendor SDK is third-party code
subject to the kit's full approval bar, and one per provider is hundreds of
dependencies nobody is tracking.

## Setting it up

Everything below is generated from `provider/manifest.json`, so it cannot disagree with what the packages do.

### Credentials

A LinkedIn Ads connection holds 4 values.

**Two kinds of value, and mixing them up matters.** A `provider` credential is ONE value for the whole installation — an OAuth app's client secret serves every connected account. An `account` credential is one per connected account. A host that stores the second where it stores the first lets one account's credentials reach another's.

| Field | Scope | Secret | Where it comes from |
|---|---|---|---|
| **OAuth client ID** | per installation | not secret | From the LinkedIn Developer application's Auth tab; one value for the whole installation. |
| **OAuth client secret** | per installation | **secret** | From the same application. Used by the host for code exchange and programmatic refresh, never sent to the Marketing API. |
| **Member access token** | per connected account | **secret** | Per connected LinkedIn member. It expires after 60 days and only reaches Ad Accounts where that member has a sufficient role. |
| **Programmatic refresh token** | per connected account | **secret** | Per connected member, available to approved Marketing Developer Platform partners. It keeps its original one-year expiry when reused. |

### Authorising

LinkedIn Ads uses OAuth2 (authorization_code). The package DECLARES the exchange; the HOST performs it — a consent screen needs a browser, a redirect URI and somewhere to persist the result, and all three belong to the host.

- **Authorize URL** — https://www.linkedin.com/oauth/v2/authorization
- **Token URL** — https://www.linkedin.com/oauth/v2/accessToken
- **Scopes** — `r_ads`
- **Access token lifetime** — 5184000 seconds (60 days). A host that never refreshes works all afternoon and is broken by morning.

The refresh tokens do **not** rotate: the same one is reusable, so a refresh may safely be retried and may run concurrently. Stated rather than assumed, because the opposite — a provider that spends the token and revokes the grant on a replay — looks identical until it happens.

### The estate

LinkedIn Ads has a test estate on the same host, reached with credentials from a SEPARATE test account you register. Selecting sandbox mode uses those credentials.

> LinkedIn's test estate is one API-created test Ad Account per developer application. It uses the same host and member OAuth flow, but every child campaign and creative inherits the account's test flag, creatives are never served, and campaigns are not billed. The account cannot later be converted between test and production.

## What it can do

### Actions

#### `campaign_get` — LinkedIn ad campaign

Retrieve one LinkedIn advertising campaign.

`GET /rest/adAccounts/{adAccountId}/adCampaigns/{campaignId}` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `adAccountId` | yes | The numeric Sponsored Account id from Campaign Manager; send digits only, without the urn:li:sponsoredAccount: prefix. |
| `campaignId` | yes | The numeric campaign id within that Ad Account; send digits only, without a sponsoredCampaign URN prefix. |

## Run it before you have credentials

Every operation ships a **faker**, whether or not LinkedIn Ads has a sandbox. Set a
node's mode to `fake` and it returns the shape LinkedIn Ads actually publishes — the
same field names, deterministically — so you can wire the downstream nodes before
touching an account, a key, or a network.

## This repository is generated

`provider/` is the source. Everything under `packages/` is emitted from it and
**must not be hand-edited** — CI regenerates and diffs on every push, and the
next protocol sync destroys anything it finds. See [`AGENTS.md`](AGENTS.md).

## Two namespaces, which do not match on purpose

The repo is `github.com/Fancy-Friends/linkedin-ads`; the packages publish under
`particle-academy`. Nothing derives one from the other — the names come from
weaver's `friends.json` and nowhere else.

## Licence

MIT.
