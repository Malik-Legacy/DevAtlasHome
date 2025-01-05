import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(15, 30, 16);
const material = new THREE.MeshBasicMaterial({
  color: "green",
  side: THREE.DoubleSide , wireframe: true
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

sphere.position.x = 1;
sphere.position.y = 0.5;
sphere.scale.set(2,2,2)
function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
