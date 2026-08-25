# Changelog

All notable changes to `@particle-academy/linkedin-ads-ui`,
`@particle-academy/linkedin-ads-js`, `particle-academy/linkedin-ads-php` and
`fancy-linkedin-ads`.

## [0.1.0] — 2026-08-23

First release.

### Added

- `campaign_get` — retrieve one campaign from an Ad Account with LinkedIn's
  August 2026 Marketing API.
- A top-level Campaign faker for development without reading a live or test Ad
  Account.

### Versioned protocol

Every call pins `LinkedIn-Version: 202608` and
`X-Restli-Protocol-Version: 2.0.0`. LinkedIn does not apply the latest Marketing
API version when the version header is omitted.

### OAuth and test estate

The connector requests the member-level, read-only `r_ads` scope. LinkedIn's
programmatic Marketing refresh token is reusable and retains its original
one-year expiry window. Test Ad Accounts are a separate account estate on the
same API host; their ads are never served or billed.

[0.1.0]: https://github.com/Fancy-Friends/linkedin-ads/releases/tag/v0.1.0
