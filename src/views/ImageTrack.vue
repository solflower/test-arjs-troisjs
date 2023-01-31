<template>
    <a-scene
        vr-mode-ui="enabled: false;"
        loading-screen="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
        id="scene"
        gesture-detector
    >
        <a-nft
            samplehandler 
            type='nft' url="/nft/default-marker"
            smooth="true" smoothCount="10" smoothTolerance="0.01" smoothThreshold="5"
        >
            <!-- <a-entity modify-materials gltf-model="#model" material="src:#tex-image" play-all-model-animations="" position="0 0 0" rotation="0 0 0" scale="100 100 100" visible="true">
            </a-entity> -->
            <a-entity modify-materials gltf-model="/models/low_poly_room/scene.gltf" play-all-model-animations="" position="0 0 0" rotation="-90 0 0" scale="1 1 1" visible="true" >
            </a-entity>
        </a-nft>
		<a-entity camera></a-entity>
	</a-scene>
</template>
<script>
AFRAME.registerComponent('samplehandler', {
    init: function () {
        console.log("samplehandler init...")
        let marker = this.el;
        //let marker = this.el.sceneEl;

        marker.addEventListener('markerFound', function () {
            console.log("markerFound...");
        }.bind(this));

        marker.addEventListener('markerLost', function() {
            console.log("markerLost...");
        }.bind(this));
    }
});
</script>
<style>
a-scene{
  height: 100vh;
}
</style>
