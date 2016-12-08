import _random from "lodash/random";
import { uuid } from "../../utils/uuid";

const length = 10,
    list = Array.from(new Array(length)).map(function () {
        const id = uuid(32),
            startDate = new Date(2016, _random(10), _random(20)),
            startDateValue = startDate.valueOf(),
            endDate = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + _random(30)
            );

        return {
            formId: id,
            formTitle: {
                ko: "[ mock:" + id + " ] 설문 해보지 않겠는가?"
            },
            startDate: startDateValue,
            endDate: endDate.valueOf(),
            updateDate: startDateValue,
            replyCount: _random(30)
        };
    });

list.sort((a, b) => b.startDate - a.startDate);

export default {
    formInfos: list
};