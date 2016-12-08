<template>
    <div>
        <h2>{{ title }}</h2>
        <div class="u_ni_chart">
            <div class="uio_box">
                <div class="u_ni_chart_section u_ni_chart_donut">
                    <div class="u_ni_chart_component">
                        <!-- chart holder-->
                        <div :id="'pie_chart_'+ id" class="u_ni_chart"></div>
                        <!-- legend holder -->
                        <div class="u_ni_legend">
                            <ul class="u_ni_legend_lst _pie_chart_legend"></ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul v-for="c in columns">
                    <li> {{ c[0] }}. {{ c[1] }} / 응답 수 : {{ c[2] }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-env amd */
import Vue from "vue";

import "d3";
const c3 = require("c3");
window.c3 = c3;
const c3p = require("c3p");
window.c3p = c3p;
import "c3p/dist/theme/insight/insight.desktop.css";
require("c3p/dist/theme/insight/insight");

export default {

    props: {
        item: {
            type: Object,
            default() {
                return {};
            }
        },
        choices: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    created() {
        const self = this;
        Vue.nextTick(function(){
            self.makeChart(self.columns);
        });
    },
    methods: {
        makeChart(columns) {
            const id = "#pie_chart_"+this.id;
            c3p.generate(id, "insight.donut", {
                data: {
                    columns,
                    type: "pie"
                },
                labels: false,
                size: {
                    width: 300,
                    height: 300
                },
                interaction: {
                    enabled: true
                },
                color: {
                    pattern: ["#6581b0", "#2ad0ff", "#bbbbbb", "#eebbbb", "#bbeebb"]
                },
                pie: {
                    label: {
                        show: true
                    }
                },
                tooltip: {
                    contents(
                        d, 
                        __defaultTitleFormat, 
                        __defaultValueFormat, 
                        color) {
                        //color(d[0]) => #6581b0
                        return "<div style='padding:5px;background-color:#fff'><h4 style='color:#fff"+color(d[0])+"'>응답건수:" + d[0].value + "</h4></div>";
                    }
                }
            });
        }
    },
    computed: {
        id() {
            return this.item.componentId;
        },
        title() {
            return this.item.componentTitle.ko;
        },
        choices() {
            return this.item.choices;
        },
        columns() {
            return this.choices.map(function(ch){
                return [ch.choiceId, ch.replyCount]; 
            });
        }
    }
};
</script>