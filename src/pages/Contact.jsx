import Banner from "../components/Banner";






import contactImg1 from '../images/icon/01.png'
import contactImg2 from '../images/icon/02.png'
import contactImg3 from '../images/icon/03.png'
import contactImg4 from '../images/icon/04.png'


const Contact = () => {



    
const contactList = [
    {
    imgUrl:contactImg1,
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
    },
    {
    imgUrl: contactImg2,
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632,02 982 745",
    },
    {
    imgUrl: contactImg3,
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
    },
    {
    imgUrl: contactImg4,
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
    },
    ];


    return (
        <>
        <Banner sectionName={'Get In Touch With Us'}/>
        <section className="contact-page">

            <div className="head-section">
                <h5>Get in touch with us</h5>
                <h2>"We're Always Eager To Hear From You!</h2>
            </div>

            <div className="content">
                <div className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.336634749496!2d31.299664076226424!3d30.059556316911856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1703894863286!5m2!1sar!2seg" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map" />
                </div>
                <ul className="location-info">
                {
                    contactList.map((list,i) => (
                        <li key={i}>
                            <img src={list.imgUrl} alt={list.imgAlt} />
                            <div className="details">
                                <h4>{list.title}</h4>
                                <span>{list.desc}</span>
                            </div>
                        </li>
                    ))
                }
                </ul>   
            </div>

            {/* ====== form OF Contact Page ======= */}
            <div className="form-contact">
                <div className="head-section">
                    <h5>Get in touch with Contact us</h5>
                    <h2>Fill The Form Below So We Can Get To Know You And Your Needs Better.</h2>
                </div>
            <form>
                <div className="inputs">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Subject"/>
                <input type="number" placeholder="Mobile Number"/>
                </div>
                <textarea type="text" placeholder="Your Message"/>
                <button className="btn">Submit</button>
            </form>
            </div>
        </section>
        </>
    )

}


export default Contact;