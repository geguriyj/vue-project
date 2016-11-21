export const forms = state => state.forms

export const form = state => {
  const form = state.forms[state.formId]
  return form
}
export const components = state => {
  const components = state.forms[state.formId]
  return components
}
export const component = state => {
  const component = state.forms[state.formId]['components'][state.forms.componentId]
  return component
}
export const choices = state => {
  const components = state.forms[state.formId]['components'][state.forms.componentId]['choices']
  return components
}