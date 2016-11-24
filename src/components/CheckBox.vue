<template>
  <li class="todo">
    <input class="toggle" type="checkbox" :id="choice.choiceDescription.id">
    <label>{{choice.choiceDescription.ko}}</label>
    <img v-show="choice.imageUrl" :src="choice.imageUrl"/>
    <div class="fileUpload">
      <span>Upload</span>
      <input type="file" class="upload" @change="addImage({ choice }, $event)"/>
    </div>
    <button class="remove" @click="deleteChoice({ choice })">X</button>
  </li>
</template>

<script>

  import * as types from "../store/mutation-types";

  export default {
      name: "checkbox",
      props: ["choice", "component"],
      methods: {
          addImage (data, evt) {
              const choice = data.choice, text = choice.choiceDescription.ko;
              const desc = text ? text : "이미지";
              this.$store.commit(types.SET_IMAGE, { choice, desc, evt });
          },
          deleteChoice (data, evt) {
              const choice = data.choice;
              const component = this.component;
              this.$store.commit(types.REMOVE_OPTION, { choice, component, evt });
          }
      }
  };
</script>
