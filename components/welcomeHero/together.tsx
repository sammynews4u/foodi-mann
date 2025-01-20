import Image from 'next/image';
import one from './one.png'
import sec from './sec.png'
import thi from './thi.png'
import opt from './opt.svg'
import Link from "next/link";

const Together=()=>{
    return(
        <div className='together-sec'>
            <Image src={opt}alt=""width={150}height={150}/>
            <h1>Let’s do it together</h1>
       
        <section className="together">
            <div>
                <Image src={one}alt="" width={250}height={200}/>
              <h5> Become a rider</h5> 
<p className="tests">Enjoy flexibility, freedom and competitive earnings by delivering through FoodiMann.</p>
<button className="regis">Register Here</button>
            </div>
            <div>
                <Image src={sec}alt="" width={250}height={200}/>
              <h5> Become a partner</h5> 
<p className="tests">Grow with FoodiMann! Our technology and user base can help you boost sales and unlock new opportunities!</p>
<button className="regis">Register Here</button>
            </div>
            <div>
                <Image src={thi}alt="" width={250}height={200}/>
              <h5> Careers</h5> 
<p className="tests">Ready for an exciting new challenge? If you’re ambitious, humble, and love working with others, then we want to hear from you!</p>
<Link href="/careers">
<button className="regis">Explore More</button>
</Link>
            </div>
        </section>
        </div>
    )
}
export default Together