import { Routes, Route } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import ProjectDetail from "./pages/ProjectDetail";
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
import ResumeAcademic from "./resume/ResumeAcademic";
import NotFound from "./pages/NotFound";

const App = () => {
    const { theme } = useTheme();

    return (
        <div
            className={`${
                theme == "light"
                    ? "text-black bg-[url('/images/background-image.png')] bg-cover bg-fixed"
                    : "text-white bg-secondary-800"
            }`}
        >
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
                        path="/portfolio/projects/:id"
                        element={<ProjectDetail />}
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
                    <Route
                        path="/portfolio/resume-academic"
                        element={<ResumeAcademic />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
};

export default App;
