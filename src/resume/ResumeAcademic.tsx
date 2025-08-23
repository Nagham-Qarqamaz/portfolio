import AcademicResumeHeader from "./academic-components/AcademicResumeHeader";
import AcademicResumeBody from "./academic-components/AcademicResumeBody";

const ResumeAcademic = () => {
    return (
        <div className="p-8 text-black">
            <style>
                {`
                    .decorating-circle, header, footer {
                        display: none;
                    }
                    #root > div{
                        background: #FFFFFF;
                        color: #000000;
                    }
                    
                `}
            </style>
            <AcademicResumeHeader />
            <AcademicResumeBody />
        </div>
    );
};

export default ResumeAcademic;
