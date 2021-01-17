<template>
  <header>
    <p class="text-sm text-uppercase">{{ this.$data.site.title }}</p>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { site } from '~/nuxt.config'

@Component({
  data() {
    return {
      site: {},
    }
  },
})
export default class Header extends Vue {
  mounted() {
    this.$data.site = site
  }
}
</script>
