import Image from 'next/image';
import one from './one.webp'
import two from './two.webp'
import three from './three.webp'

const New =()=>{
    return(
        <section className="new-section">
<h1>FoodiMann brings new opportunities</h1>
<div className="new">

    <div>
        <Image src='https://www.foodchow.com/images2/fc-for-customers-2.png' alt="" width={100} height={100}/>
        <h5>Connect With New Customers</h5>
        <p className="tests">Adding your business to the platform means access to thousands of new customers in different neighbourhoods.</p>
        </div>
        <div>
        <Image src='https://www.foodchow.com/images2/fc-for-customers-3.png' alt="" width={100} height={100}/>
        <h5>Unlock Revenue</h5>
        <p className="tests">Let customers enjoy your business from anywhere, and capture the interest of new ones who havent tried it yet.</p>
        </div>
        <div>
        <Image src='https://www.foodchow.com/images2/fc-for-customers-1.png' alt="" width={100} height={100}/>
        <h5>Focus on Your Business</h5>
        <p className="tests">We take care of all the payments and customer support, whilst our FoodiMann riders take care of the delivery. Leaving you to focus on what matters!.</p>
        </div>
    </div>
        </section>

    )
}
export default New