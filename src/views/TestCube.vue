<template>
  <div style="z-index: 1" class="vertical-center">
    <button id="capture" @click="capture()">HIDE OBJECTS</button>
  </div>
  <a-scene
    arjs="debugUIEnabled: false; sourceType: webcam;  detectionMode: mono_and_matrix; matrixCodeType: 3x3 "
    renderer="logarithmicDepthBuffer: true"
  >

    <!-- create your content here. just a box for now -->
    <a-marker id="m0" type="barcode" value="45">
      <a-box position="0 0 0" color="red" opacity="0.5"></a-box>
      
    </a-marker>

    <a-marker id="test0" type="barcode" value="60" check-marker>
      <!--<a-entity gltf-model="/models/crown/crown.gltf" ></a-entity>-->
      
    </a-marker>

    <a-marker id="test1" type="barcode" value="58" check-marker>
      <a-box position="0 0 0" color="yellow" opacity="0.5"></a-box>
    </a-marker>

    <a-marker type="barcode" value="8">
      <a-box position="0 0 0" color="green" opacity="0.5"></a-box>
    </a-marker>

    <a-marker type="barcode" value="14">
      <a-box position="0 0 0" color="white" opacity="0.5"></a-box>
    </a-marker>
    
    <a-entity gesture-handler id="mk1" >
      <!-- <Renderer ref="renderer" resize="window">
        <Camera :position="{ z: 100 }" />
        <Scene ref="scene">
          <GltfModel src="/models/crown/crown.gltf" />
        </Scene>

      </Renderer> -->
    </a-entity>
    <a-entity gltf-model="/models/crown/crown.gltf" position="0 0 -10"></a-entity>

    <a-entity gesture-handler id="mk2" ></a-entity>
    <!-- define a camera which will move according to the marker position -->
    <a-entity camera></a-entity>
  </a-scene>
</template>
<script>
import { GltfModel } from 'troisjs';
export default {
  name: "dta",
  data() {
    return {};
  },
  components: {
    GltfModel
  },
  created() {
    //
  },

  setup() {
    function onReady(e){
      console.log('model ready', e)
    } 
  },

  methods: {
    capture() {
      console.log("HI");
    },
  },
};
let marker_visible = { test0: false, test1: false };
let ydiff = 0;
let xdiff = 0;

AFRAME.registerComponent("check-marker", {
  init: function () {
    let el = this.el;
    el.addEventListener("markerFound", function () {
      marker_visible[el.id] = true;
    });

    el.addEventListener("markerLost", function () {
      marker_visible[el.id] = false;
    });
  },
});

AFRAME.registerComponent("draw-line", {
  init: function () {
    this.modelComp = document.querySelector("#mk1").object3D;
    console.log("init")

    // to store the position of the the m0rkers
    this.p0 = new THREE.Vector3();
    this.p1 = new THREE.Vector3();
    //this.p0x =new THREE.Vector3();
    //this.p0y =new THREE.Vector3();

    this.el0 = document.querySelector("#test0");
    this.el1 = document.querySelector("#test1");

    // create line geometry
    let material = new THREE.MeshLambertMaterial({ color: 0x0000ff });
    let geometry = new THREE.CylinderGeometry(0.01, 0.01, 1, 3);
    geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.5, 0));
    geometry.applyMatrix(
      new THREE.Matrix4().makeRotationX(THREE.Math.degToRad(90))
    );

    this.line = new THREE.Mesh(geometry, material);
    this.line.scale.set(1, 5, 5);
    this.line1 = new THREE.Mesh(geometry, material);
    this.line1.scale.set(1, 5, 10);

    // get dom element from html (will draw line there)
    this.origin0 = document.querySelector("#drawHere0").object3D;

    this.origin0.add(this.line);

    //this.modelComp.rotation.z = THREE.Math.degToRad(-180)
  },
  tick: function (time, deltaTime) {
    // get position of marker
    if (marker_visible["test0"] && marker_visible["test1"]) {
      this.el0.object3D.getWorldPosition(this.p0);
      this.el1.object3D.getWorldPosition(this.p1);
      //console.log(ydiff)
      //console.log("check y: " + this.p0.y + " " + this.p1.y)
      //console.log("sub: "+(this.p0.y-this.p1.y))

      if (this.p1.y < this.p0.y && this.p0.x >= 0 && this.p1.x >= 0) {
        this.modelComp.position.x = (this.p0.x + this.p1.x) / 2 + 2;
        this.modelComp.position.y = (this.p0.y + this.p1.y) / 2;
        this.modelComp.position.z = (this.p0.z + this.p1.z) / 2;
      } else {
        this.modelComp.position.x = (this.p0.x + this.p1.x) / 2;
        this.modelComp.position.y = (this.p0.y + this.p1.y) / 2 + 2;
        this.modelComp.position.z = (this.p0.z + this.p1.z) / 2;
      }

      //console.log("x: " + this.p0.x + " " + this.p1.x);
      //console.log("y: " + this.p0.y + " " + this.p1.y);

      // difference between 2 marker on y axis
      ydiff = this.p0.y - this.p1.y;
      // difference between 2 marker on x axis
      xdiff = this.p0.x - this.p1.x;

      /*
      ใช้หลักบัญญัติไตรยางศ์เปรียบเทียบระหว่าง ydiff กับ มุม degree
      ช่วงของค่า ydiff คือ [7.8,-7.8] โดยประมาณจาก console.log
      เวลาหมุนป้ายไป 90 องศา ค่า ydiff คือ 7.8,-7.8 --> ydiff/7.8 = degree/90 --> degree = ydiff*(90/7.8) --> degree = ydiff*11.538
      แบ่งเป็น 2 กรณี คือหมุนป้ายโดยที่ป้ายยังไม่หัวทิ่ม (xdiff <= 0) กับหมุนป้ายหัวทิ่ม (xdiff>0)
      */
      if (xdiff <= 0) {
        this.modelComp.rotation.z = THREE.Math.degToRad(ydiff * -11.538);
      } else if (xdiff > 0) {
        this.modelComp.rotation.z = THREE.Math.degToRad(180 - ydiff * -11.538);
      }

      this.modelComp.visible = true;
    } else {
      this.modelComp.visible = false;
    }

    //this.p0x.set(this.p0.x+5,this.p0.y,this.p0.z);
    //this.p0y.set(this.p0.x,this.p0.y+5,this.p0.z);
  },
});
</script>

<style>
.vertical-center {
  position: absolute;
  margin: 30px;
  right: 1;
  bottom: 0;
}
#capture {
  padding: 10px;
  z-index: 10000;
}
</style>