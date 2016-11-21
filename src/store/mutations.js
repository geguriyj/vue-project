import { set } from 'vue'

export default {

  addForm (state, { formData }) {
    createForm(state, state.formId, formData);
  },

  currentForm (state, { id }) {
    state.formId = id;
  },
  currentComponent (state, { id }) {
    state.forms.componentId = id;
  }

}


function createForm (state, id, components) {
  set(state.forms, id, {
    formId: id,
    components: components
  })
}