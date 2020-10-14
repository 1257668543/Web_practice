<template>
  <div>
    <Create @handleplan="handleplan"></Create>
  </div>
</template>

<script>
import Create from './create'
export default {
  components: {
    Create
  },
  setup() {
    const handleplan = (plan) => {
      console.log(plan);
    }

    return {
      handleplan
    }
  }
}
</script>

<style>

</style>