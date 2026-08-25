# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/campaign-get.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/campaign-get.json (or weaver's template/) and regenerate:
#
# npm run provider -- linkedin_ads

"""Retrieve one LinkedIn advertising campaign.

GET /rest/adAccounts/{adAccountId}/adCampaigns/{campaignId} —
https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?view=li-lms-2026-07#get-a-campaign

This describes the request. `call` resolves the connection, picks the
estate, and either calls LinkedIn Ads or calls the faker.
"""

from __future__ import annotations

from typing import Any
from urllib.parse import quote

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "campaign_get"
METHOD = "GET"
PATH = "/rest/adAccounts/{adAccountId}/adCampaigns/{campaignId}"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the form body for one call, failing loudly and specifically."""
    if config.get("adAccountId") is None or config.get("adAccountId") == "":
        raise ConnectorConfigError(
            "campaign_get: \"adAccountId\" is required (Ad Account ID)."
        )

    if config.get("campaignId") is None or config.get("campaignId") == "":
        raise ConnectorConfigError(
            "campaign_get: \"campaignId\" is required (Campaign ID)."
        )

    out: dict[str, Any] = {}

    return out



def path(config: dict[str, Any]) -> str:
    """The request path, with each config value URL-ENCODED into it.

    `PATH` above is the TEMPLATE, which is what the descriptor advertises;
    this is what a caller sends. A value interpolated raw changes WHICH URL is
    called — a range like `Sheet1!A:B`, or a sheet named `Q1/Q2` — and the
    provider answers 404 about the document rather than about the encoding.
    """
    return (
        "/rest/adAccounts/"
        + quote(str(config.get("adAccountId") or ""), safe="")
        + "/adCampaigns/"
        + quote(str(config.get("campaignId") or ""), safe="")
    )

def campaign_get(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Retrieve one LinkedIn advertising campaign."""
    return call(
        descriptor(),
        operation=OPERATION,
        method=METHOD,
        path=PATH,
        form=body(config),
        config=config,
        credentials=credentials,
        mode=mode,
        connection_id=connection_id,
        attempts=attempts,
    )
