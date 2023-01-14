<style>
  .red {
    color: #f00;
  }
  button {
    position: fixed;
    z-index: 9999;
  }
</style>

<template>
  <div>
    <body>]
      <button @click="test">Change sphere color</button>
      <a-scene>
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
  </body>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      const sphere = document.querySelector("a-sphere");
      const color = sphere.getAttribute("color")
      sphere.setAttribute("color", color === "blue" ? "green" : "blue")
    }
  }
}
</script>
