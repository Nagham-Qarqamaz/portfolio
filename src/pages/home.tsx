import Banner from "../sections/Banner";
import About from "../sections/About";
import Container from "../components/Container";

const HomePage = () => {
    return <>
        <Banner />
        <Container>
            <About />
        </Container>
    </>
}

export default HomePage;
