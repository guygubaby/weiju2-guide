<template>
    <van-image
      width="100%"
      height="100%"
      fit="contain"
      lazy-load
      :src="src+'?imageView2/0/q/55%7Cimageslim'"
    >
    <template v-slot:loading>
      <van-loading type="spinner" size="20" />
    </template>
    <template v-slot:error>加载失败</template>
    </van-image>
</template>
<script>
export default {
  name: 'weiju-img',
  props: {
    src: {
      type: String,
      default: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }
  }
}
</script>
