<template>
  <div class="home">
    <v-header title="豆瓣电影评分" :leftArrow="false"></v-header>
    <movie-section :section="sectionData"></movie-section>
  </div>
</template>

<script>

import { ref } from 'vue'
import Header from '@/components/Header.vue'
import MovieSection from '@/components/MovieSection.vue'
import { getMovieSection } from '@/utils/movie.js'

export default {
  name: 'Home',
  components: {
    'v-header': Header,
    'movie-section': MovieSection
  },
  setup() {
    const sectionData =  ref([])
    const movie_key = ['movieOnInfoList']
    const promiseArr = movie_key.map(function(key) {
      return getMovieSection(key)
    })
    function countStar(stars) {
      let light = Math.floor(stars / 2)
      let arr = []
      let i = 5
      while(i) {
        i--
        if (light > 0) {
          light --;
          arr.push(1)
        } else {
          arr.push(0)
        }
      }
      return arr;
    }
    Promise.all(promiseArr).then(function(res) {
      let r = res[0].movies.movieList
      console.log(r);
      let arr = []
      for (let i of r) {
        let tmp = {}
        let rate = {}
        tmp.image = i.img
        tmp.title = i.nm
        rate.score = i.sc
        rate.stars = countStar(i.sc)
        tmp.rating = rate
        arr.push(tmp)
      }
      sectionData.value.movies = arr
      sectionData.value.type = 'movieOnInfoList'
      console.log(sectionData.value);
    })
    return {
      sectionData
    }
  }
}
</script>
