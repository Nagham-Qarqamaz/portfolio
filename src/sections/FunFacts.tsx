import SlideLeft from "../components/animation/SlideLeft";
import SlideRight from "../components/animation/SlideRight";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

const funFacts = [
    {
        name: "Problem-Solving… Even in My Sleep",
        description: `
            <div class="space-y-3">
                <div>In 2019, I created a problem and solved it in my sleep, literally!</div>
                <div>While the problem was simple and could have been solved in other ways, I found it fascinating that my mind was actively problem-solving, even while unconscious.</div>
                <div>Take a look inside my brain through this video:</div>
            </div>
        `,
        videoURL:
            "https://www.youtube.com/embed/zNZ42gGPVEM?si=T2qVWm-grS12wnku",
    },
    {
        name: "Spring Boot & Angular in 4 Days… From Zero to Hero",
        description: `
            <div class="space-y-3">
                <div>In just 4 days, I built a fully functioning application using Spring Boot (backend) and Angular (frontend), technologies I had never worked with before.</div>
                <div>With the help of online tutorials and AI tools, I learned and implemented everything lightning-fast, proving my ability to adapt and learn quickly.</div>
            </div>
        `,
        videoURL: "https://www.youtube.com/embed/3_p-boncOEs",
    },
    {
        name: "Almost Hired at Noon… But Not Quite",
        company: "Noon | Dubai, UAE",
        description: `
            <div class="space-y-3">
                <div>Despite successfully completing noon’s rigorous recruitment process in 2023, I was never hired due to bad luck, hiring was paused in Dubai, and I’ve been waiting ever since with hope for more than 2 years.</div>
                <div>Before and during the process, I completed 4+ months of training and practiced extensively by solving 30+ SQL problems on LeetCode and 15+ on HackerRank, strengthening my knowledge in e-commerce, databases, and systems.</div>
                <div>As part of the recruitment process, I solved 14 out of 16 problems in the problem-solving test and cleared 3 interviews.</div>
            </div>
        `,
    },
    {
        name: "More Viewers Than Planned",
        description: `
            <div class="space-y-3">
                <div>While applying for the Erasmus Mundus Joint Master in Artificial Intelligence (EMAI), I uploaded my motivation video to YouTube, expecting only the scholarship committee to see it.</div>
                <div>Instead, it gained hundreds of views, received very positive public and private feedback, and led other applicants to reach out to me on LinkedIn for advice.</div>
            </div>
        `,
        videoURL:
            "https://www.youtube.com/embed/H_ttE_hAqYg?si=9XGVr5BNRtUGFrqO",
    },
    {
        name: "When the Interview Was Harder Than the Exam's Listening Part",
        description: `
            <div class="space-y-3">
                <div>Applied to a company in Malaysia while preparing for IELTS.</div>
                <div>I struggled to understand the HR during the interview and wasn’t hired.</div>
                <div>I later learned she had mentioned that my skills were good but my poor language might make communication difficult.</div>
                <div>A few weeks later, I earned my C1 IELTS certificate, proving my listening and language skills were top-notch all along!</div>
            </div>
        `,
    },
];

function FunFacts() {
    return (
        <Section title="Fun Facts">
            <div className="space-y-12">
                {funFacts.map((fact, index) => {
                    const Wrapper = index % 2 === 0 ? SlideRight : SlideLeft;

                    return (
                        <Wrapper key={index}>
                            <div className="max-w-[40rem] mx-auto">
                                <ProjectCard {...fact} />
                            </div>
                        </Wrapper>
                    );
                })}
            </div>
        </Section>
    );
}

export default FunFacts;
