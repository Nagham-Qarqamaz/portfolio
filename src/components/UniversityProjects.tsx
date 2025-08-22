import { useNavigate } from "react-router-dom";
import Button from "./Button";
import SimpleCard from "./SimpleCard";

const UniversityProjects = ({ theme }: { theme: string }) => {
    const navigate = useNavigate();

    return (
        <SimpleCard hoverEffect={false}>
            <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">
                    University Projects
                </h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div
                        className={`p-6 rounded-xl border-2 ${
                            theme === "light"
                                ? "border-gray-200 bg-gray-50"
                                : "border-secondary-600 bg-secondary-800"
                        }`}
                    >
                        <h4 className="font-semibold text-lg mb-3">
                            4th Year Project (96%)
                        </h4>
                        <p className="text-sm mb-4">
                            Interactive WebGL interface for problem-solving
                            website. Applied OpenGL expertise to web environment
                            with advanced 3D rendering.
                        </p>
                        <Button
                            text="View Project"
                            onClick={() => navigate("/portfolio/projects/2")}
                            loading={false}
                            loadingText=""
                            variant="primary"
                        />
                    </div>
                    <div
                        className={`p-6 rounded-xl border-2 ${
                            theme === "light"
                                ? "border-gray-200 bg-gray-50"
                                : "border-secondary-600 bg-secondary-800"
                        }`}
                    >
                        <h4 className="font-semibold text-lg mb-3">
                            Graduation Project (97%)
                        </h4>
                        <p className="text-sm mb-4">
                            3D virtual campus tour using Three.js and Blender.
                            Features pathfinding, collision detection, and
                            smooth camera controls.
                        </p>
                        <Button
                            text="View Project"
                            onClick={() => navigate("/portfolio/projects/3")}
                            loading={false}
                            loadingText=""
                            variant="primary"
                        />
                    </div>
                </div>
            </div>
        </SimpleCard>
    );
};

export default UniversityProjects;
