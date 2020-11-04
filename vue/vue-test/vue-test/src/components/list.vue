<template>
  <div>
    <button @click="reverse">reverse</button>
    <div v-for="(item, i) in lists" :key="i">
      {{ item.content }}
      <input type="text"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [{ content: "0" }, { content: "1" }, { content: "2" }],
    };
  },
  methods: {
    reverse() {
      this.lists = this.lists.reverse()
    }
  },
};
</script>
