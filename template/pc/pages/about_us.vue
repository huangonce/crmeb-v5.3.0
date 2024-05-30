<template>
  <div class="cssa">
    <div class="content" v-html="content"></div>
  </div>
</template>
<script>
export default {
  auth: false,
  data() {
    return {
      content: "",
    };
  },
  created() {
    this.getContent();
  },
  methods: {
    getContent() {
      let that = this;
      that.$axios.get("/article/details/1").then((res) => {
        this.content = res.data.content;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cssa {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .content {
    max-width: 1200px;
    text-align: center;
    background-color: #fff;
    padding: 50px;
  }
}
</style>