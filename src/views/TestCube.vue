<template>
  <!-- <div class="vertical-center">
    <button id="capture">
      Capture
    </button>
  </div> -->
  <div style='z-index: 1;' class="vertical-center">
    <button id="capture" @click="capture()">
        HIDE OBJECTS
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
<script>
export default {
  name: "dta",
  data() {
    return {
      
    };
  },
  components: {
    //
  },
  created() {
    //
  },

  mounted() {
    //
  },

  methods: {
    capture(){
      console.log("HI");
    },
  },
};
</script>

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