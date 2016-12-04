<template>
<div>
    <header class="header">
        <h1 class="blind">설문 결과 보기</h1>
        <div class="survey_head">
            <div class="title1">
                <h1>설문 결과 보기</h1>
            </div>
            <div class="description">
                <label>설문 상세 설명...</label>
            </div>
        </div>  
    </header>
    <section class="questionnaire" style="top:100px">
        <div class="u_ni_chart_component">
            <!-- chart holder-->
            <div id="pie_chart" class="u_ni_chart"></div>
            <!-- legend holder-->
            <div class="u_ni_legend">
                <ul class="u_ni_legend_lst _pie_chart_legend"></ul>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

const d3 = require("d3");
const c3 = require("c3");
window.c3 = c3;
const c3p = require("./c3p/c3p");
window.c3p = c3p;
import "./c3p/theme/insight/insight.desktop.css";
const insight = require("./c3p/theme/insight/insight");

export default {

    name: "report",
    created() {
        this.fetch();
        const self = this,
            summayChartData = this.summary.definitions.components[0],
            pieChartData = summayChartData.choices.items;
        Vue.nextTick(() => {
            self.displayPieChart(pieChartData);
        });
    },
    methods: {
        fetch() {
            // this.$store.dispatch("getReport", {
            //     id: this.id
            // });
            this.$store.dispatch("getSummary", {
                context: this.$store
            });
        },
        displayPieChart(chartColumns) {
           
            c3p.generate("#pie_chart", "insight.donut", {
                data: {
                    columns: chartColumns,
                    type: "pie",
                    onmouseover() {
                      // console.log("onmouseover", d, i, this);
                    },
                    onmouseout() {
                      // console.log("onmouseout", d, i, this);
                    },
                    onclick() {
                      // console.log("onclick", d, i, this);
                    }
                },
                pie: {
                    label: {
                        show: true,
                        format(value, __ratio, __id) {
                            return d3.format("%")(value);
                        }
                    }
                },
                color: {
                    pattern: ["#6581b0","#2ad0ff","#bbbbbb","#eebbbb","bbeebb"]
                },
                tooltip: {
                    show: true,
                    position: function (data, width, height, element) {
                        return {top: 0, left: 0}
                    },
                    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                        return "<strong>"+ d + "</strong>";// formatted html as you want
                    },
                    // grouped: false,
                    format: {
                        title(d) { 
                            return "Data " + d; 
                        },
                        value(value, ratio, id) {
                            // const format = d3.format("$");
                            // return format(value);
                            return ratio;
                        }
                    }
                }
            });
        }
    },
    computed: {
        id() {
            return this.summary.id || this.$route.params.id;
        },
        ...mapState(["summary"])
    }

};
</script>