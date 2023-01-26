<template>
    <body style="margin: 0; overflow: hidden;">
        <div style="z-index: 1" class="mb-5 fixed-bottom d-flex justify-content-center">
            <button class="px-3 pb-2 h1" id="capture2" @click="capture()">capture</button>
        </div>
        <a-scene
            vr-mode-ui="enabled: false;"
            loading-screen="enabled: false;"
            renderer="logarithmicDepthBuffer: true;"
            arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
            id="scene"
            gesture-detector
        >
        <a-assets>
            <a-asset-item
                id="animated-asset"
                src="/assets/griffon.gltf"
            ></a-asset-item>
        </a-assets>
    
        <a-marker
            id="animated-marker"
            type="pattern"
            preset="custom"
            url="/assets/pattern-80thver2.patt"
            raycaster="objects: .clickable"
            emitevents="true"
            cursor="fuse: false; rayOrigin: mouse;"
            >
                <a-entity
                    id="bowser-model"
                    animation-mixer="loop: repeat"
                    gltf-model="/models/low_poly_room/scene.gltf"
                    class="clickable"
                    gesture-handler
                    rotation = "-90 0 0"
                    scale = "0.01 0.01 0.01"
                ></a-entity>
            </a-marker>
            <a-entity camera></a-entity>
        
        </a-scene>
    </body>
  </template>

<script>
export default{
    methods: {
        capture() {
            console.log("HI");
        },
    }
}
</script>