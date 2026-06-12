import './Home.css';

const Home = () => {
    return (
        <div className="text-paragraph">
            <div>Hello, my name is Tomasz Laboj. I'm a musician and a programmer. The website is divided in two sections Music side and Programming side.</div>
            <div className="pictures-container">
                <div className="picture">
                    <img src="/acoustic-guitar-player.png" alt="Person playing on a electric guitar" width="320"/>
                </div>
            </div>

        </div>
    )
}
export default Home;