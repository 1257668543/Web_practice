<!-- fragment -->
<template>
  <ul>
    <FragmentDemo :data="[5, 3, 1, 9, 7, 6, 4, 2, 8]"></FragmentDemo>
    <hr />
    <TeleportDemo />
    <hr />
    <!-- <SuspenseDemo /> -->
    <Suspense>
      <template #default>
        <AsyncComponent :timeout="3000" /> 
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </ul>
</template>

<script>
import FragmentDemo from "./fragment.vue";
import TeleportDemo from "./teleport.vue";
import AsyncComponent from './suspense.vue'
import Loading from './loading.vue'
export default {
  components: {
    FragmentDemo,
    TeleportDemo,
    AsyncComponent,
    Loading
  },
};
</script>

<style>
</style>