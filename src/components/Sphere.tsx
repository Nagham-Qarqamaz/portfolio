import { useEffect, useRef } from "react";
import * as THREE from "three";
import FadeIn from "./animation/FadeIn";

function Sphere() {
	const mountRef = useRef<HTMLDivElement | null>(null);
	const isDragging = useRef(false);
	const previousMousePosition = useRef({ x: 0, y: 0 });

	useEffect(() => {
		if (!mountRef.current) return;

		// Scene and Camera
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		// Renderer with transparent background
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		});

		// Set renderer size to match parent element's size
		const setRendererSize = () => {
			if (mountRef.current) {
				const { clientWidth, clientHeight } = mountRef.current;
				renderer.setSize(clientWidth, clientHeight);
				camera.aspect = clientWidth / clientHeight;
				camera.updateProjectionMatrix();
			}
		};

		setRendererSize(); // Initial sizing
		mountRef.current.appendChild(renderer.domElement);

		// Resize listener to adjust canvas size on window resize
		window.addEventListener("resize", setRendererSize);

		// Load texture (image) for the sphere
		const textureLoader = new THREE.TextureLoader();
		const texture = textureLoader.load("/images/profile.png"); // Replace with your image path

		// Sphere geometry and material (with texture)
		const geometry = new THREE.SphereGeometry(3, 32, 32);
		const material = new THREE.MeshStandardMaterial({
			map: texture, // Apply the texture
		});

		const sphere = new THREE.Mesh(geometry, material);
		scene.add(sphere);

		// Lighting Setup
		const ambientLight = new THREE.AmbientLight();
		scene.add(ambientLight);

		// Camera position
		camera.position.z = 5;

		// Mouse drag functionality
		const onMouseDown = (event: MouseEvent) => {
			isDragging.current = true;
			previousMousePosition.current = {
				x: event.clientX,
				y: event.clientY,
			};
		};

		const onMouseMove = (event: MouseEvent) => {
			if (!isDragging.current) return;

			// Calculate the change in mouse position
			const deltaMove = {
				x: event.clientX - previousMousePosition.current.x,
				y: event.clientY - previousMousePosition.current.y,
			};

			// Update sphere rotation based on the drag distance
			sphere.rotation.y += deltaMove.x * 0.005; // Rotate horizontally
			sphere.rotation.x += deltaMove.y * 0.005; // Rotate vertically

			// Save the new mouse position for the next move
			previousMousePosition.current = {
				x: event.clientX,
				y: event.clientY,
			};
		};

		const onMouseUp = () => {
			isDragging.current = false;
		};

		// Add event listeners for dragging
		mountRef.current.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);

		// Animation loop (continuous rotation)
		const animate = () => {
			requestAnimationFrame(animate);

			// Keep the sphere rotating continuously
			if (!isDragging.current) {
				sphere.rotation.y += 0.01; // Continuous rotation
			}

			renderer.render(scene, camera);
		};
		animate();

		// Cleanup on unmount
		return () => {
			if (mountRef.current) {
				mountRef.current.removeChild(renderer.domElement);
			}
			window.removeEventListener("resize", setRendererSize);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
		};
	}, []);

	return (
		<FadeIn>
			<div
				ref={mountRef}
				className="w-[12rem] h-[12rem] cursor-pointer"
			/>
		</FadeIn>
	);
}

export default Sphere;
