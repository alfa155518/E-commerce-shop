







const AppSection = () => {


    return (
        <section className="app-section main-style-section">
        <div className="header-section">
        <h2>Learn Anytime, Anywhere</h2>
        <p>Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn</p>
        </div>
        <div className="app-img">
            <img src={require('../images/app/01.jpg')} alt="app-img" />
            <img src={require('../images/app/02.jpg')} alt="app-img" />
        </div>
        <div className="sponsor-img">
            <img src={require('../images/sponsor/01.png')} alt="sponsor-img" />
            <img src={require('../images/sponsor/02.png')} alt="sponsor-img" />
            <img src={require('../images/sponsor/03.png')} alt="sponsor-img" />
            <img src={require('../images/sponsor/04.png')} alt="sponsor-img" />
            <img src={require('../images/sponsor/05.png')} alt="sponsor-img" />
            <img src={require('../images/sponsor/06.png')} alt="sponsor-img" />
        </div>
        </section>
    )

}



export default AppSection;