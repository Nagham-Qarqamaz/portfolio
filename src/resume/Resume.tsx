import ResumeBody from "./ResumeBody";
import ResumeHeader from "./ResumeHeader";

const ResumePage = () => {
    return (
        <div className="p-20">
            <style>
                {`
                    .decorating-circle, header, footer {
                        display: none;
                    }
                    #root > div{
                        background: #FFFFFF;
                    }
                    
                `}
            </style>
            <ResumeHeader />
            <ResumeBody />
        </div>
    );
};

export default ResumePage;
