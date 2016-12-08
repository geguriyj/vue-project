<template>
<div>
    <header class="header">
        <h1 class="blind">설문 결과 보기</h1>
        <nav class="top_menu">
            <div class="menu_wrap">
                <button
                    type="button"
                    class="btn_prev"
                    @click="back"><i>이전으로</i></button>
            </div>
        </nav>
        <div class="survey_head">
            <h1>응답 : {{ replyCount }} 건</h1>
            <div class="title1">
                <h2>{{ reportTitle }}</h2>
            </div>
            <div class="description">
                <label>{{ reportDescription }}</label>
            </div>
        </div>  
    </header>
    <section class="questionnaire" style="top:100px">
        <div v-for="item in reportItems">
            <pieChart v-if="item.componentType === 'single_choice'" :item="item" />
            <barChart v-if="item.componentType === 'multi_choice'" :item="item" />
        </div>
    </section>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_REPORT } from "../store/mutation-types";

import pieChart from "./Report.pieChart";
import barChart from "./Report.barChart";

export default {

    components: { pieChart, barChart },
    created() {
        this.fetch();
    },
    methods: {
        fetch() {
            this.$store.dispatch("getReport");
        },       
        back() {
            this.$store.commit(UPDATE_REPORT);
            this.$router.go(-1);
        }
    },
    computed: {
        ...mapGetters([
            "reportTitle",
            "reportDescription",
            "reportItems",
            "replyCount"
        ])
    }

};
</script>