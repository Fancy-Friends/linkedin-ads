# GENERATED FILE — do not edit.
#
# Emitted from provider/fixtures/ by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/fixtures/ (or weaver's template/) and regenerate:
#
# npm run provider -- linkedin_ads

"""The LinkedIn Ads faker.

Bit-for-bit identical to the TypeScript and PHP fakers: the same FNV-1a seed
and the same xorshift32 sequence, so a golden fixture asserts the exact
faked payload and ALL THREE runtimes have to produce it. That turns the
faker into a parity test rather than a convenience — which matters, because
cross-runtime drift does not fail loudly. It completes, down one path, with
no error.
"""

from __future__ import annotations

from typing import Any

from ._fake import FakeValues


def _campaign_get(config: dict[str, Any], fake: FakeValues) -> Any:
    return {
        "account": fake.id("urn:li:sponsoredAccount:"),
        "associatedEntity": "urn:li:organization:2414183",
        "audienceExpansionEnabled": False,
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
        "connectedTelevisionOnly": False,
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
        "offsiteDeliveryEnabled": False,
        "optimizationTargetType": "NONE",
        "test": False,
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
    }


def respond(operation: str, request: dict[str, Any]) -> Any:
    """Dispatch to the fixture for one operation."""
    config: dict[str, Any] = request.get("config") or {}
    fake: FakeValues = request["fake"]

    if operation == "campaign_get":
        return _campaign_get(config, fake)

    # A faker asked for an operation it has no shape for must SAY so. Making
    # something up would produce a green run whose output silently has none of
    # the fields the author is about to reference.
    raise ValueError(
        f'linkedin_ads: no fake response is defined for "{operation}". '
        "Add a fixture under provider/fixtures/ and regenerate — a connector without a faker "
        "cannot be developed against, tested, or demonstrated."
    )
