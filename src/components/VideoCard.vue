<template>
  <div :key="video.id" class="thumbnail" @click="chooseVideo(video)">
    <div class="thumbnail-img">
      <img :src="video.thumbnail" />
    </div>
    <div class="thumbnail-info">
      <h3>{{video.title}}</h3>
      <p>{{video.creator}}</p>
      <p class="thumbnail-views">{{video.views}} Views</p>
    </div>
  </div>
</template>
<style scoped>
  .thumbnail-img {
    cursor: pointer;
  }

  .thumbnail-views{
    font-size:14px;
  }

  h3,
  p{
    margin:0;
    padding:0;
  }

  .thumbnail {
    display:flex;
  }

  .thumbnail img{
    width:168px;
  }

  .thumbnail-info{
    margin-left:20px;
  }

  .thumbnail h3{
    font-size:16px;
  }
</style>
<script>
export default {
  props: ['video', 'chooseVideo']
}
</script>
