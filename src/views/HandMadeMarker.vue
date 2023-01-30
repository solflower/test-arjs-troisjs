<template>
    <body style="margin: 0; overflow: hidden;">
        <div style="z-index: 1" class="mb-5 fixed-bottom d-flex justify-content-center">
            <button class="px-3 pb-2 h1" id="share_btn" @click="shareFile()">share</button>
            <button class="px-3 pb-2 h1" id="save_btn" @click="saveFile()">save</button>
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
            url="/assets/80logo_v5/finallogo_v2.patt"
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
var screenshot; 
export default {
  methods: {
        saveFile(){
            this.capture();
            // โหลดไฟล์ภาพ
            var link = document.createElement('a');
            link.download = 'screenshot.png';
            link.href = screenshot;
            link.click();

            console.log("Capture Complete !");
        },
        async shareFile(){
            // แชร์ไฟล์ภาพ
            this.capture();
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
            const shareData = {files: filesArray,};

            // เช็คก่อนว่า browser ที่ใช้อยู่แชร์ได้มั้ย
            if (navigator.canShare && navigator.canShare(shareData)) {
                try {
                    console.log("yes")
                    navigator.share(shareData)

                } catch (err) {
                    console.error(err.name + " " + err.message)
                }
            } else console.warn('Sharing not supported', shareData)

        },
        capture() {
            // document.querySelector("video").pause();

            const video = document.getElementsByTagName("video")[0];
            const canvas = document.createElement("canvas");

            var width = video.videoWidth, height = video.videoHeight;
            canvas.width = width;
            canvas.height = height;

            // วาด video กับโมเดล AR ที่ขึ้นบนจอ ลงบน canvas เปล่าๆ
            // var screenshot;
            canvas.getContext('2d').drawImage(video, 0, 0, width, height);
            var imgData = document.querySelector('a-scene').components.screenshot.getCanvas('perspective');
            canvas.getContext('2d').drawImage(imgData, 0, 0, width, height);
            screenshot = canvas.toDataURL('image/png');


        },
}}

</script>