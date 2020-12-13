<template>
  <div class="search-result">
    <div class="container">
      <div>
        <div>
          <div class="search-tit"></div>
          <Produclist />
        </div>
        <div class="search-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Produclist from '../secondary-components/product-list'
export default {
  components: {
    Produclist
  }
}
</script>

<style>

</style>