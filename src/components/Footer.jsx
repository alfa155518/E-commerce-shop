import { Link } from "react-router-dom";


import '../css/footer.css'




const title = "About ShopCart";
const desc = "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
    {
        iconName: 'fa-solid fa-location-dot',
        text: 'New York, USA.',
    },
    {
        iconName: 'fa-solid fa-phone',
        text: '+880 123 456 789',
    },
    {
        iconName: 'fa-solid fa-envelope',
        text: 'info@shopcart.com',
    },
]

const socialList = [
    {
        iconName: 'fa-brands fa-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'fa-brands fa-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'fa-brands fa-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'fa-brands fa-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'fa-brands fa-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'fa-brands fa-twitter',
        desc: <p>Aminur islam @ShopCart Greetings!  #HTML_Template Grab your item, 50% Big Sale Offer !!</p>,
    },
    {
        iconName: 'fa-brands fa-twitter',
        desc: <p>Somrat islam @ShopCart Hey! #HTML_TemplateGrab your item, 50% Big Sale Offer !!</p>,
    },
]


const Footer = () => {




    return (
        <footer>
            <ul className="about-list">
                <h2>{title}</h2>
                <p>{desc}</p>
                <ul className="address-list">
                    {
                        addressList.map((address,index) => {
                            return (
                                <li key={index}>
                                    <i className={address.iconName}></i>
                                    <span>{address.text}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="social-list">
                    {
                        socialList.map((social,index) => {
                            return (
                                <li key={index} className={social.className}><Link to={social.siteLink}><i className={social.iconName}></i></Link></li>
                            )
                        })
                    }
                </ul>
            </ul>
            <ul className="categories-footer">
                <h2>{ItemTitle}</h2>
                {
                    ItemList.map((item,index) => {
                        return (
                            <li key={index}><Link to={item.link}>{item.text}</Link></li>
                        )
                    })
                }
            </ul>
            <ul className="quick-list">
                <h2>{quickTitle}</h2>
                {
                    quickList.map((list,index) => {
                        return (
                            <li key={index}><Link to={'/'}>{list.text}</Link></li>
                        )
                    })
                }
            </ul>
            <ul className="tweet-list">
                <h2>{tweetTitle}</h2>
                {
                    tweetList.map((item,index) => {
                        return (
                            <li key={index}>
                                <i className={item.iconName}></i>
                                <article>{item.desc}</article>
                                </li>
                        )
                    })
                }
            </ul>
        </footer>
    )

}


export default Footer;