import data from "./mock-data";
import reportData from "./report-mock-data";
export const getForm = cb => {
    cb(data);
};
export const getReport = cb => {
  cb(reportData);
};


// import axios from "axios";
//
// // https://github.com/mzabriskie/axios
// axios.defaults.withCredentials = true;
// axios.interceptors.response.use(function(resp) {
//     return resp.data;
// }, function(error) {
//     return Promise.reject(error);
// });
//
// const DOMAIN = "https://alpha.ndrive.navercorp.com";
//
// export const getForm = function({ id }) {
//
// 		let oParam = {
// 			"orgresource": "/",
// 			"type": 1,
// 			"depth": 0,
// 			"sort": "name",
// 			"order": "asc",
// 			"startnum": 0,
// 			"pagingrow": 10
// 		};
//
// 		axios.post(DOMAIN + "/GetList.ndrive", {
// 				params: oParam
// 		}).then(function(resp) {
// 				console.log(resp);
//
// 		}).catch(function(error) {
//
// 		});
// };
