
import visaImg  from '../images/pyment/visa-and-mastercard-logo-26.png'
import paypalImg  from '../images/pyment/PayPal-Logo.wine.png'
import { useRef } from 'react'






const Modal = ({statusModal,setCartProducts}) => {

        // All Li Payment Method
        let allLi = useRef()

        // Tow Content Payment Method 
        let allContent = useRef()

        // Check Tow statusModal To Show Modal 
        if (statusModal) {

            let handelLi =  allLi.current.querySelectorAll('li')

            // Handel Change Content
            handelLi.forEach((li) => {
                li.addEventListener("click", handelChange)
            })

            // Function Handel Change
            function handelChange()  {

                // Hide All Content
                allContent.current.querySelectorAll('div').forEach(con => {
                    con.style.display = 'none';
                })

                // Show Target Content
                document.querySelectorAll(this.dataset.name).forEach(el => {
                    el.style.display =  'block'
                })
            }

        }


        // Btn Close Modal Payment
        const  closePaymentModal = (e) => {
            e.preventDefault()
            statusModal = false
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
        }

        // Proceed Payment Function
        const  ProceedPayment = (e) => {
            e.preventDefault()

            statusModal = false

            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none'

            setCartProducts([])

            alert("Proceed Done")

            setTimeout(() =>{
                window.location.pathname = '/'
            }, 1000)
        }




    return (
        <section className="modal">
            <h3>Select Your Payment Method</h3>
        <ul ref={allLi}  className="payment-logo">
        <li  data-name='.visa'><img src={visaImg} alt="payment-img" /></li>
        <li  data-name='.paypal'><img src={paypalImg} alt="payment-img" /></li>
        </ul>

        <div ref={allContent}  className="content-payment content">

            {/* ===== Visa Content ======== */}
            <div className="visa">
                <h4>credit Card</h4>
                <form>
                    <input type="text" placeholder='CardHolder Name' />
                    <input type="number" placeholder='Card Number' />
                    <input type="date" placeholder='Expiration Date' />
                    <input type="number" placeholder='CVV' />
                    <ul className='btn-control'>
                    <button className='btn' onClick={(e) => ProceedPayment(e)}>Add To Cart</button>
                    <button className='btn close-payment' onClick={(e) => closePaymentModal(e)}>Close Payment</button>
                    </ul>
                </form>
                <article>
                        <em>Payment Disclaimer:</em> In No Event Shall Payment Or Partical Payment By Owner Material Or Services
                    </article>
            </div>

            {/* ====== Paypal Content ===== */}
            <div className="paypal" style={{display:"none"}}>
                <h4>Paypal Account Info</h4>
                <form>
                    <input type="email" placeholder='Enter Your Email' />
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Extra info' />
                    <ul className='btn-control'>
                    <button className='btn' onClick={(e) => ProceedPayment(e)}>Add Paypal</button>
                    <button className='btn close-payment'  onClick={(e) => closePaymentModal(e)}>Close Payment</button>
                    </ul>
                </form>
                    <article>
                        <em>Payment Disclaimer:</em> In No Event Shall Payment Or Partical Payment By Owner Material Or Services
                    </article>
            </div>
        </div>

        </section>
    )

}


export default Modal;