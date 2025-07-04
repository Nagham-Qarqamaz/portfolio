import { loadImage } from "../utils/loadImage";

interface ButtonProps {
    text: string;
    onClick: () => void;
    loading: boolean;
    loadingText: string;
    variant?: "primary" | "white";
}

function Button({
    text,
    onClick,
    loading,
    loadingText,
    variant = "primary",
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`font-normal hover:font-bold mt-6 text-lg px-6 py-3 rounded-full transform transition-transform duration-300 inline-flex items-center gap-2 ${
                variant == "primary" &&
                "bg-primary-500 hover:bg-primary-600 text-white"
            } ${
                variant == "white" && "bg-white hover:bg-white text-primary-500"
            }`}
            disabled={loading}
        >
            {loading ? (
                <>
                    <img
                        className="w-7 h-7"
                        src={loadImage("images/loading.gif")}
                    />
                    {loadingText}
                </>
            ) : (
                <p>{text}</p>
            )}
        </button>
    );
}

export default Button;
