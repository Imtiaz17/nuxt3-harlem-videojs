<template>
  <div>
    <video-player :options="videoOptions" />
  </div>
</template>
<script setup>

const videoOptions = 
  {
    autoplay: true,
    controls: true,
    loadingSpinner: false,
    errorDisplay: false,  
    sources: [
      {
        src: "http://techslides.com/demos/sample-videos/small.mp4",
        type: "video/mp4",
      },
    ],
  }
;
</script>