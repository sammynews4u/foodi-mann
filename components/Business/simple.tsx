import del from './del.webp'
import wat from './wat.webp'
import you from './you.webp'
import cus from './cus.webp'
import Image from 'next/image';
import { useState } from "react";
import fir from './fir.jpeg'
import sec from './sec.jpeg'


const Simple=()=>{
    const [tab, setTab] = useState(1);
    return(
        <section className="simple">
<h1>How Does FoodiMann Works?</h1>
<p>FoodiMann is designed to make your business more flexible and cost
effective across all users. So you can be sure of successful ordering and

Delivery each time.</p>

<div id="simple-tab">
                <div className="simple-btn">
                    <button onClick={() => setTab(1)} className={tab === 1 ? '' : ''}>Order Accepted by Customer</button>
                    <button onClick={() => setTab(2)} className={tab === 2 ? '' : ''}>Order Accepted by DeliveryMann</button>
                   
                </div>
            </div>
            {tab === 1 &&
                <>
                    <Image src={fir} width={1000} height={550} alt=''/>
                </>
            }
              {tab === 2 &&
                <>
                    <Image src={sec} width={1000} height={550} alt=''/>
                </>
            }
        </section>
    )
}
export default Simple