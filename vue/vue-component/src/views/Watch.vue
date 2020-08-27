<template>
  <div class="watch">
    <span style="margin-right: 20px">{{temp}}度</span>&nbsp;
    <span>{{suggest}}</span>
    <p>{{num}}</p>
    <br/>
    <button @click="add">add</button>&nbsp;
    <button @click="reduce">reduce</button>
  </div>
</template>

<script>
// mixins 将外部的代码扩展到VUE中
let addLog = {
    updated: function() {
        console.log('数据发生变化了，此时温度为' + this.temp)
    }
}

let ext = {
    created() {
        console.log('我是被扩展出来的created')
    },
    methods: {
        add() {
            console.log('我是被扩展出来的add')
        }
    }
}

export default {
    data() {
        return {
            temp: 25,
            suggest: '穿短袖',
            num: 0
        }
    },
    mixins: [addLog],
    extends: ext,
    methods: {
        add() {
            this.temp += 5
            // this.num++
            // console.log(this.num)
        },
        reduce() {
            this.temp -= 5
        }
    },
    watch: {
        temp: function(newVal, oldVal) {
            console.log(newVal, oldVal)
            if (newVal >= 15) {
                this.suggest = '穿短袖'
            } else if (newVal < 15 && newVal >= 0) {
                this.suggest = '穿夹克'
            } else if (newVal < 0) {
                this.suggest = '穿羽绒服'
            }
        }
    }
}
</script>

<style>

</style>