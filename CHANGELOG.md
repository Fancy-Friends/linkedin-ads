# Changelog

All notable changes to `@particle-academy/linkedin-ads-ui`,
`@particle-academy/linkedin-ads-js`, `particle-academy/linkedin-ads-php` and
`fancy-linkedin-ads`.

## [0.1.1] — 2026-09-06

### Changed

- **Published through npm Trusted Publishing, so these packages now carry PROVENANCE.**

Every earlier release went out under a scope-wide npm token. This one is
published by an OIDC exchange from the release workflow itself, and npm records
which workflow in which repository built it.
`npm view @particle-academy/linkedin-ads-ui@0.1.1` shows the attestation; releases before
this one have none.

What it buys a consumer: the tarball on the registry can be tied to a public
commit and a public workflow run, rather than to whoever held a token. What it
does not buy: nothing about the code changed, and the runtime behaviour of all
four packages is identical to 0.1.0.

- **`repository.directory` in the npm packages.**

`@particle-academy/linkedin-ads-ui` and `@particle-academy/linkedin-ads-js` live at
`packages/ui` and `packages/js` inside the provider repo. npm's `repository`
field now says so, which makes the "Repository" link on each package page point
at the package rather than at the repository root.

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
