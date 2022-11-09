<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
    <p> {{ currentStatus }} {{ current_time }} </p>
  </div>
</template>
<script setup>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { computed } from "vue";
import {
  state,
  time,
  current_status,
  setStatus,
  setTime,
} from "../stores/index";

import { ref, onMounted, onBeforeMount } from "vue";
let videoPlayer = ref(null);
const props = defineProps(["options"]);
let player = null;
onMounted(() => {
  let all = videoPlayer.value;
  player = videojs(all, props.options, () => {
    player.log("onPlayerReady", player);
    print();
  });
});
let currentStatus = computed({
  get: () => state.status,
  set: (value) => setStatus(value),
});

let current_time = computed({
  get: () => state.current_time,
  set: (value) => setTime(value),
});

const print = () => {
  player.on("timeupdate", () => {
    setStatus("video playing: ");
    setTime(player.currentTime());
  });
  player.on("play", function (e) {
    setStatus("Video playback started: ");
    setTime(player.currentTime());
  });

  player.on("pause", function (e) {
    setStatus("Video playback paused:");
    setTime(player.currentTime());
  });

  player.on("seeking", function (e) {
    setStatus("Video seeking: ");
    setTime(player.currentTime());
  });

  player.on("seeked", function (e) {
    setStatus("Video seek ended: ");
    setTime(player.currentTime());
  });

  player.on("ended", function (e) {
    setStatus("Video playback ended: ");
    setTime(player.currentTime());
  });
};
onBeforeMount(() => {
  if (player) {
    player.dispose();
  }
});
</script>