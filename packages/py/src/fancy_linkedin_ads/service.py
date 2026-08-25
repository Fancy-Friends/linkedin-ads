# GENERATED FILE — do not edit.
#
# Emitted from provider/manifest.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/manifest.json (or weaver's template/) and regenerate:
#
# npm run provider -- linkedin_ads

"""LinkedIn Ads, as one service descriptor shared by every LinkedIn Ads
operation.

The Python twin of the js and php packages' service modules.

## The sandbox trap, written down where it is used

LinkedIn's test estate is one API-created test Ad Account per developer
application. It uses the same host and member OAuth flow, but every child
campaign and creative inherits the account's test flag, creatives are never
served, and campaigns are not billed. The account cannot later be converted
between test and production.
"""

from __future__ import annotations

from ._runtime import PreparedRequest, ServiceDescriptor
from .faker import respond

# The connector API version this package was GENERATED against. A literal,
# never imported: an imported constant lets an upgrade rewrite the very claim
# it exists to detect, after which the copy agrees with itself forever.
CONNECTOR_API_VERSION = 1

SERVICE = "linkedin_ads"
TITLE = "LinkedIn Ads"
SANDBOX = "separate-account"
BASE_URLS = {
    "live": "https://api.linkedin.com",
    "sandbox": "https://api.linkedin.com",
}

"""Credential keys a remote call cannot proceed without."""
REQUIRES = [
    "accessToken",
]


def authorize(
    credentials: dict[str, str | None],
    request: PreparedRequest,
    mode: str,
) -> None:
    """Apply LinkedIn Ads's auth scheme to an outgoing request.
    
    Advertising permissions are MEMBER permissions in LinkedIn's three-legged
    OAuth flow, not application permissions. The member must both grant r_ads
    and hold a role on the requested Ad Account; a valid app token alone cannot
    read a campaign.
    """
    request.headers["LinkedIn-Version"] = "202608"
    request.headers["X-Restli-Protocol-Version"] = "2.0.0"

    request.headers["Authorization"] = f"Bearer {credentials.get('accessToken') or ''}"


def descriptor() -> ServiceDescriptor:
    """The LinkedIn Ads service, for the Python runtime."""
    return ServiceDescriptor(
        service=SERVICE,
        title=TITLE,
        sandbox=SANDBOX,
        base_urls=BASE_URLS,
        requires=REQUIRES,
        authorize=authorize,
        faker=respond,
        idempotency_header=None,
    )
