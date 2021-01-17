<template>
  <div class="page container mx-auto">
    <Header />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Header from '@/components/organisms/Header'

export default {
  components: { Header },
}
</script>
