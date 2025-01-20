import Image from 'next/image';
import Link from "next/link";
const Door = ()=>{
    return(
        <>
        <section className="doors">
            <div>
        <h1>Boost Your Earnings With FoodiMannGo Delivery Hero’s</h1>
        <p>Enjoy Our New Rider Bonuses, Weekly Target, Tips and Refer-A- Friend Programme – Plus Additional Incentives to help you reach Your Earnings Goals!
            </p>
            <Link href="/deliver">
            <button className="learn">Sign Up Now</button></Link>
            </div>
        <div>
        <Image src="https://web.foodyman.org/images/parcel-2.png" alt="" width={500}height={400}/>
        </div>
        </section>
        </>
    )
}
export default Door;