import { useParams, useNavigate } from "react-router-dom";
import { getProjects } from "../utils/projects";
import { useTheme } from "../contexts/ThemeContext";
import Button from "../components/Button";
import Section from "../components/Section";
import Container from "../components/Container";

function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { theme } = useTheme();
    const { projects } = getProjects();

    const project = projects.find((p) => p.id === parseInt(id || "0"));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Project Not Found
                    </h1>
                    <Button
                        text="Back to Projects"
                        onClick={() => navigate("/portfolio/projects")}
                        loading={false}
                        loadingText=""
                    />
                </div>
            </div>
        );
    }

    return (
        <Container>
            <Section title={`${project.name}`}>
                <div className={`${theme == "dark" ? "py-4 lg:py-8" : ""}`}>
                    <div className="mb-6">
                        <h2
                            className={`text-2xl font-semibold mb-2 ${
                                theme == "dark"
                                    ? "text-pumpkin-100"
                                    : "text-pumpkin-700"
                            }`}
                        >
                            Description
                        </h2>
                        <div
                            className={`sm:text-xl leading-relaxed`}
                            dangerouslySetInnerHTML={{
                                __html: project.description,
                            }}
                        />
                    </div>

                    <div className="mb-8 flex flex-col items-center">
                        <h2
                            className={`text-2xl font-semibold mb-2 text-center ${
                                theme == "dark"
                                    ? "text-pumpkin-100"
                                    : "text-pumpkin-700"
                            }`}
                        >
                            Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {project.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-xl font-semibold bg-primary-600 text-white"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {project.videoURL && (
                        <div className="flex flex-col items-center">
                            <h2
                                className={`text-2xl font-semibold mb-2 text-center ${
                                    theme == "dark"
                                        ? "text-pumpkin-100"
                                        : "text-pumpkin-700"
                                }`}
                            >
                                Demo Video
                            </h2>
                            <iframe
                                className="w-full max-w-[50rem] h-[19rem] sm:h-[28rem] rounded-xl mt-4"
                                src={project.videoURL}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    )}
                </div>
            </Section>
        </Container>
    );
}

export default ProjectDetail;
