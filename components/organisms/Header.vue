<template>
  <header>
    <!-- <p>{{ site.title }}</p> -->
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { site } from '~/nuxt.config'

@Component
export default class Header extends Vue {
  mounted() {
    console.log(site)
  }
}
</script>
