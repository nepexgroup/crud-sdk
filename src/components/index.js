/* eslint-disable */
// import { VueConstructor } from "vue"
import XInput from './fields/Input/XInput.vue';
import XSelect from './fields/XSelect.vue';

// export default {
//     XInput,
//     XSelect,
// };

// https://itnext.io/create-a-vue-js-component-library-part-2-c92a42af84e9
export default {
    // install (Vue: VueConstructor, options): void {
    install(Vue) {
        Vue.component('x-input', XInput)
        Vue.component('x-select', XSelect)
    }
}
