import { set } from 'vue'

export default {

  addForm (state, { formData }) {
    createForm(state, state.formId, formData);
  },

  currentForm (state, { id }) {
    state.formId = id;
  },
  currentComponent (state, { id }) {
    console.log('currentComponent ', id)
    state.forms.componentId = id;
    console.log('currentComponent ', state.forms.componentId)
  }

}


function createForm (state, id, components) {
  set(state.forms, id, {
    formId: id,
    components: components
  })
}