import _random from "lodash/random";

const summary = {
    outline: {
        formTitle: {
            ko: "회식 장소 투표합니다."
        },
        formDescription: {
            ko: "빠른 투표를 부탁드립니다."
        },
        themeId: "th001"
    },
    replyCount: 2,
    components: [{
        componentId: "comp1",
        componentTitle: {
            ko: "선호하는 날짜는?"
        },
        componentType: "single_choice",
        choices: [{
            choiceId: "ch001",
            choiceDescription: "12월12일(월)",
            imageUrl: "",
            extraChoice: false,
            replyCount: _random(5)
        }, {
            choiceId: "ch002",
            choiceDescription: "12월13일(화)",
            imageUrl: "",
            extraChoice: false,
            replyCount: _random(5)
        }, {
            choiceId: "ch003",
            choiceDescription: "12월14일(수)",
            imageUrl: "",
            extraChoice: false,
            replyCount: _random(5)
        }, {
            choiceId: "ch004",
            choiceDescription: "12월15일(목)",
            imageUrl: "",
            extraChoice: false,
            replyCount: _random(5)
        }],
        extraChoices: [{
            choiceId: "ch005",
            choiceDescription: "이번주 안돼요",
            imageUrl: "",
            extraChoice: false,
            replyCount: 1
        }],
        answers: [{
            choiceId: "ch001",
            subChoiceId: "sub01",
            numericValue: 1,
            value: "AAA"
        }]
    }, {
        componentId: "comp2",
        componentTitle: {
            ko: "선호하는 메뉴는?"
        },
        componentType: "single_choice",
        choices: [{
            choiceId: "ch001",
            choiceDescription: "소고기",
            imageUrl: "",
            extraChoice: false,
            replyCount: _random(5)
        }, {
            choiceId: "ch002",
            choiceDescription: "회",
            imageUrl: "",
            extraChoice: false,
            replyCount: _random(5)
        }, {
            choiceId: "ch003",
            choiceDescription: "치킨",
            imageUrl: "",
            extraChoice: false,
            replyCount: _random(5)
        }],
        extraChoices: [{
            choiceId: "ch004",
            choiceDescription: "장어",
            imageUrl: "",
            extraChoice: false,
            replyCount: _random(5)
        }],
        answers: [{
            choiceId: "ch001",
            subChoiceId: "sub01",
            numericValue: 1,
            value: "BBB"
        }]
    }, {
        componentId: "comp3",
        componentTitle: {
            ko: "기타 요구사항이 있으면 적어주세요."
        },
        componentType: "long_answer",
        choices: [{
            choiceId: "ch001",
            choiceDescription: "소고기 주세요."
        }, {
            choiceId: "ch002",
            choiceDescription: "회 주세요."
        }, {
            choiceId: "ch003",
            choiceDescription: "치킨 주세요."
        }],
        extraChoices: [{
            choiceId: "ch004",
            choiceDescription: "장어 주세요.",
            imageUrl: "",
            extraChoice: false,
            replyCount: _random(5)
        }],
        answers: [{
            choiceId: "ch001",
            subChoiceId: "sub01",
            numericValue: 1,
            value: "BBB"
        }]
    }],
    respondents: [{
        userId: "user001",
        userName: "홍길동",
        organization: "A",
        status: ["replied"]
    }, {
        userId: "user002",
        userName: "김길동",
        organization: "B",
        status: ["notYet"]
    }, {
        userId: "user003",
        userName: "박길동",
        organization: "C",
        status: ["replied"]
    }, {
        userId: "user004",
        userName: "고길동",
        organization: "C",
        status: ["replied"]
    }],
    uniqueItem: true
};

export default summary;