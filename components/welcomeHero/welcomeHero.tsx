import React, { useRef, useState } from "react";
import cls from "./welcomeHero.module.scss";
import useLocale from "hooks/useLocale";
import Search2LineIcon from "remixicon-react/Search2LineIcon";
import PrimaryButton from "components/button/primaryButton";
import { useSettings } from "contexts/settings/settings.context";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import MapPinRangeLineIcon from "remixicon-react/MapPinRangeLineIcon";
import { DEFAULT_LOCATION } from "constants/config";
import { getAddressFromLocation } from "utils/getAddressFromLocation";
import { ILandingPageData, IStatistics } from "interfaces/page.interface";
import roundToHundreds from "utils/roundToHundreds";
import getShorterNumber from "utils/getShorterNumber";
import Image from 'next/image';
import Manage from '../welcomeHero/manage';
import Expert from "../welcomeHero/expert"
import Testimonial from "./testimonial";
import Together from './together'
import WhyChooseUs from "components/whyChooseUs/whyChooseUs";
import Trusted from "./trusted";
import man from './man.jpeg'

const Map = dynamic(() => import("components/map/map"), { ssr: false });

type Props = {
  data?: ILandingPageData;
  stats?: IStatistics;
};

export default function WelcomeHero({ data, stats }: Props) {
  const { t, locale } = useLocale();
  const inputRef = useRef<any>();
  const { push } = useRouter();
  const { updateAddress, updateLocation } = useSettings();
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const onSubmit = (event?: any) => {
    event.preventDefault();
    if (!location.lat && !location.lng) {
      return;
    }
    updateAddress(inputRef.current?.value);
    updateLocation(`${location.lat},${location.lng}`);
    push("/");
  };

  const chooseDefaultAddress = async () => {
    const latlng = DEFAULT_LOCATION?.split(",") || [];
    setLocation({ lat: Number(latlng[0] || 0), lng: Number(latlng[1] || 0) });
    const address = await getAddressFromLocation(DEFAULT_LOCATION);
    inputRef.current.value = address;
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className={cls.hero}>
     
<div
  className={cls.container}
  style={{ backgroundImage: `url(${'https://foodimann.com/_next/image?url=https%3A%2F%2Fapi.foodimann.com%2Fstorage%2Fimages%2Fblogs%2F101-1735231830.webp&w=1920&q=75'})` }}
>
        <video
        ref={videoRef}
        className={cls.backgroundVideo}
        loop
        muted
        style={{
           opacity: isPlaying ? 1 : 0, 
          maxWidth:"1800px",
          width:"150%",

        }}
      >
        <source src="https://webstrot.com/html/lunchbox/lunchbox/video/video.mp4" type="video/mp4" />
      </video>
      <button
  onClick={handlePlayPause}
  className={cls.playPauseButton}
  style={{
    position: "absolute",
    top: "65%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    padding: "10px 10px",
    background: "rgba(0, 0, 0, 0.7)",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  {isPlaying ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="white"
      viewBox="0 0 24 24"
    >
      <rect x="6" y="5" width="4" height="14" rx="1"></rect>
      <rect x="14" y="5" width="4" height="14" rx="1"></rect>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="white"
      viewBox="0 0 24 24"
    >
      <path d="M5 3v18l15-9L5 3z"></path>
    </svg>
  )}
</button>
        <div className="welcome-container">
          <div className={cls.wrapper}>
            <div className={cls.block}>
              <h1 className={cls.title}>Get Your Favorite Foods Delivered To You At Your Convenience!</h1>

              <div className={cls.searchBar}>
                <form className={cls.search} onSubmit={onSubmit}>
                  <label htmlFor="search">
                    <Search2LineIcon />
                  </label>
                  <input
                    type="text"
                    id="search"
                    name="search"
                    ref={inputRef}
                    placeholder={t("search")}
                    autoComplete="off"
                  />
                </form>
                <div className={cls.btnWrapper}>
                  <PrimaryButton onClick={onSubmit}>{t("ok")}</PrimaryButton>
                </div>
              </div>
              <div className={cls.actions}>
                <button
                  type="button"
                  className={cls.textButton}
                  onClick={chooseDefaultAddress}
                >
                  <MapPinRangeLineIcon />
                  <span className={cls.text}>
                    {t("choose.recomended.address")}
                  </span>
                </button>
              </div>
              <div className={cls.stats}>
                <div className={cls.item}>
                  <span className={cls.number}>
                  1500+    
                  </span>
                  <span className={cls.text}>{t("people.trust.us")}</span>
                </div>
                <div className={cls.item}>
                  <span className={cls.number}>
                    700+
                  </span>
                  <span className={cls.text}>
                    {t("delivery.was.successfull")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={cls.videoPart} style={{ maxWidth: "1900px", margin: "3rem auto" , overflow:"hidden",padding:"0 0 0 3rem"}}>
        <video loop muted autoPlay  className="hoverVideo" style={{ width: "100%", height: "130%", maxWidth:"100%", transform:"scale(1.8)" }}>
        <source src="https://webstrot.com/html/lunchbox/lunchbox/video/video.mp4"></source></video>
        </div> */}
      </div>
      <Map location={location} setLocation={setLocation} inputRef={inputRef} />
      <div className={cls.placeSection}>
     <h5> ABOUT THE FOODIMANN MARKETPLACE</h5>
<h1>Perfect Place For<br></br> An Exceptional Experience</h1>
<div className={cls.placeIntro}>
<div className={cls.place}>

<Image  src="https://winsfolio.net/html/foodio/assets/img/about-1.jpg" alt="" width={300} height={500}/>
<Image src="https://winsfolio.net/html/foodio/assets/img/recent-news-4.jpg"alt="" width={300} height={500}/>
</div>
<div className={cls.placeContent}>
<div>
<h5>Your citys top restaurants & Hotels</h5>
<p className="tests">With a great variety of restaurants you can order your favourite food or explore new restaurants nearby!</p>
  </div>
  <div>
<h5>Fast delivery & Pickup Systems</h5>
<p className="tests">
Like a flash! Order or send anything in your city and receive it in minutes
</p>
  </div>
  <div>
<h5>Groceries delivery & more</h5>
<p className="tests">Find anything you need! From supermarkets to shops, pharmacies to florists — if its in your city order it and receive it.
</p>
  </div></div>
  </div></div>
  <div className={cls.dishes}>
<h2>New Ground with Dishes to be Enjoyed</h2>
<div className={cls.dishesIntro}>
<div className={cls.dishesContent}>
  <Image src='https://winsfolio.net/html/foodio/assets/img/restaurant.jpg'alt="" width={80} height={400}/>
  <div className={cls.dish}>
  <span>Restaurant</span>
  </div>
</div>
<div className={cls.dishesContent}>
  <Image
   src='https://winsfolio.net/html/foodio/assets/img/restaurant-2.jpg'alt="" width={100} height={400}/>
 
  <div className={cls.dish}>
  <span>Cocktail</span>
  </div>
</div>
<div className={cls.dishesContent}>
  <Image src='https://winsfolio.net/html/foodio/assets/img/restaurant-3.jpg'alt="" width={300} height={400}/>
  <div className={cls.dish}>
  <span>Private Dining</span>
  </div>
</div>
  </div></div>
  <WhyChooseUs/>
  <Together/>
  <Testimonial/>
  <Trusted/>
  <Expert/>
  <Manage/>
    </section>
  );
}
