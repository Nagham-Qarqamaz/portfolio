import ResumeBody from "./work-components/ResumeBody";
import ResumeHeader from "./work-components/ResumeHeader";

const ResumePage = () => {
    return (
        <div className="p-20 text-black">
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
            <ResumeHeader />
            <ResumeBody />
        </div>
    );
};

export default ResumePage;
