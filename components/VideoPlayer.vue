<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>
<script setup>
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import { ref, onMounted, onBeforeMount } from "vue";
let videoPlayer = ref(null);
const props = defineProps(["options"]);
let player = null;
onMounted(() => {
  let all = videoPlayer.value;
  console.log(all)
  player = videojs(all, props.options, () => {
    player.log("onPlayerReady", player);
  });
});
onBeforeMount(() => {
  if (player) {
    player.dispose();
  }
});
</script>