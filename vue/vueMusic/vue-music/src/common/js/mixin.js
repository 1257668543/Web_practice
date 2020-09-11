export const searchMixin = {
  data() {
    return {
      query: ''
    }
  },
  computed: {

  },
  methods: {
    onQueryChange(e) {
      this.query = e.trim() // 去空格
    }
  }
}