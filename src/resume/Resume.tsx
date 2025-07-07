import Container from "../components/Container";
import ResumeBody from "./ResumeBody";
import ResumeHeader from "./ResumeHeader";

const ResumePage = () => {
    return (
        <>
            <Container>
                <div>
                    <style>
                        {`
                            .decorating-circle, header, footer {
                                display: none;
                            }
                            #root > div{
                                background: #FFFFFF;
                            }
                            .container{
                                padding: 0px;
                            }
                        `}
                    </style>
                    <ResumeHeader />
                    <ResumeBody />
                </div>
            </Container>
        </>
    );
};

export default ResumePage;
