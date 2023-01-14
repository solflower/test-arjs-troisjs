<template>
  <div class="vertical-center">
    <button id="capture">
      Capture
    </button>
  </div>
  <a-scene
    arjs="sourceType: webcam; sourceWidth:960; sourceHeight:480; displayWidth: auto; displayHeight: auto;"
  >
    <!-- create your content here. just a box for now -->
    <a-box color="tomato" position="0 0.5 0" material="opacity: 0.5;"></a-box>
    <!-- define a camera which will move according to the marker position -->
    <a-marker-camera preset="hiro"></a-marker-camera>
  </a-scene>
</template>
<style>
.vertical-center {
  position: absolute;
  margin: 30px;
  right:    1;
  bottom:   0;
}
#capture{
  padding: 10px;
  z-index: 10000;
}
</style>
<script setup>
import html2canvas from "html2canvas";
// html2canvas(document.querySelector("#capture").addEventListener("click", (e)=>{
// 	console.log("HIDE OBJECTS")
// })).then((canvas) => {
//   document.body.appendChild(canvas);
// });
</script>