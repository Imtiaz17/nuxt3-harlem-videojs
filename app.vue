<template>
  <div>
    <video-player :options="videoOptions" />
  </div>
</template>
<script setup>
import { computed } from "vue";

import { state, fullName, setFirstName, setLastName } from "./stores/index";

const firstName = computed({
  get: () => state.firstName,
  set: (value) => setFirstName(value),
});

const lastName = computed({
  get: () => state.lastName,
  set: (value) => setLastName(value),
});
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