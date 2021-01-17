<template>
  <div class="container mx-auto">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from '@/components/organisms/Footer.vue'
import Header from '@/components/organisms/Header.vue'

export default {
  components: { Footer, Header },
}
</script>
