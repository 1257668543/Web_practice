<template>
  <div class="wrapper">
    <Banner_nav />
    <Classify_section />
    <Category_section />
  </div>
</template>

<script>
import Banner_nav from '@/components/home-components/Banner-nav.vue'
import Classify_section from '@/components/home-components/Classify-section.vue'
import Category_section from '@/components/home-components/Category-section'
export default {
  components: {
    Banner_nav,
    Classify_section,
    Category_section
  }
}
</script>

<style>

</style>