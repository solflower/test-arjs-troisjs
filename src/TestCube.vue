<template>
    <div id="capture" style="padding: 5px; background: #f5da55" class="z-3">
      <h4 style="color: #000">Hello world!</h4>
    </div>
    <a-scene arjs="sourceType: webcam; sourceWidth:960; sourceHeight:480; displayWidth: auto; displayHeight: auto;">
        <!-- create your content here. just a box for now -->
        <a-box
          color="tomato"
          position="0 0.5 0"
          material="opacity: 0.5;"
        ></a-box>
        <!-- define a camera which will move according to the marker position -->
        <a-marker-camera preset="hiro"></a-marker-camera>
    </a-scene>
</template>
<style>
</style>
<script setup>
import html2canvas from 'html2canvas';
html2canvas(document.querySelector("#capture")).then((canvas) => {
  document.body.appendChild(canvas);
});
</script>