import { useEffect, useRef } from "react";
import * as THREE from "three";
import FadeIn from "./animation/FadeIn";
import { loadImage } from "../utils/loadImage";

function Sphere() {
	const mountRef = useRef<HTMLDivElement | null>(null);
	const isDragging = useRef(false);
	const previousMousePosition = useRef({ x: 0, y: 0 });

	useEffect(() => {
		if (!mountRef.current) return;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		});

		const setRendererSize = () => {
			if (mountRef.current) {
				const { clientWidth, clientHeight } = mountRef.current;
				renderer.setSize(clientWidth, clientHeight);
				camera.aspect = clientWidth / clientHeight;
				camera.updateProjectionMatrix();
			}
		};

		setRendererSize();
		mountRef.current.appendChild(renderer.domElement);

		window.addEventListener("resize", setRendererSize);

		const textureLoader = new THREE.TextureLoader();
		const texture = textureLoader.load(loadImage("images/profile.png"));

		const geometry = new THREE.SphereGeometry(3, 32, 32);
		const material = new THREE.MeshStandardMaterial({
			map: texture,
		});

		const sphere = new THREE.Mesh(geometry, material);
		scene.add(sphere);

		const ambientLight = new THREE.AmbientLight();
		scene.add(ambientLight);

		camera.position.z = 5;

		const onMouseDown = (event: MouseEvent) => {
			isDragging.current = true;
			previousMousePosition.current = {
				x: event.clientX,
				y: event.clientY,
			};
		};

		const onMouseMove = (event: MouseEvent) => {
			if (!isDragging.current) return;

			const deltaMove = {
				x: event.clientX - previousMousePosition.current.x,
				y: event.clientY - previousMousePosition.current.y,
			};

			sphere.rotation.y += deltaMove.x * 0.005;
			sphere.rotation.x += deltaMove.y * 0.005;

			previousMousePosition.current = {
				x: event.clientX,
				y: event.clientY,
			};
		};

		const onMouseUp = () => {
			isDragging.current = false;
		};

		mountRef.current.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);

		const animate = () => {
			requestAnimationFrame(animate);

			if (!isDragging.current) {
				sphere.rotation.y += 0.01;
			}

			renderer.render(scene, camera);
		};
		animate();

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
