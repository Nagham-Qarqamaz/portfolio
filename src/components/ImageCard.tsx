import { useState } from "react";
import SlidUp from "./animation/SlideUp";
import SimpleCard from "./SimpleCard";
import Modal from "./Modal";
import LazyImage from "./LazyImage";

interface ImageCardProps {
	src: string;
	title?: string;
	description?: string;
}

function ImageCard({ src, title, description }: ImageCardProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Modal isOpen={isModalOpen} close={closeModal}>
				<div className="w-[48rem] h-[30rem] flex flex-col justify-between items-center">
					<a
						className="text-pumpkin-500 hover:text-pumpkin-600 text-lg underline"
						href={src}
						target="_blank"
					>
						full-size image
					</a>
					<LazyImage
						className="max-w-full h-[95%] max-h-[95%] object-contain"
						src={src}
						alt={title}
					/>
				</div>
			</Modal>
			<div className="cursor-pointer w-52" onClick={openModal}>
				<SlidUp>
					<SimpleCard>
						<div className="font-bold text-base">{title}</div>
						<div>{description}</div>
						<LazyImage
							className="w-full h-56 object-cover mt-4 rounded-lg"
							src={src}
							alt={title}
						/>
					</SimpleCard>
				</SlidUp>
			</div>
		</>
	);
}

export default ImageCard;
