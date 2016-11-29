<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>설문</h1>
      <input class="new-todo"
         autofocus
         autocomplete="off"
         placeholder="설문 상세 내용을 입력하세요.">
    </header>
    <c3pChart v-for="reports in myReport" :report="report"></c3pChart>
    <!-- main section -->
    <formContainer v-for="components in myForm" :components="components"></formContainer>
    <!-- footer -->
    <footer class="footer">
      <ul class="filters">
        <li>
          <a :href="'#/'">UP</a>
          <a :href="'#/'">DOWN</a>
        </li>
      </ul>
      <button class="delete">
        DELETE
      </button>
    </footer>
  </section>
</template>

<script>

import { mapGetters } from "vuex";

import formContainer from "./components/FormContainer.vue";
import c3pChart from "./components/c3pChart.vue";

export default {
    name: "app",
    components: {
        formContainer, c3pChart
    },
    created() {
        // this.$store.commit("currentForm", { formId: "suvery1001"});
    },
    computed: {
        ...mapGetters([
            "detailForm",
            "report"
        ]),
        myForm() {
            return this.detailForm;
        },
        myReport() {
          return this.report;
        }
    }
};






// // 하단에서 열리는 메뉴팝업
// import Popup from './components/Popup.vue'
// new Vue({
//   el: '#bottomPop',
//   render: h => h(Popup)
// })


</script>

<style src="todomvc-app-css/index.css"></style>
<style>

  .main2 {
    margin-bottom: 50px;
    border: 2px solid #C4DDDF;
  }
  .new-todo {
    padding: 16px;
  }
  .todo-list li img {
    margin-left: 50px;
    margin-buttom: 50px;
    width: 250px;
  }
  .todo-list li img.show {
    display: block;
  }
  .todo-list li .fileUpload {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
    position: absolute;
    overflow: hidden;
    top: 15px;
    right: 50px;
    height: 20px;
    padding: 5px;
    font-size: 13px;
    border-radius: 4px;
  }
  .todo-list li .fileUpload input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
  }

  .todo-list li .edit {
    width: 80%;
    border: 0;
    box-shadow: inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1);
  }
  .todo-list li .remove {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
  }
  .filters li a {
    border-color: rgba(175, 47, 47, 0.1);
  }
  .footer button {
    color: inherit;
    padding: 3px 7px;
    border: 1px solid transparent;
    border-radius: 3px;

    float: right;
    line-height: 20px;
    cursor: pointer;
    border-color: rgba(175, 47, 47, 0.1);
  }
</style>
