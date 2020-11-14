<template>
  <div class="classify-wrap">
    <div class="container" style="border-bottom-color: rgb(231, 231, 231)">
      <ul class="classify-nav">
        <li class="tag-a">
          <div>
            <div
              class="product-image-container"
              style="width: 130px; height: 120px"
            >
              <div
                class="image-container"
                style="padding: 25px 25px 15px; width: 80px; height: 80px"
              >
                <img
                  src="https://img.youpin.mi-img.com/jianyu/efb5e1c094c3e185d2add3e49bee0366.png?w=126&h=126"
                  alt="上新精选"
                  style="width: 80px; height: 80px"
                />
              </div>
            </div>
          </div>
          <p class="title" style="color: rgb(102, 102, 102)">上新精选</p>
        </li>
        <li class="tag-a">
          <div>
            <div
              class="product-image-container"
              style="width: 130px; height: 120px"
            >
              <div
                class="image-container"
                style="padding: 25px 25px 15px; width: 80px; height: 80px"
              >
                <img
                  src="https://img.youpin.mi-img.com/jianyu/24c86a799f3ea8ccfa675ff7563d50fb.png?w=126&h=126"
                  alt="小米众筹"
                  style="width: 80px; height: 80px"
                />
              </div>
            </div>
          </div>
          <p class="title" style="color: rgb(102, 102, 102)">小米众筹</p>
        </li>
        <li class="tag-a">
          <div>
            <div
              class="product-image-container"
              style="width: 130px; height: 120px"
            >
              <div
                class="image-container"
                style="padding: 25px 25px 15px; width: 80px; height: 80px"
              >
                <img
                  src="https://img.youpin.mi-img.com/jianyu/912d7d210a6a5771f5946f1a8ac39014.png?w=126&h=126"
                  alt="有品秒杀"
                  style="width: 80px; height: 80px"
                />
              </div>
            </div>
          </div>
          <p class="title" style="color: rgb(102, 102, 102)">有品秒杀</p>
        </li>
        <li class="tag-a">
          <div>
            <div
              class="product-image-container"
              style="width: 130px; height: 120px"
            >
              <div
                class="image-container"
                style="padding: 25px 25px 15px; width: 80px; height: 80px"
              >
                <img
                  src="https://img.youpin.mi-img.com/jianyu/8f0e4c5855e5c8dcb669e94e9a0549d9.png?w=126&h=126"
                  alt="热销榜单"
                  style="width: 80px; height: 80px"
                />
              </div>
            </div>
          </div>
          <p class="title" style="color: rgb(102, 102, 102)">热销榜单</p>
        </li>
        <li class="tag-a">
          <div>
            <div
              class="product-image-container"
              style="width: 130px; height: 120px"
            >
              <div
                class="image-container"
                style="padding: 25px 25px 15px; width: 80px; height: 80px"
              >
                <img
                  src="https://img.youpin.mi-img.com/jianyu/cac2205702a4acc7224b6f51308c0dd5.png?w=126&h=126"
                  alt="小米自营"
                  style="width: 80px; height: 80px"
                />
              </div>
            </div>
          </div>
          <p class="title" style="color: rgb(102, 102, 102)">小米自营</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  padding-top: 30px;
  height: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  width: 1080px;
  margin: 0 auto;
}
.classify-nav {
  height: 148px;
  overflow: hidden;
  padding-bottom: 10px;
}
.classify-nav li {
  float: left;
  width: 130px;
  margin-right: 107px;
}
.tag-a {
  cursor: pointer;
}
.product-image-container {
  overflow: hidden;
}
.container .classify-nav li:last-child {
    margin-right: 0;
}
</style>