"""
LinkedIn Ads — the published PyPI wheel.

GENERATED — do not edit. Fix weaver's template/ and regenerate.

Runs against the PUBLISHED wheel, installed by name into a fresh venv.
Every other test here imports from ../src and cannot see the packaging —
a missing py.typed or an unshipped module passes there and breaks for
every user.
"""

from importlib.metadata import requires

from fancy_linkedin_ads._fake import FakeValues, seed_for_call
from fancy_linkedin_ads.faker import respond

GOLDENS = [
    {
        "operation": "campaign_get",
        "config": {},
        "expected": {
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
        },
    },
]


def main() -> None:
    # Zero runtime dependencies is a design constraint, checked on the
    # INSTALLED distribution rather than on the pyproject that claimed it.
    declared = requires("fancy-linkedin-ads")
    assert not declared, f"expected no runtime dependencies, got {declared}"
    print("  ok   zero runtime dependencies on the installed distribution")

    for golden in GOLDENS:
        operation, config = golden["operation"], golden["config"]
        fake = FakeValues(seed_for_call("linkedin_ads", operation, config))
        faked = respond(operation, {"config": config, "fake": fake})

        assert faked == golden["expected"], (
            f"the PUBLISHED wheel produced different bytes for {operation} than the repo does"
        )
        print(f"  ok   {operation}")

    print(f"\n  {len(GOLDENS)} operations verified against the published wheel.")


if __name__ == "__main__":
    main()
