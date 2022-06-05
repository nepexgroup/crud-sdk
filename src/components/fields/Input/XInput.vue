<template>
  <div>
    <!-- <slot name="label"> -->
      <label :for="name">{{ label }}:</label>
    <!-- </slot> -->
    <!-- <slot name="input"> -->
      <input
        :type="type"
        :id="name"
        :value="value"
        @keyup="$event => $emit('keyup', $event)"
        @input="$event => $emit('input', $event.target.value)"
        @change="$event => $emit('input', $event.target.value)"
      />
    <!-- </slot> -->
  </div>
</template>
<script lang="ts">
export default {
  name: 'XInput',
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
    keyUp(e: Event): void {
      console.log(e);
    }
  }
}
</script>
