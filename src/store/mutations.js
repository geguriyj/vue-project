import { set } from 'vue'

export default {

  addForm (state, { formData }) {
    createForm(state, 'suvery1001', formData);
  }

  // saveForm (state, { forms }) {
  //   debugger;
  //   Vue.set(state, formData.authority.formId, { formData });
  // }

  // editForm (state, { id, form, value, src }) {
  //   if(typeof value !== 'undefined') {
  //     form.text = value
  //   }
  //   if(typeof src !== 'undefined') {
  //     form.src = src
  //   }
  // }
}


function createForm (state, id, components) {
  set(state.forms, id, {
    formId: id,
    components: components
  })
  console.log('mutations ', components);
}