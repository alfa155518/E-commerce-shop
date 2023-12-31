






const Offer = () => {



    return (
        <section className="offer main-style-section">
        <div className="details-side">
            <p>Save The Day</p>
            <h4>Join On Day Long Free Workshop For Advanced <span>Mastering</span> On Sales</h4>
            <strong>Limited Time Offer! Hurry Up</strong>
        </div>
        <div className="register-side">
            <h2>Register Now</h2>
            <form>
                <input type="text" placeholder="UserName" />
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Phone" />
                <button className="btn">Register Now</button>
            </form>
        </div>
        </section>
    )

}


export default Offer;