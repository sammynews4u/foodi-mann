import Image from "next/image"
import Link from "next/link";

const Contract=()=>{
    return(
        <section className='contract'>
            <div>
        <h3>    Get Started Today</h3>
<p className='tests'>Join the growing community of businesses globally
that have transformed their sales and operations with
FoodiMann. Contact us now to schedule a demo and
experience the future of workforce management and
online ordering processing. Discover how
FoodiMann can transform your workspace
management and ordering processing into a seamless
and efficient experience. Your journey to better
digital presence and excellence starts here.</p>
<Link href='/contact'>
<button className="contact">Contact Us Now</button></Link>
                </div>
                <div>
                    <Image src="https://img.freepik.com/premium-photo/looking-through-contract_236854-15461.jpg?w=740" alt="" width={600}height={450}/>
                    </div>
        </section>
    )
}
export default Contract