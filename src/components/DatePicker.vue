<template>
  <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
</template>

<script>

import Vue from "vue";
import { Picker } from "mint-ui";

Vue.component(Picker.name, Picker);

export default {
    name: "picker",
    methods: {
        onValuesChange(picker, values) {
            if (values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
        }
    },
    data() {
        return {
            //  11월16일 화 | 오전 | 10 | 00
            slots: [
                {
                    flex: 1,
                    values: ["2016-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06"],
                    className: "date",
                    textAlign: "right"
                }, 
                {
                    divider: true,
                    content: "-",
                    className: "hipen"
                }, 
                {
                    flex: 1,
                    values: ["오전", "오후"],
                    className: "hour",
                    textAlign: "left"
                },
                {
                    flex: 1,
                    values: ["09", "10", "11", "12", "01", "02"],
                    className: "hour",
                    textAlign: "right"
                }, 
                {
                    divider: true,
                    content: "-",
                    className: "hipen"
                }, 
                {
                    flex: 1,
                    values: ["00", "30", "59"],
                    className: "min",
                    textAlign: "left"
                }
            ]
        };
    }
};

</script>

<style>


.picker-slot .hipen{
  width: 10px;
}
.picker-item .date {
  width: 150px;
}
.picker-item .hour {
  width: 70px;
}
.picker-item .min {
  width: 70px;
}

</style>

