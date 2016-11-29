import * as types from "./mutation-types";

export default {

    [types.FETCHED_FORM] (state, payload) {
        state.detailForm = payload;
    },

    [types.SET_IMAGE] (state, { choice, desc, evt }) {
        //Get count of selected files
        const input = evt.target;
        // var files = [...input.files]
        const imgPath = input.value;
        const extn = imgPath.substring(imgPath.lastIndexOf(".") + 1).toLowerCase();

        if (extn === "gif" || extn === "png" || extn === "jpg" || extn === "jpeg") {

            if (typeof (FileReader) !== "undefined") {

                const reader = new FileReader();

                reader.onload = function(e) {
                    const src = e.target.result;

                    if(typeof desc !== "undefined") {
                        choice.choiceDescription.ko = desc;
                    }
                    if(typeof src !== "undefined") {
                        choice.imageUrl = src;
                    }
                };

                reader.readAsDataURL(input.files[0]);

            } else {
                alert("This browser does not support FileReader.");
            }

        } else {
            alert("Pls select only images");
        }
    },
    [types.REMOVE_OPTION] (state, { choice, component }) {
        const componentIdx = state.detailForm.payload.indexOf(component);
        const form = state.detailForm.payload[componentIdx];
        form.choices.splice(form.choices.indexOf(choice), 1);
    },
    [types.FETHED_REPORT] (state, payload) {
      state.report = payload;
    }
};
