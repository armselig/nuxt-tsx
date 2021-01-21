<template>
  <div>
    <h1 class="text-primary text-3xl font-bold">Home</h1>
    <Example />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: 'Home',
    }
  },
})
</script>
