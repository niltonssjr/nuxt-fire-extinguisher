<template>
  <div class="wrapper-for-404">
    <div class="image-wrapper">
      <img :src="require('@/assets/images/sadboy.png')" alt="" class="image">
    </div>
    <div class="text-wrapper">
      <span>Oooops...</span>
      <span>Nothing</span>
      <span>here...</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper-for-404{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 80px 40px;
}
.wrapper-for-404 > div {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
}
img {
    width: 50%;
}
</style>
