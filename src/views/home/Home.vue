<template>
  <div class="home">
    <el-button @click="testApi">测试api请求</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import homeApi from './api/Home'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    testApi () {
      const params = {
        test: 122
      }
      homeApi.getTestApi(params).then((res) => {
        console.log(res, 'ress')
      })
    }
  }
}
</script>
