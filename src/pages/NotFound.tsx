import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
            <h1 className="text-[120px] font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-xl mb-8 text-center max-w-md">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/portfolio/"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;