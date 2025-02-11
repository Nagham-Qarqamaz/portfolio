import { useState } from "react";
import { loadImage } from "../utils/loadImage";

interface LazyImageProps {
	src: string;
	className?: string;
	alt?: string;
}

const LazyImage = ({ src, className = "", alt = "image" }: LazyImageProps) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<>
			{!isLoaded && (
				<div
					className={`flex justify-center items-center ${className}`}
				>
					<img
						className="w-16 h-16"
						src={loadImage("images/loading.gif")}
					/>
				</div>
			)}
			<img
				className={className}
				src={src}
				alt={alt}
				style={{ display: isLoaded ? "block" : "none" }}
				onLoad={() => setIsLoaded(true)}
			/>
		</>
	);
};

export default LazyImage;
