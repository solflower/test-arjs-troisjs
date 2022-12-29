<template>
    <body style='margin : 0px; overflow: hidden;'>
            <a-scene>
                <!-- create your content here. just a box for now -->
                <a-box color="tomato" position='0 0.5 0' material='opacity: 0.5;'></a-box>
                <!-- define a camera which will move according to the marker position -->
                <a-marker-camera preset='hiro'></a-marker-camera>
            </a-scene>
    </body>
</template>

<style>
</style>