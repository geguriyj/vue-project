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
            <div class="description"  v-for="c in choices">
                <label>{{ c.choiceDescription }}</label>
            </div>
        </div>  
    </header>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_REPORT } from "../store/mutation-types";

export default {

    props: {
        choices: {
            type: Array,
            default() {
                return [];
            }
        },
        replyCount: {
            type: Number,
            default() {
                return 0;
            }
        }
    },
    methods: {
        back() {
            this.$store.commit(UPDATE_REPORT);
            this.$router.go(-1);
        }
    },
    computed: {
        // id() {
        //     return this.item.componentId;
        // },
        // title() {
        //     return this.item.componentTitle.ko;
        // },
        id() {
            return this.$route.params.id;
        },
        compId() {
            return this.$route.params.compId;
        },
        choices() {
            const comp = this.reportItems[2];
            return comp && comp.choices;
        },
        replyCount() {
            const ch = this.choices;
            return ch && ch.length;
        },
        ...mapGetters([
            "reportItems"
        ])
    }

};
</script>