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
    
        <a-marker
            id="animated-marker"
            type="pattern"
            preset="custom"
            url="/assets/80logo_v2/pattern-80ver3.patt"
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
let shareData;
export default {
  methods: {
        dataURLtoFile(dataurl) {
            var bstr = atob(dataurl.split(',')[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return u8arr;
        },
        async capture() {
            // document.querySelector("video").pause();

            const video = document.getElementsByTagName("video")[0];
            const canvas = document.createElement("canvas");

            var width = video.videoWidth, height = video.videoHeight;
            canvas.width = width;
            canvas.height = height;

            // วาด video กับโมเดล AR ที่ขึ้นบนจอ ลงบน canvas เปล่าๆ
            var screenshot;
            canvas.getContext('2d').drawImage(video, 0, 0, width, height);
            var imgData = document.querySelector('a-scene').components.screenshot.getCanvas('perspective');
            canvas.getContext('2d').drawImage(imgData, 0, 0, width, height);
            screenshot = canvas.toDataURL('image/png');

            const blob = await (await fetch(screenshot)).blob();
            const filesArray = [
                new File(
                    [blob],
                    'bla.png',
                    {
                        type: blob.type,
                        lastModified: new Date().getTime()
                    }
                )
            ];
            const shareData = {
                files: filesArray,
            };

            //const byteArray = this.dataURLtoFile(screenshot);
            //shareData = { files: [new File([blob], "bla.png", { type: "/image/png" })] }
            if (navigator.canShare && navigator.canShare(shareData)) {
                try {
                    console.log("yes")
                    navigator.share(shareData)

                } catch (err) {
                    console.error(err.name + " " + err.message)
                }
            } else console.warn('Sharing not supported', shareData)
        },
}}

</script>