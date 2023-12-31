


import CountUp from "react-countup";

const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
{
iconName: 'fa-solid fa-users fa-fw users',
count: '12600',
text: 'Marchant Enrolled',
},
{
iconName: 'fa-solid fa-user-graduate fa-fw graduate',
count: '30',
text: 'Certified Courses',
},
{
iconName: 'fa-solid fa-award fa-fw award',
count: '100',
text: 'Rewards and GitCards',
},
]


const AboutUs = () => {



    return (
    <>
    <div className="header-section">
        <h2>About Us</h2>
    </div>
        <section className="about-us">
            <div className="achievements">
            {
                countList.map((item,index) => {
                    return (
                        <div key={index} className="item">
                            <i className={item.iconName}></i>
                            <p className="members">
                                <span className="members-number"><CountUp start={0} end={item.count} duration={3}/> +</span>
                                <span className="text">{item.text}</span>
                            </p>
                        </div>
                    )
                })
            }
            </div>
            <article className="details">
            <span className="sub-title">{subTitle}</span>
            <p className="description">{desc}</p>
            <h2 className="title">{title}</h2>
            <p className="btn">{btnText}</p>
            </article>
            <div className="instructor-img">
                <img src={require('../images/instructor/01.png')} alt="instructor Img" />
            </div>
        </section>
            </>
    )

}




export default AboutUs;