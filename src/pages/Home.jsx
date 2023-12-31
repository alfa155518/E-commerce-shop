
import AboutUs from "../sections/AboutUs";
import AppSection from "../sections/AppSection";
import Categories from "../sections/Categories";
import Landing from "../sections/Landing";
import LocationClients from "../sections/LocationClients";
import Offer from "../sections/Offer";
import OurProduct from "../sections/OurProduct";
import SlideCategories from "../sections/SlideCategories";





const Home  = () => {




    return (
        <section className="home">
        <Landing/>
        <Categories/>
        <OurProduct/>
        <SlideCategories/>
        <Offer/>
        <LocationClients/>
        <AboutUs/>
        <AppSection/>
        </section>
    )

}


export default Home;