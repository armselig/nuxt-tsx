<template>
  <footer class="text-center">👋 {{ this.$data.site.author }}</footer>
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
export default class Footer extends Vue {
  mounted() {
    this.$data.site = site
  }
}
</script>
