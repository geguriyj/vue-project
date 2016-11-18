import { set } from 'vue'

export default {

  addForm (state, { formData }) {
    createForm(state, formData.authority.formId, formData.authority, formData.components);
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


function createForm (state, id, authority, components) {
  set(state, id, {
    formId: id,
    authority: authority,
    formlist: components
  })
  console.log('mutations ', components);
}