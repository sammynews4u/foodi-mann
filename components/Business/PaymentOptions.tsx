import Image from 'next/image';
import fl from './fl.jpeg'
import pl from './pl.png'
import st from './st.jpeg'
import me from './me.jpeg'
import py from './py.png'
import pay from './pay.jpeg'
import download from './download.jpeg'
import ly from './ly.jpeg'
import mes from './mes.jpeg'
import mo from './mo.jpeg'
import za from './za.png'
import my from './my.png'

const PaymentOptions=()=>{
    return(
      <section className='payment-intro'>
        <h5>Pay Via Online(Faster & secure way to pay bill)</h5>
      
        <section className="payment-content">
       <div className="payment-option">
      
  <label className="payment-label">
    <input type="radio" name="payment" className="payment-radio" />
    <span className="payment-name">Flutterwave</span>
  </label>
  <Image
    src={fl}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />
 
</div>
<div className="payment-option">
  <label className="payment-label">
  {/* <a href='https://paystack.com/pay/4hd6s5ia3c'> */}
    <input type="radio" name="payment" className="payment-radio"  />
    {/* </a> */}
    <span className="payment-name">Paystack</span>
  </label>
  <Image
    src={pay}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />

</div>
<div className="payment-option">
  <label className="payment-label">
    <input type="radio" name="payment" className="payment-radio" />
    <span className="payment-name">Maksekeskus</span>
  </label>
  <Image
    src={mes}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />
</div>
<div className="payment-option">
  <label className="payment-label">
    <input type="radio" name="payment" className="payment-radio" />
    <span className="payment-name">Iyzico</span>
  </label>
  <Image
    src={ly}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />
</div>
<div className="payment-option">
  <label className="payment-label">
    <input type="radio" name="payment" className="payment-radio" />
    <span className="payment-name">Mollie</span>
  </label>
  <Image
    src={mo}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />
</div>
<div className="payment-option">
  <label className="payment-label">
    <input type="radio" name="payment" className="payment-radio" />
    <span className="payment-name">Moya-Sar</span>
  </label>
  <Image
    src={my}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />
</div>
<div className="payment-option">
  <label className="payment-label">
    <input type="radio" name="payment" className="payment-radio" />
    <span className="payment-name">Zain-Cashy</span>
  </label>
  <Image
    src={za}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />
</div>
<div className="payment-option">
  <label className="payment-label">
    <input type="radio" name="payment" className="payment-radio" />
    <span className="payment-name">PayPal</span>
  </label>
  <Image
    src={pl}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />
</div>
<div className="payment-option">
  <label className="payment-label">
    <input type="radio" name="payment" className="payment-radio" />
    <span className="payment-name">Stripe</span>
  </label>
  <Image
    src={st}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />
</div>
<div className="payment-option">
  <label className="payment-label">
    <input type="radio" name="payment" className="payment-radio" />
    <span className="payment-name">Razorpay</span>
  </label>
  <Image
    src={download}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />
</div>
<div className="payment-option">
  <label className="payment-label">
    <input type="radio" name="payment" className="payment-radio" />
    <span className="payment-name">Mercador-Pago</span>
  </label>
  <Image
    src={me}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />
</div>
<div className="payment-option">
  <label className="payment-label">
    <input type="radio" name="payment" className="payment-radio" />
    <span className="payment-name">Paytabs</span>
  </label>
  <Image
    src={py}
    alt="Payment Gateway Image"
    className="payment-image"
    width={100} height={100}
  />
</div>
        </section></section>
    )
}
export default PaymentOptions