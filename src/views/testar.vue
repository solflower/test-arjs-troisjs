<template>
    <a-scene
    arjs='sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;'
    renderer="logarithmicDepthBuffer: true"
    >

    <a-marker type="barcode" value="60">
      <a-box position="0 0 0" color="green" ></a-box>
    </a-marker>

    </a-scene>
</template>