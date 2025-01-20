import qr from './qr.png'
import Image from 'next/image';
import ph from './ph.webp';
import { useSettings } from "contexts/settings/settings.context";

const Pocket = ()=>{
    const { settings } = useSettings();
    return(
        <section className="pocket-intro">
        <section className="pocket-section">
<h3>Download the food and groceries you love.</h3>
            <div className="pocket">
<div className="code">
    <div>
    <Image src={qr}alt=""width={100}height={100}/>

    </div>
    <div>
<p>Its all at your fingertips – the restaurants and shops you love.
 Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
 <div className='appSection'>
          <a href={settings?.customer_app_ios} target="_blank" rel="noopener noreferrer">
            <img src="/images/app-store.webp" alt="App store" width="15%"/>
          </a>
          <a href={settings?.customer_app_android} target="_blank" rel="noopener noreferrer">
            <img src="/images/google-play.webp" alt="Google play" width="15%" />
          </a>
        </div>
</div>
<div>
    <Image src={ph}alt=''width={300}height={200}/>
    </div>
</div>  
   </div>   
        </section></section>
    )
}
export default Pocket