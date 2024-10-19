import { ReactNode } from "react";

interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	close: () => void;
}

function Modal({ children, isOpen, close }: ModalProps) {
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50"
			onClick={close}
		>
			<div
				className="bg-dark-300 p-8 rounded-2xl relative"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<button
					onClick={close}
					className="absolute top-2 right-2 text-2xl font-bold text-pumpkin-500 hover:text-pumpkin-600"
				>
					✕
				</button>
				{children}
			</div>
		</div>
	);
}

export default Modal;
