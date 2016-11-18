import * as api from '../api'

export const getForm = ({ commit }) => {
  api.getForm(formData => {
    commit('addForm', {
      formData
    })
  })
}

// export const saveForm = ({ commit }, payload) => {
//   api.saveForm(payload, formData => {
//     commit('saveForm', {
//       formData
//     })
//   })
// }