<template>
  <div>
    <slot name="label">
      <label :for="name">{{ label }}:</label>
    </slot>
    <slot name="input">
      <input
        :type="type"
        :id="name"
        :value="value"
        @keyup="$event => $emit('keyup', $event)"
        @input="$event => $emit('input', $event.target.value)"
        @change="$event => $emit('input', $event.target.value)"
      />
    </slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import {CreateElement, VNode} from "vue";
// interface InputProps {
//   name: string
//   label: string
//   type?: string
// }  

@Component({
  name: 'x-input',
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    },
    value: {
      type: [String]
    },
    type: {
      default: "text",
      type: String
    }
  },
  methods: {
    keyUp(e) {
      console.log(e);
    }
  }
})
export default class Input extends Vue {
  // public renderError(h: CreateElement, err: Error): VNode {
  //   return h('pre', {style: {color: 'red'}}, err.stack)
  // }
  // // <template> गराउछ
  // public render(h: CreateElement): VNode {
  //   const slot = this.$slots.default ? this.$slots.default : [];
  //   // console.log(slot)
  //   // console.log(this.$scopedSlots.input)
  //   // console.log(this.$scopedSlots)
  //   // console.log(this.$slots)
  //   console.log(this)
  //   const elSlot = slot.map((children) => {
  //     // console.log(children)
  //     return [
  //       // this.$scopedSlots.label,
  //       h('label', {
  //         domProps: {
  //           for: this.$props.name
  //         }
  //       }, this.$props.label),
  //       h('input', {
  //         domProps: {
  //           type: this.$props.type,
  //           id: this.$props.name
  //         }
  //       })
  //     ]
  //   })
  //   return h(
  //       "div",
  //       {
  //         // "class": "foo",
  //         scopedSlots: {
  //           default: (props) => h('p', props),
  //           label: (props) => {
  //             return h('label', {
  //               domProps: {
  //                 for: props.name
  //               }
  //             }, props.label)
  //           },
  //         }
  //       },
  //       elSlot
  //   );
  // }
  //  render() {
  // //   class BaseApi {
  // //     constructor() {
  // //       this.baseUrl = "https://jsonplaceholder.typicode.com/";
  // //     }
  // //     async fetch(url) {}
  // //   }
  // //   class FetchApi extends BaseApi {
  // //     constructor() {
  // //       super();
  // //     }
  // //     async fetch(url) {
  // //       const response = await fetch(`${this.baseUrl}${url}`);
  // //       return await response.json();
  // //     }
  // //   }
  // //   let todos;
  // //   async function hello() {
  // //     let bAPI = new FetchApi();
  // //     return await bAPI.fetch("todos");
  // //   }
  // //   // (async () => {
  // //   //   let bAPI = new FetchApi();
  // //   //   todos = await bAPI.fetch("todos");
  // //   //   console.log(todos)
  // //   // })();
  // // // hello1();
  // //   hello().then(text => {
  // //     console.log(text);
  // //   });
  //   // todos = hello();
  //   // console.log(todos);
  //   //  in parent
  //   // <div slot-scope="{ data, simpleData }">
  //   //         {{ data }}
  //   //         {{ simpleData }}
  //   //         THIS IS A TEXT ON SCREEN
  //   //       </div>
  //   /* don't mind this one for now, you will always use it like that,
  // 	even if you will not know or understand exactly what it is */
  //   return this.$scopedSlots.default({
  //     data: 'simple data',
  //     simpleData: 'advance data'
  //   });
  // }
}
</script>
