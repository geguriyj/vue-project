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
    <section style="top:300px">
        <div v-for="item in reportItems">
            <pieChart v-if="item.componentType === 'single_choice'" :item="item" />
            <router-link v-if="item.componentType === 'long_answer'" :to="'/report/' + id + '/comp/' + item.componentId"><h1>[기타 의견 > ({{ item.choices.length }})]</h1></router-link>
        </div>
    </section>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_REPORT } from "../store/mutation-types";

import pieChart from "./Report.pieChart";

export default {

    props: {
        id: {
            type: String,
            default() {
                return "";
            }
        }
    },
    components: { pieChart },
    created() {
        this.fetch();
    },
    methods: {
        fetch() {
            this.$store.dispatch("getReport", {
                formId: this.$route.params.id
            });
        },       
        back() {
            this.$store.commit(UPDATE_REPORT);
            this.$router.go(-1);
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        ...mapGetters([
            "reportTitle",
            "reportDescription",
            "reportItems",
            "replyCount"
        ])
    }

};
</script>