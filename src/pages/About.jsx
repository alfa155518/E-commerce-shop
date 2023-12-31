

import aboutIcon1 from '../images/about/icon/01.jpg'
import aboutIcon2 from '../images/about/icon/02.jpg'
import aboutIcon3 from '../images/about/icon/03.jpg'


const aboutList = [
{
imgUrl: aboutIcon1,
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Skilled Instructors',
desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
},
{
imgUrl: aboutIcon2,
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Get Certificate',
desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
},
{
imgUrl: aboutIcon3,
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Online Classes',
desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
},
]


const About = () => {


    return (
        <section className="about">
            <div className="left-side">
                <img src={require('../images/about/01.jpg')} alt="about-img" />
                <img src={require('../images/about/02.jpg')} alt="about-img" />
            </div>
            <div className="right-side">
            <div className="info">
                <h5>About Our Brand</h5>
                <h1>Good Qualification Services And Better Expriences</h1>
                <p>Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.</p>
            </div>
            <ul className="about-list">
                {
                    aboutList.map((item,i) => (
                        <li key={i}>
                            <img src={item.imgUrl} alt={item.imgAlt} />
                            <div className="detail">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </li>
                    ))
                        
                }
            </ul>
            </div>
        </section>
    )

}




export default About;