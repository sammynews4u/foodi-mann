import Image from 'next/image'
import chef1 from './chef1.webp'
import { useSettings } from "contexts/settings/settings.context";
import apps from './apps.png'
import google from './google.svg'

const EasySteps = ()=>{
    const { settings } = useSettings();
    return (
      <>
        <section className="easy-steps">
<div>
    <Image src={chef1}alt='' width={500} height={500}/>
    </div>
    <div>
   <h2> Join Us To Revolutionize The
Online Food Delivery Industry
with FoodiMann!</h2>
<h5>We Ensure the Perfect Checkout Journey for Your Customers,
by show casing Your Personal or Business Brand.</h5>
 <p className="tests">Customers can select food conveniently, customize their orders, and complete
transactions during checkout and Book Chef. The checkout process is simple
and minimized with multiple payment options.</p>
 <div className="app-Section">
    <div>
          <a href={settings?.customer_app_ios} target="_blank" rel="noopener noreferrer">
            <Image src={apps} alt="App store" width={100}  height={100}/>
          </a></div>
          <div>
          <a href={settings?.customer_app_android} target="_blank" rel="noopener noreferrer">
            <Image src={google} alt="Google play" width={100}  height={100}/>
          </a></div>
        </div>
        </div>
        </section>
        <section className='career-faq'>
          <h1>Frequently asked questions</h1>
        <details>
          <summary>
       <h5>
         Who are the chefs?
         </h5>
        </summary>
<p>FoodiMann show cased chefs with diverse backgrounds, experiences, specialties, and
services on the FoodiMann marketplace. With over thousands of chefs to choose from,
there&#39;s someone for every taste. Based on each chef&#39;s profile and conversation, you decide
who your perfect match is.</p>
</details>
<details>
  <summary>
    <h5>
How do I choose a chef?</h5></summary>
<p>You will have access to the profiles of all the chefs interested in serving you. You are
welcome to browse their biographies, culinary photo galleries, and, of course, reviews
from previous guests. Use this information to choose the right chef for you. It&#39;s hard to
think of a better judge for what you crave than yourself!</p>
</details>
<details>
  <summary>
    <h5>
Why should I book a private chef?</h5>
</summary>
<p>
Enjoy an unforgettable culinary experience without leaving the comfort of your home!
Whether it&#39;s a dinner with friends, a romantic night in, or a family reunion, this
experience is guaranteed to exceed your expectations. Win the title of &quot;the best host&quot;
while getting pampered and enjoying the night. Shopping, cooking, setting the table, and
cleaning up afterwards are all taken care of for you.</p>
</details>
<details>
  <summary>
    <h5>
Can I talk to the chef before completing my reservation?</h5></summary>
<p>Of course you can! You are welcome to have an internal chat with each of your
prospective chefs. Feel free to ask as many questions as you need.</p>
<p>What does the single service include?</p>
<li> Menu design</li>
<li> Transportation</li>
<li> Ingredient cost</li>
<li> Ingredients</li>
<li> Preparations and table service</li>
<li> Cleanup</li>
<p>Any additional service (drinks, service staff, and table ware) will be billed separately.</p>
</details>
<details>
  <summary>
    <h5>
What happens if the chef cancels my booking?</h5></summary>

<p>In the unlikely event that this happens, please don&#39;t worry! We will either provide you with a full
refund or assist you in finding a new chef and a similar menu to your original request, based on
your preferences. For more detailed information, please refer to our cancellation policy.</p>
</details>
<details>
  <summary>
    <h5>
What do the FoodiMann multiple services include?</h5></summary>
<li> Menu design</li>
<li> Sourcing of ingredients</li>
<li> Preparation of the dishes at the diner&#39;s home (it can include preparing a missed
place for menus that require long preparations).</li>
<li> Table service</li>
<li> Cleanup</li>
<p>The cost of ingredients and any additional services (such as drinks, extra wait staff,
tableware, etc.) will be invoiced separately.</p>
</details>
<details>
  <summary>
    <h5>
How customer do reviews work?</h5>
</summary>
<p>Customer reviews are crucial for Take a Chef as they provide objective feedback from our guests
about the chef. Reviews also assist future customers in selecting the most suitable chef for their
event. The day after the experience, the customer will receive a feedback survey to evaluate the
chef. All reviews will be made public to help the chef showcase their talent and improve their
skills.</p>
</details>
<details>
  <summary>
    <h5>
How can I hire a chef through FoodiMann?</h5></summary>
<p>
As soon as you land all chefs search Page, you&#39;ll see a big &quot;Book My Service&quot; button as you
view each chef profile page. Clicking this Button is your journey to customize your Private
Chef experience. We&#39;ll ask for details about your event, like location, date, and food
preferences. After you give this info, your preferred local chefs will offer you menus that
match your needs. Remember, you can tweak things with your chef anytime! Once you
pick your favourite chef, just relax and look forward to the event.
Just so you know, we will share your contact information with the chef once you confirm
a booking, allowing you both to stay in touch. Meanwhile, we will hold the payment to the
chef until the experience is over to protect you from any last-minute cancellations or
misunderstandings.</p>
</details>
</section>
        </>
    )
}
export default EasySteps