<template>
  <div>
    <div id="bar_chart"></div>
    <div id="donut_chart"></div>
  </div>

</template>

<script>

//  import d3 from "d3";
//  import c3 from "c3";
//  import c3p from "./c3p/c3p";
//  window.c3p = c3p;
//  import * as insight from "./c3p/theme/insight/insight";

  const d3 = require("d3");
  const c3 = require("c3");
  const c3p = require("./c3p/c3p");
  window.c3p = c3p;
  const insight = require("./c3p/theme/insight/insight");

  import Vue from "vue";

  export default {
      name: "c3pChart",
      props: [
        "report"
      ],
      data() {
        return {
          "chartData": this.report.payload,
          "p1": null
        };
      },
      created() {
        const self = this;
        const options = {
          color: {
            pattern: ['#7294ce', '#aaa']
          }
        };

        Vue.nextTick(() => {

          self.barChart(self.chartData[0], "insight.bar2", "");
          self.donutChart(self.chartData[1], "insight.donut", options);

//          this.p1 = new Promise(
//              function(resolve, reject) {
//                self.createChart(self.chartData[0], "", resolve);
//              }
//          );
//          this.p1.then(
//              function(){
//                self.createChart(self.chartData[1], options);
//              }
//          );

        });
      },
      methods: {
        createChart(data, theme, opt) {
          const options = opt ? opt : {};
          console.log(data.reportType);

          c3p.generate("#"+data.reportType+"_chart", theme, {
            data: {
              columns: data.chartData
            },
            options
          });
        },
        barChart(data, theme, opt) {
          const options = opt ? opt : {};
          console.log(data.reportType);

          c3p.generate("#"+data.reportType+"_chart", theme, {
            data: {
              columns: data.chartData
            },
            options
          });
        },
        donutChart(data, theme, opt) {
          const options = opt ? opt : {};
          console.log(data.reportType);

          c3p.generate("#"+data.reportType+"_chart", theme, {
            data: {
              columns: data.chartData
            },
            options
          });
        }
      }
  };

</script>
