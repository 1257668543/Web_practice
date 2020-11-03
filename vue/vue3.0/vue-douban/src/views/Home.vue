<template>
  <div class="home">
    <v-header title="豆瓣电影评分" :leftArrow="false"></v-header>
    <movie-section :section="test"></movie-section>
  </div>
</template>

<script>

import { ref } from 'vue'
import Header from '@/components/Header.vue'
import MovieSection from '@/components/MovieSection.vue'

export default {
  name: 'Home',
  components: {
    'v-header': Header,
    'movie-section': MovieSection
  },
  setup() {
    const test = ref({movies: [
      {image: 'https://img.yzcdn.cn/vant/cat.jpeg', title: '喵呜', rating: {stars: [1, 1, 1, 1, 0], score: 8.5}},
      {image: 'https://img.yzcdn.cn/vant/cat.jpeg', title: '喵呜', rating: {stars: [1, 1, 1, 1, 0], score: 8.5}},
      {image: 'https://img.yzcdn.cn/vant/cat.jpeg', title: '喵呜', rating: {stars: [1, 1, 1, 1, 0], score: 8.5}},
    ],
    type: "hot"
    })
    return {
      test
    }
  }
}
</script>
