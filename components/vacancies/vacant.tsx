import VacantBox from './vacantBox'
import Link from 'next/link'


const Vacant = ()=>{
    const itemData =[
        {
            role:"Trade & E-Commerce",
        },
        {
            role:"Marketing & Sales",
        },
        {
            role:"HRM & Legal",
        },
        {
            role:"Accounting & Finance",
        },
        {
            role:"Engineering & IT ",
        },
        {
            role:"Customer Exp. & Support",
        },
        {
            role:"Admin & Operations",
        },
        {
            role:"Internship & Training",
        },
        {
            role:"Strategy & Plan",
        },
        {
            role:"FoodiMann Marketplace",
        },
        {
            role:"Others",
        },
    ]
    return(
        <>
        <section className="vacant-position">
            <h1>FoodiMann Vacancies</h1>
           
<p className="tests">
Do you enjoy working in a Dynamic food Tech and informal environment? At FoodiMann, we are changing 
the way of eating and shopping together, and our common goal is a satisfied customer, to whom we deliver
 almost anything in the shortest possible time.</p>
<p className="tests">
We are in the TOP Employers in terms of employee satisfaction from various markets in African
 and globally where our Delivery operates and Partners work round the clock to make sure you get
  your order delivered on time and with the best quality.</p>
<p className="tests">
We are growing fast, learning fast and having a lot of fun. And you might enjoy it with us!</p>
        </section>
        <section className="offset-bottom">
                <h2>Choose the field you want to work in</h2>
                <div className="tiles__wrap">
                    {itemData.map((item, index) => (
                        <div className="tiles__item" key={index}>
                            <Link href="/job-details">
                                <h3 className="tiles__title">{item.role}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
<VacantBox/>

        </>
       
    )
}
export default Vacant