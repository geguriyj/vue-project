const data = require('./mock-data')
const LATENCY = 16

export function getForm (cb) {
  cb(data)
}

// export function setForm (cb) {
//   setTimeout(() => {
//     cb(data)
//   }, LATENCY)
// }

// export function saveForm ({ title, type, components }, cb) {

// 	debugger;
	
//   const timestamp = Date.now()
//   const id = 'form_' + timestamp
//   const formData = {
// 	    formId: id,
// 	    authority: type,
// 	    components: components
// 	}
// 	setTimeout(function () {
// 	cb(formData)
// 	}, LATENCY)
// }
