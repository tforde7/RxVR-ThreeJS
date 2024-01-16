import * as THREE from 'three';

export function createGround(scene, width, height) {
    const geometry = new THREE.PlaneGeometry(width, height)
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
    })
    const ground = new THREE.Mesh(geometry, material)
    ground.rotation.x = -Math.PI / 2
    scene.add(ground)
    return ground
}