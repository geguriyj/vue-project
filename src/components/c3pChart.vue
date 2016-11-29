<template>
  <div>
    <div id="bar_chart"></div>
    <div id="donut_chart"></div>
  </div>

</template>

<script>

//  import * as c3p from "../c3p";
//  import * as insight from "../c3/theme/insight/insight";
  const d3 = require("d3");
  const c3 = require("c3");
  const c3p = require("../c3/c3p");
  window.c3p = c3p;
  const insight = require("../c3/theme/insight/insight");

  import Vue from "vue";

  Vue.nextTick(() => {
      const chart1 = c3p.generate("#donut_chart", "insight.donut", {
        data: {
          columns: [
            ['모바일', 60],
            ['PC', 40]
          ]
        },
        color: {
          pattern: ['#7294ce', '#aaa']
        }
      });

      const chart2 = c3p.generate("#bar_chart", "insight.bar2", {
        data: {
          columns: [
            ['x', '0-12', '13-18', '19-24', '25-29', '30-34', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89'],
            ['남', 40, 50, 100, 120, 150, 155, 200, 30, 45, 30, 45],
            ['여', 30, 40, 40, 55, 50, 100, 25, 88, 22, 30, 45, 50]
          ]
        }
      });
  });


//Vue.component('c3pChart', {
//  template: '<div id="chart"></div>',
//  data: {
//    message: 'hello'
//  }
//});

  export default {
      name: "c3pChart",
      created() {

      },
      methods: {
          chart1 () {
            const chart1 = c3p.generate("#chart", "insight.donut", {
              data: {
                columns: [
                  ['모바일', 60],
                  ['PC', 40]
                ]
              },
              color: {
                pattern: ['#7294ce', '#aaa']
              }
            });
          },
          chart2 () {
            const chart2 = c3p.generate("#chart", "insight.bar2", {
              data: {
                columns: [
                  ['x', '0-12', '13-18', '19-24', '25-29', '30-34', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89'],
                  ['남', 40, 50, 100, 120, 150, 155, 200, 30, 45, 30, 45],
                  ['여', 30, 40, 40, 55, 50, 100, 25, 88, 22, 30, 45, 50]
                ]
              }
            });
          }
      }
  };
</script>
