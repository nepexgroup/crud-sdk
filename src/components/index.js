// // import Vue from 'vue';
// import { default as XInput} from './fields/Input/Input.vue'
// export default {
//     XInput
// };
// // const Components = {
// //     Input,
// // }

// // Object.keys(Components).forEach(name => {
// //     console.log(name)
// //     Vue.component(name, Components[name])
// // })

// // export default Components;

// // // const XInput = {
// // //     install(Vue, options) {
// // //      // Let's register our component globally
// // //      // https://vuejs.org/v2/guide/components-registration.html
// // //      Vue.component("x-input", Input);
// // //     }
// // //    };

// // //    // Automatic installation if Vue has been added to the global scope.
// // //    if (typeof window !== 'undefined' && window.Vue) {
// // //        window.Vue.use(XInput);
// // //    }


// // //    export default XInput

import XInput from './fields/Input/XInput.vue';
import XSelect from './fields/XSelect.vue';
//
// // Declare install function executed by Vue.use()
// export function install(Vue) {
// 	if (install.installed) return;
// 	install.installed = true;
// 	Vue.component('x-input', XInput);
// 	Vue.component('x-select', XSelect);
// }
//
// // Create module definition for Vue.use()
// const plugin = {
// 	install,
// };
//
// // Auto-install when vue is found (eg. in browser via <script> tag)
// let GlobalVue = null;
// if (typeof window !== 'undefined') {
// 	GlobalVue = window.Vue;
// } else if (typeof global !== 'undefined') {
// 	GlobalVue = global.Vue;
// }
// if (GlobalVue) {
// 	GlobalVue.use(plugin);
// }

// // To allow use as module (npm/webpack/etc.) export component
export default {
    XInput,
    XSelect,
};
