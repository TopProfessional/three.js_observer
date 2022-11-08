import * as THREE from 'three'
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
scene.add(new THREE.AmbientLight(0xffffff, 1))
scene.add(new THREE.PointLight(0xffffff, 1))
scene.add(new THREE.HemisphereLight(0xffffff, 1))

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2,2,5);
scene.add(light);

// renderer.setClearColor(0x15181a, 0);

const controls = new OrbitControls( camera, renderer.domElement );

const loader = new GLTFLoader();
const clock = new THREE.Clock();
let cat;
let mixer;

loader.load( 'models/orc/scene.gltf', function ( gltf ) {
    cat = gltf.scene
    // cat.scale.set(0.01,0.01,0.01);
    // cat.scale.set(0.1,0.1,0.1);
    
	scene.add( cat );

}, undefined, function ( error ) {
	console.error( error );
} );

camera.position.z = 1.5;
camera.position.y=0.8;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();