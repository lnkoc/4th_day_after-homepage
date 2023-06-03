<script setup>
import { defineAsyncComponent, ref } from 'vue';
import im7 from '../../assets/webgl_min/seven.jpg';
import im17 from '../../assets/webgl_min/seventeen.jpg';
import im10 from '../../assets/webgl_min/ten.jpg';
import im20 from '../../assets/webgl_min/twenty.jpg';

const SevenDemo = defineAsyncComponent(() => import('../HomeComponents/WebGL/SevenDemo.vue'));
const SeventeenDemo = defineAsyncComponent(() => import('../HomeComponents/WebGL/SeventeenDemo.vue'));
const TenDemo = defineAsyncComponent(() => import('../HomeComponents/WebGL/TenDemo.vue'));
const TwentyDemo = defineAsyncComponent(() => import('../HomeComponents/WebGL/TwentyDemo.vue'));

const miniatures = ref([im7, im17, im10, im20]);
const demoActive = ref(false);
const demoNumber = ref("");

function openDemo(index) {
  switch (index) {
    case 0:
      demoNumber.value = SevenDemo;
      break;
    case 1:
      demoNumber.value = SeventeenDemo;
      break;
    case 2:
      demoNumber.value = TenDemo;
      break;
    case 3:
      demoNumber.value = TwentyDemo;
      break;
  }
  demoActive.value = true;
}

function closeDemo() {
  demoActive.value = false;
  demoNumber.value = null;
}
</script>

<template>
  <div class="demoContainer">
    <template v-for="min in miniatures" :key="min">
      <img :src="min" class="miniature" @click="openDemo(miniatures.indexOf(min))">
    </template>
    <div v-if="demoActive" class="modal">
      <component :is="demoNumber" />
      <span class="close" @click="closeDemo">&times;</span>

    </div>
  </div>
</template>

<style>
.demoContainer {
  width: 660px;
}
.miniature {
  width: 155px;
  height: auto;
  border-radius: 10px;
  padding: 5px;
  
}
.miniature:hover {
  opacity: 0.8;
  cursor: pointer;
}
.modal {
  display: block;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
}
.close {
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 40px;
  font-weight: bold;
  color: whitesmoke;
  cursor: pointer;
}
</style>