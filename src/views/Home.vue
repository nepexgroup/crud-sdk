<template>
  <div class="home">
    <ul>
      <li v-for="(field, key) in fields" :key="key">
        <x-input v-model="first_name" v-bind="field" :key="key"
        @input="receivedInput">
          <!-- <template v-slot:label>
            <label :for="field.name">Sample</label>
          </template>
          <template v-slot:input>
            <input type="text" :id="field.name">
          </template> -->
        </x-input>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Input from '@/components/fields/Input/Input.vue';

@Component({
  data() {
    return {
      first_name: '',
      fields: [
        {name: 'first_name', label: 'First Name', type: 'text'},
        {name: 'description', label: 'Description', type: 'checkbox'},
        // {name: 'button', label: 'Country', type: 'button'},
        // {name: 'color', label: 'color', type: 'color'},
        // {name: 'date', label: 'date', type: 'date'},
        // {name: 'datetime-local', label: 'datetime-local', type: 'datetime-local'},
        // {name: 'email', label: 'email', type: 'email'},
        // {name: 'file', label: 'file', type: 'file'},
        // {name: 'hidden', label: 'hidden', type: 'hidden'},
        // {name: 'image', label: 'image', type: 'image'},
        // {name: 'month', label: 'month', type: 'month'},
        // {name: 'number', label: 'number', type: 'number'},
        // {name: 'password', label: 'password', type: 'password'},
        // {name: 'radio', label: 'radio', type: 'radio'},
        // {name: 'range', label: 'range', type: 'range'},
        // {name: 'reset', label: 'reset', type: 'reset'},
        // {name: 'search', label: 'search', type: 'search'},
        // {name: 'submit', label: 'submit', type: 'submit'},
        // {name: 'tel', label: 'tel', type: 'tel'},
        // {name: 'time', label: 'time', type: 'time'},
        // {name: 'url', label: 'url', type: 'url'},
        // {name: 'week', label: 'week', type: 'week'},
      ]
    }
  },
  methods: {
    receivedInput(e){
      console.log(e)
    }
  },
  components: {
    'x-input': Input,
  },
})
export default class Home extends Vue {}
</script>
