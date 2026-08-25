# GENERATED FILE — do not edit.
#
# Emitted from provider/fixtures/ by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/fixtures/ (or weaver's template/) and regenerate:
#
# npm run provider -- linkedin_ads

"""The golden fixtures — the SAME values the TypeScript and PHP packages
assert.

Bit-for-bit identical is the claim, and this is what checks it for Python.
Cross-runtime drift does not fail loudly on its own: it completes, down one
path, with no error.
"""

import pytest

from fancy_linkedin_ads._fake import FakeValues, seed_for_call
from fancy_linkedin_ads.faker import respond


def test_campaign_get_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("linkedin_ads", "campaign_get", config))

    faked = respond("campaign_get", {"config": config, "fake": fake})

    assert faked == {
        "account": "urn:li:sponsoredAccount:_fake_d03d950f3114",
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
        "id": 546759565,
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


def test_an_operation_with_no_fixture_raises_rather_than_inventing_a_shape() -> None:
    fake = FakeValues(seed_for_call("linkedin_ads", "no_such_operation", {}))

    with pytest.raises(ValueError, match="no fake response"):
        respond("no_such_operation", {"config": {}, "fake": fake})
