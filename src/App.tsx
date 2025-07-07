import { Routes, Route } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import { useMemo } from "react";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import CertificatesPage from "./pages/certificates";
import SkillsPage from "./pages/skills";
import ExperiencePage from "./pages/experience";
import Header from "./components/Header";
import EducationPage from "./pages/education";
import AchievementsPage from "./pages/achievements";
import FunFactsPage from "./pages/fun-facts";
import LanguagesPage from "./pages/languages";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ContactPage from "./pages/contact";
import { Toaster } from "react-hot-toast";
import ResumePage from "./resume/Resume";

const generateRandomCircles = (count = 5) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 30 + 10}rem`,
        opacity: Math.random() * 0.1 + 0.2,
        color: Math.random() > 0.5 ? "bg-primary" : "bg-pumpkin",
    }));
};

const App = () => {
    const { theme } = useTheme();
    const circles = useMemo(() => generateRandomCircles(5), []);

    return (
        <div
            className={`relative overflow-hidden bg-secondary-800 ${
                theme == "light" ? "text-black" : "text-white"
            }`}
        >
            {theme == "light" &&
                circles.map(({ id, left, top, size, opacity, color }) => (
                    <div
                        key={id}
                        style={{
                            left,
                            top,
                            width: size,
                            height: size,
                            opacity,
                        }}
                        className={`decorating-circle absolute rounded-full blur-3xl ${color}`}
                    />
                ))}
            <Toaster position="bottom-center" reverseOrder={false} />
            <div className="relative z-10 min-h-screen">
                <Header />
                <ScrollToTop />
                <Routes>
                    <Route path="/portfolio/" element={<HomePage />} />
                    <Route path="/portfolio/skills" element={<SkillsPage />} />
                    <Route
                        path="/portfolio/experience"
                        element={<ExperiencePage />}
                    />
                    <Route
                        path="/portfolio/projects"
                        element={<ProjectsPage />}
                    />
                    <Route
                        path="/portfolio/education"
                        element={<EducationPage />}
                    />
                    <Route
                        path="/portfolio/certificates"
                        element={<CertificatesPage />}
                    />
                    <Route
                        path="/portfolio/achievements"
                        element={<AchievementsPage />}
                    />
                    <Route
                        path="/portfolio/fun-facts"
                        element={<FunFactsPage />}
                    />
                    <Route
                        path="/portfolio/languages"
                        element={<LanguagesPage />}
                    />
                    <Route
                        path="/portfolio/contact"
                        element={<ContactPage />}
                    />
                    <Route path="/portfolio/resume" element={<ResumePage />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
};

export default App;
