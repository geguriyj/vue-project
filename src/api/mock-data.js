module.exports = {
    "docInfo": {
        "schemaVersion": "0.0.1",
        "revision": 65,
        "updateDate": "2016-11-01T04:05:06+08:00"
    },
    "authority": {
        "domainId": "101",
        "userId": "35136",
        "formId": "suvery1001"
    },
    "status": "open",
    "outline": {
        "formTitle": {
            "en": "Customer Satisfaction form",
            "ko": "고객 만족도 설문 조사",
            "ja": "顧客満足度アンケート調査"
        },
        "formDescription": {
            "en": "XXXXXXXXXXXXXXX",
            "ko": "향후 더 나은 서비스를 하기 위해 설문 조사를 하고 있습니다.\n아래 질문에 해당하는 답변을 선택해주세요.",
            "ja": "XXXXXXXXXXXXXXX"
        },
        "themeId": "1143"
    },
    "settings": {
        "expiry": ["set", {
            "startDate": "2016-09-12",
            "endDate": "2016-09-16"
        }]
    },
    "components": [
        {
            "componentId": "1",
            "componentTitle": {
                "en": "xxx",
                "ko": "1. 귀하가 당사와 거래한 기간은 얼마나 됩니까?",
                "ja": ""
            },
            "componentType": "radio",
            "extraInfo": {
                "general": {
                    "requirement": true,
                    "randomlyOrdered": false
                },
                "layout": {
                    "sortOrder": "vertical"
                }
            },
            "choices": [
                {
                    "choiceId": "1",
                    "choiceDescription": {
                        "en": "xxx",
                        "ko": "1년 미만",
                        "ja": ""
                    }
                },
                {
                    "choiceId": "2",
                    "choiceDescription": {
                        "en": "xxx",
                        "ko": "1~2년",
                        "ja": ""
                    }
                },
                {
                    "choiceId": "3",
                    "choiceDescription": {
                        "en": "xxx",
                        "ko": "2~3년",
                        "ja": ""
                    }
                }
            ]
        },
        {
            "componentId": "2",
            "componentTitle": {
                "en": "xxx",
                "ko": "2. 귀사의 직원은 몇 명입니까?",
                "ja": ""
            },
            "componentType": "checkbox",
            "extraInfo": {
                "general": {
                    "requirement": true
                },
                "layout": {
                    "sortOrder": "vertical"
                }
            },
            "choices": [
                {
                    "choiceId": "1",
                    "choiceDescription": {
                        "en": "xxx",
                        "ko": "10명 미만",
                        "ja": ""
                    }
                },
                {
                    "choiceId": "2",
                    "choiceDescription": {
                        "en": "xxx",
                        "ko": "10~50명",
                        "ja": ""
                    }
                },
                {
                    "choiceId": "3",
                    "choiceDescription": {
                        "en": "xxx",
                        "ko": "50~100명",
                        "ja": ""
                    }
                },
                {
                    "choiceId": "4",
                    "choiceDescription": {
                        "en": "xxx",
                        "ko": "100명 이상",
                        "ja": ""
                    }
                }
            ]
        },
        {
            "componentId": "3",
            "componentTitle": {
                "en": "xxx",
                "ko": "3. 당사를 처음 알게 된 경로는 무엇입니까?",
                "ja": ""
            },
            "componentType": "radio",
            "extra": {
                "general": {
                    "requirement": true
                },
                "layout": {
                    "sortOrder": "horizontal"
                }
            },
            "choices": [
                {
                    "choiceId": "1",
                    "choiceDescription": {
                        "en": "xxx",
                        "ko": "웹사이트",
                        "ja": ""
                    },
                    "imageUrl": ""
                },
                {
                    "choiceId": "2",
                    "choiceDescription": {
                        "en": "xxx",
                        "ko": "검색엔진",
                        "ja": ""
                    },
                    "imageUrl": ""
                },
                {
                    "choiceId": "3",
                    "choiceDescription": {
                        "en": "xxx",
                        "ko": "지인 추천",
                        "ja": ""
                    },
                    "imageUrl": ""
                }
            ]
        }
    ]
}