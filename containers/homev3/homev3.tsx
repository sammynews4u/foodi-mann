import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import {useState} from 'react'
import useLocale from "hooks/useLocale";
import shopService from "services/shop";
import categoryService from "services/category";
import storyService from "services/story";
import bannerService from "services/banner";
import useUserLocation from "hooks/useUserLocation";
import qs from "qs";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import Join from '../homev3/join'
import Taste from '../homev3/taste'
import Image from 'next/image';
import { PrevButton } from "components/carouselArrows/carouselArrows"
import { NextButton } from "components/carouselArrows/carouselArrows";
import Expert from '../../components/welcomeHero/expert'
import Door from './door'
import { useAppSelector } from "hooks/useRedux";
import { selectCurrency } from "redux/slices/currency";
import { useSettings } from "contexts/settings/settings.context";
const CategoryContainer = dynamic(() => import("containers/category/v3"));
const BannerContainer = dynamic(() => import("containers/banner/v3"));
const ParcelCard = dynamic(() => import("components/parcelCard/v3"));
const StoreList = dynamic(() => import("containers/storeList/v3"));
const NewsContainer = dynamic(
  () => import("containers/newsContainer/newsContainer")
);
const FeaturedShopsContainer = dynamic(
  () => import("containers/featuredShopsContainer/v3")
);
const ShopBanner = dynamic(() => import("components/shopBanner/shopBanner"));

const PER_PAGE = 12;

export default function Home3() {
  const { t, locale } = useLocale();
  const { settings } = useSettings();
  const location = useUserLocation();
  const currency = useAppSelector(selectCurrency);
  // const activeParcel = Number(settings?.active_parcel) === 1;

  const { data: shopCategories, isLoading: isCategoriesLoading } = useQuery(
    ["shopCategories", locale],
    () => categoryService.getAllShopCategories({ perPage: 100 })
  );

  const { data: stories, isLoading: isStoriesLoading } = useQuery(
    ["stories", locale],
    () => storyService.getAll()
  );

  const { data: shops, isLoading: isShopLoading } = useQuery(
    ["favoriteBrands", location, locale, currency],
    () =>
      shopService.getAll(
        qs.stringify({
          perPage: PER_PAGE,
          currency_id: currency?.id,
          verify: 1,
        })
      )
  );

  const { data: popularShops, isLoading: popularLoading } = useQuery(
    ["popularShops", location, locale, currency],
    () =>
      shopService.getAll(
        qs.stringify({
          perPage: PER_PAGE,
          address: location,
          open: 1,
          currency_id: currency?.id,
        })
      )
  );

  const { data: recommendedShops, isLoading: recommendedLoading } = useQuery(
    ["recommendedShops", locale, location, currency],
    () =>
      shopService.getRecommended({
        address: location,
        currency_id: currency?.id,
      })
  );

  const { data: ads } = useQuery(["ads", locale], () =>
    bannerService.getAllAds()
  );
  const SwiperSettings = {
    spaceBetween: 30, 
    preloadImages: false,
    className: 'expertButton',
    slidesPerView: 1,
    loop: true,
    speed: 300,
    modules: [Autoplay], 
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 3,
      },
      1140: {
        slidesPerView: 4, 
      },
    },
  };
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (buttonId: string) => {
    setActiveDropdown(activeDropdown === buttonId ? null : buttonId); // Toggle the active dropdown
  };
  return (
    <>
      <CategoryContainer
        categories={shopCategories?.data?.sort((a, b) => a?.input - b?.input)}
        loading={isCategoriesLoading}
      />
      <FeaturedShopsContainer
        title={t("trending")}
        featuredShops={recommendedShops?.data || []}
        loading={recommendedLoading}
        type="recomended"
      />
      <BannerContainer
        stories={stories || []}
        loadingStory={isStoriesLoading}
      />
      {/* {activeParcel && <ParcelCard />} */}
<ParcelCard/>
      <StoreList
        title={t("favorite.brands")}
        shops={shops?.data || []}
        loading={isShopLoading}
        ads={ads?.data || []}
        />
      <FeaturedShopsContainer
        title={t("Popular Business Near You")}
        featuredShops={popularShops?.data || []}
        loading={popularLoading}
        type="popular"
        />
      
<Taste/>
      <Expert/>
      <ShopBanner data={shops?.data || []} />
      <NewsContainer />
        <Door/>
      <section className="manage">
     
      <section className="manage-Business">
        <h3>Lets manage your business Smartly</h3>
        <h3>Complete Multipurpose E-Business Solutions</h3>
        <p>FoodiMann is a One-Stop Shop for all your daily necessities and essentials, you can shop for
food, groceries, pharmacies items, and many more. Order food or send important parcels
from one place to another from the comfort of your home or office.</p>
      <div className="manage-buttons">
      <div className="button-container">
        <button
          className="seller-button"
          onClick={() => toggleDropdown("seller1")}>
          Seller App &#9662;
        </button>
        {activeDropdown === "seller1" && (
          <div className="dropdown">
            <div>
            <a href="#" target="_blank" rel="noopener noreferrer">
           <svg width="25" height="25" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2275_12134)"><path d="M16.6192 0C16.6751 0 16.7309 0 16.7899 0C16.9269 1.69253 16.2809 2.95719 15.4958 3.87301C14.7254 4.78251 13.6704 5.6646 11.9642 5.53076C11.8504 3.86247 12.4975 2.69161 13.2816 1.77789C14.0087 0.92636 15.3419 0.168621 16.6192 0Z" fill="#FFFFFF"></path><path d="M21.7841 17.6183C21.7841 17.6352 21.7841 17.65 21.7841 17.6658C21.3046 19.118 20.6206 20.3626 19.7859 21.5177C19.024 22.5663 18.0903 23.9774 16.423 23.9774C14.9824 23.9774 14.0254 23.0511 12.549 23.0258C10.9871 23.0005 10.1282 23.8004 8.70019 24.0017C8.53683 24.0017 8.37348 24.0017 8.21329 24.0017C7.16468 23.8499 6.31842 23.0195 5.7019 22.2712C3.88396 20.0602 2.47914 17.2042 2.21777 13.5493C2.21777 13.191 2.21777 12.8337 2.21777 12.4754C2.32843 9.85968 3.59941 7.73295 5.28878 6.70225C6.18036 6.15423 7.40602 5.68737 8.7708 5.89603C9.3557 5.98667 9.95325 6.1869 10.477 6.38503C10.9734 6.57579 11.5941 6.91408 12.1822 6.89617C12.5806 6.88457 12.9768 6.67696 13.3784 6.53047C14.5545 6.10576 15.7074 5.61886 17.2271 5.84756C19.0535 6.12367 20.3498 6.93516 21.1507 8.18717C19.6057 9.17044 18.3843 10.6522 18.593 13.1826C18.7784 15.4811 20.1148 16.8258 21.7841 17.6183Z" fill="#FFFFFF"></path></g><defs><clipPath id="clip0_2275_12134"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
              Apple Store
            </a></div>
            <div>
            <a href="#" target="_blank" rel="noopener noreferrer">
         <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9234 8.23178C15.1354 6.67239 10.6605 4.16836 3.7196 0.281998C3.25164 -0.0270497 2.71324 -0.0675497 2.24805 0.0899037L14.1567 11.9985L17.9234 8.23178Z" fill="#32BBFF"></path><path d="M2.24788 0.0908203C2.16069 0.120352 2.07585 0.155977 1.9947 0.199008C1.481 0.476884 1.10352 1.01159 1.10352 1.68785V22.311C1.10352 22.9873 1.48095 23.522 1.9947 23.7998C2.07571 23.8428 2.1605 23.8786 2.2476 23.9083L14.1565 11.9994L2.24788 0.0908203Z" fill="#32BBFF"></path><path d="M14.1569 11.9989L2.24805 23.9078C2.71338 24.0664 3.25178 24.029 3.71988 23.7154C10.451 19.9462 14.8755 17.4718 17.6958 15.8992C17.7743 15.8551 17.8512 15.812 17.9272 15.7693L14.1569 11.9989Z" fill="#32BBFF"></path><path d="M1.10352 11.9989V22.3105C1.10352 22.9868 1.48095 23.5215 1.9947 23.7993C2.07571 23.8423 2.1605 23.8781 2.2476 23.9078L14.1565 11.9989H1.10352Z" fill="#2C9FD9"></path><path d="M3.71984 0.282559C3.16414 -0.0843794 2.50882 -0.0739263 1.99512 0.198699L13.9762 12.1798L17.9236 8.23234C15.1356 6.67295 10.6607 4.16893 3.71984 0.282559Z" fill="#29CC5E"></path><path d="M13.9762 11.8171L1.99512 23.7982C2.50887 24.0708 3.16414 24.0865 3.71984 23.7143C10.451 19.9451 14.8755 17.4707 17.6957 15.8981C17.7743 15.854 17.8512 15.8108 17.9272 15.7681L13.9762 11.8171Z" fill="#D93F21"></path><path d="M22.8956 11.9997C22.8956 11.4283 22.6073 10.8516 22.0358 10.5318C22.0358 10.5318 20.9671 9.93552 17.6913 8.10327L13.7949 11.9997L17.6951 15.8999C20.9349 14.0808 22.0357 13.4675 22.0357 13.4675C22.6073 13.1477 22.8956 12.5711 22.8956 11.9997Z" fill="#FFD500"></path><path d="M22.0358 13.4669C22.6073 13.1471 22.8956 12.5704 22.8956 11.999H13.7949L17.6951 15.8993C20.935 14.0802 22.0358 13.4669 22.0358 13.4669Z" fill="#FFAA00"></path></svg>
              Google Store
            </a></div>
          </div>
        )}
      </div>

      <div className="button-container">
        <button
          className="seller-button"
          onClick={() => toggleDropdown("seller2")}
        >
          DeliveryMan App &#9662;
        </button>
        {activeDropdown === "seller2" && (
          <div className="dropdown">
            <a href="#" target="_blank" rel="noopener noreferrer">
           <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2275_12134)"><path d="M16.6192 0C16.6751 0 16.7309 0 16.7899 0C16.9269 1.69253 16.2809 2.95719 15.4958 3.87301C14.7254 4.78251 13.6704 5.6646 11.9642 5.53076C11.8504 3.86247 12.4975 2.69161 13.2816 1.77789C14.0087 0.92636 15.3419 0.168621 16.6192 0Z" fill="#FFFFFF"></path><path d="M21.7841 17.6183C21.7841 17.6352 21.7841 17.65 21.7841 17.6658C21.3046 19.118 20.6206 20.3626 19.7859 21.5177C19.024 22.5663 18.0903 23.9774 16.423 23.9774C14.9824 23.9774 14.0254 23.0511 12.549 23.0258C10.9871 23.0005 10.1282 23.8004 8.70019 24.0017C8.53683 24.0017 8.37348 24.0017 8.21329 24.0017C7.16468 23.8499 6.31842 23.0195 5.7019 22.2712C3.88396 20.0602 2.47914 17.2042 2.21777 13.5493C2.21777 13.191 2.21777 12.8337 2.21777 12.4754C2.32843 9.85968 3.59941 7.73295 5.28878 6.70225C6.18036 6.15423 7.40602 5.68737 8.7708 5.89603C9.3557 5.98667 9.95325 6.1869 10.477 6.38503C10.9734 6.57579 11.5941 6.91408 12.1822 6.89617C12.5806 6.88457 12.9768 6.67696 13.3784 6.53047C14.5545 6.10576 15.7074 5.61886 17.2271 5.84756C19.0535 6.12367 20.3498 6.93516 21.1507 8.18717C19.6057 9.17044 18.3843 10.6522 18.593 13.1826C18.7784 15.4811 20.1148 16.8258 21.7841 17.6183Z" fill="#FFFFFF"></path></g><defs><clipPath id="clip0_2275_12134"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
              Apple Store
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
         <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9234 8.23178C15.1354 6.67239 10.6605 4.16836 3.7196 0.281998C3.25164 -0.0270497 2.71324 -0.0675497 2.24805 0.0899037L14.1567 11.9985L17.9234 8.23178Z" fill="#32BBFF"></path><path d="M2.24788 0.0908203C2.16069 0.120352 2.07585 0.155977 1.9947 0.199008C1.481 0.476884 1.10352 1.01159 1.10352 1.68785V22.311C1.10352 22.9873 1.48095 23.522 1.9947 23.7998C2.07571 23.8428 2.1605 23.8786 2.2476 23.9083L14.1565 11.9994L2.24788 0.0908203Z" fill="#32BBFF"></path><path d="M14.1569 11.9989L2.24805 23.9078C2.71338 24.0664 3.25178 24.029 3.71988 23.7154C10.451 19.9462 14.8755 17.4718 17.6958 15.8992C17.7743 15.8551 17.8512 15.812 17.9272 15.7693L14.1569 11.9989Z" fill="#32BBFF"></path><path d="M1.10352 11.9989V22.3105C1.10352 22.9868 1.48095 23.5215 1.9947 23.7993C2.07571 23.8423 2.1605 23.8781 2.2476 23.9078L14.1565 11.9989H1.10352Z" fill="#2C9FD9"></path><path d="M3.71984 0.282559C3.16414 -0.0843794 2.50882 -0.0739263 1.99512 0.198699L13.9762 12.1798L17.9236 8.23234C15.1356 6.67295 10.6607 4.16893 3.71984 0.282559Z" fill="#29CC5E"></path><path d="M13.9762 11.8171L1.99512 23.7982C2.50887 24.0708 3.16414 24.0865 3.71984 23.7143C10.451 19.9451 14.8755 17.4707 17.6957 15.8981C17.7743 15.854 17.8512 15.8108 17.9272 15.7681L13.9762 11.8171Z" fill="#D93F21"></path><path d="M22.8956 11.9997C22.8956 11.4283 22.6073 10.8516 22.0358 10.5318C22.0358 10.5318 20.9671 9.93552 17.6913 8.10327L13.7949 11.9997L17.6951 15.8999C20.9349 14.0808 22.0357 13.4675 22.0357 13.4675C22.6073 13.1477 22.8956 12.5711 22.8956 11.9997Z" fill="#FFD500"></path><path d="M22.0358 13.4669C22.6073 13.1471 22.8956 12.5704 22.8956 11.999H13.7949L17.6951 15.8993C20.935 14.0802 22.0358 13.4669 22.0358 13.4669Z" fill="#FFAA00"></path></svg>
              Google Store
            </a>
          </div>
        )}
      </div>
      <div className="button-container">
        <button
          className="seller-button"
          onClick={() => toggleDropdown("seller3")}
        >
          Customer App &#9662;
        </button>
        {activeDropdown === "seller3" && (
          <div className="dropdown">
            <a href="#" target="_blank" rel="noopener noreferrer">
           <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2275_12134)"><path d="M16.6192 0C16.6751 0 16.7309 0 16.7899 0C16.9269 1.69253 16.2809 2.95719 15.4958 3.87301C14.7254 4.78251 13.6704 5.6646 11.9642 5.53076C11.8504 3.86247 12.4975 2.69161 13.2816 1.77789C14.0087 0.92636 15.3419 0.168621 16.6192 0Z" fill="#FFFFFF"></path><path d="M21.7841 17.6183C21.7841 17.6352 21.7841 17.65 21.7841 17.6658C21.3046 19.118 20.6206 20.3626 19.7859 21.5177C19.024 22.5663 18.0903 23.9774 16.423 23.9774C14.9824 23.9774 14.0254 23.0511 12.549 23.0258C10.9871 23.0005 10.1282 23.8004 8.70019 24.0017C8.53683 24.0017 8.37348 24.0017 8.21329 24.0017C7.16468 23.8499 6.31842 23.0195 5.7019 22.2712C3.88396 20.0602 2.47914 17.2042 2.21777 13.5493C2.21777 13.191 2.21777 12.8337 2.21777 12.4754C2.32843 9.85968 3.59941 7.73295 5.28878 6.70225C6.18036 6.15423 7.40602 5.68737 8.7708 5.89603C9.3557 5.98667 9.95325 6.1869 10.477 6.38503C10.9734 6.57579 11.5941 6.91408 12.1822 6.89617C12.5806 6.88457 12.9768 6.67696 13.3784 6.53047C14.5545 6.10576 15.7074 5.61886 17.2271 5.84756C19.0535 6.12367 20.3498 6.93516 21.1507 8.18717C19.6057 9.17044 18.3843 10.6522 18.593 13.1826C18.7784 15.4811 20.1148 16.8258 21.7841 17.6183Z" fill="#FFFFFF"></path></g><defs><clipPath id="clip0_2275_12134"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
              Apple Store
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
         <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9234 8.23178C15.1354 6.67239 10.6605 4.16836 3.7196 0.281998C3.25164 -0.0270497 2.71324 -0.0675497 2.24805 0.0899037L14.1567 11.9985L17.9234 8.23178Z" fill="#32BBFF"></path><path d="M2.24788 0.0908203C2.16069 0.120352 2.07585 0.155977 1.9947 0.199008C1.481 0.476884 1.10352 1.01159 1.10352 1.68785V22.311C1.10352 22.9873 1.48095 23.522 1.9947 23.7998C2.07571 23.8428 2.1605 23.8786 2.2476 23.9083L14.1565 11.9994L2.24788 0.0908203Z" fill="#32BBFF"></path><path d="M14.1569 11.9989L2.24805 23.9078C2.71338 24.0664 3.25178 24.029 3.71988 23.7154C10.451 19.9462 14.8755 17.4718 17.6958 15.8992C17.7743 15.8551 17.8512 15.812 17.9272 15.7693L14.1569 11.9989Z" fill="#32BBFF"></path><path d="M1.10352 11.9989V22.3105C1.10352 22.9868 1.48095 23.5215 1.9947 23.7993C2.07571 23.8423 2.1605 23.8781 2.2476 23.9078L14.1565 11.9989H1.10352Z" fill="#2C9FD9"></path><path d="M3.71984 0.282559C3.16414 -0.0843794 2.50882 -0.0739263 1.99512 0.198699L13.9762 12.1798L17.9236 8.23234C15.1356 6.67295 10.6607 4.16893 3.71984 0.282559Z" fill="#29CC5E"></path><path d="M13.9762 11.8171L1.99512 23.7982C2.50887 24.0708 3.16414 24.0865 3.71984 23.7143C10.451 19.9451 14.8755 17.4707 17.6957 15.8981C17.7743 15.854 17.8512 15.8108 17.9272 15.7681L13.9762 11.8171Z" fill="#D93F21"></path><path d="M22.8956 11.9997C22.8956 11.4283 22.6073 10.8516 22.0358 10.5318C22.0358 10.5318 20.9671 9.93552 17.6913 8.10327L13.7949 11.9997L17.6951 15.8999C20.9349 14.0808 22.0357 13.4675 22.0357 13.4675C22.6073 13.1477 22.8956 12.5711 22.8956 11.9997Z" fill="#FFD500"></path><path d="M22.0358 13.4669C22.6073 13.1471 22.8956 12.5704 22.8956 11.999H13.7949L17.6951 15.8993C20.935 14.0802 22.0358 13.4669 22.0358 13.4669Z" fill="#FFAA00"></path></svg>
              Google Store
            </a>
          </div>
        )}
      </div> </div>
      <p></p>
      <div className="manager">
      <div className="button-container">
        <button
          className="seller-button"
          onClick={() => toggleDropdown("seller4")}>
          Kiosk App &#9662;
        </button>
        {activeDropdown === "seller4" && (
          <div className="dropdown">
            <a href="#" target="_blank" rel="noopener noreferrer">
           <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2275_12134)"><path d="M16.6192 0C16.6751 0 16.7309 0 16.7899 0C16.9269 1.69253 16.2809 2.95719 15.4958 3.87301C14.7254 4.78251 13.6704 5.6646 11.9642 5.53076C11.8504 3.86247 12.4975 2.69161 13.2816 1.77789C14.0087 0.92636 15.3419 0.168621 16.6192 0Z" fill="#FFFFFF"></path><path d="M21.7841 17.6183C21.7841 17.6352 21.7841 17.65 21.7841 17.6658C21.3046 19.118 20.6206 20.3626 19.7859 21.5177C19.024 22.5663 18.0903 23.9774 16.423 23.9774C14.9824 23.9774 14.0254 23.0511 12.549 23.0258C10.9871 23.0005 10.1282 23.8004 8.70019 24.0017C8.53683 24.0017 8.37348 24.0017 8.21329 24.0017C7.16468 23.8499 6.31842 23.0195 5.7019 22.2712C3.88396 20.0602 2.47914 17.2042 2.21777 13.5493C2.21777 13.191 2.21777 12.8337 2.21777 12.4754C2.32843 9.85968 3.59941 7.73295 5.28878 6.70225C6.18036 6.15423 7.40602 5.68737 8.7708 5.89603C9.3557 5.98667 9.95325 6.1869 10.477 6.38503C10.9734 6.57579 11.5941 6.91408 12.1822 6.89617C12.5806 6.88457 12.9768 6.67696 13.3784 6.53047C14.5545 6.10576 15.7074 5.61886 17.2271 5.84756C19.0535 6.12367 20.3498 6.93516 21.1507 8.18717C19.6057 9.17044 18.3843 10.6522 18.593 13.1826C18.7784 15.4811 20.1148 16.8258 21.7841 17.6183Z" fill="#FFFFFF"></path></g><defs><clipPath id="clip0_2275_12134"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
              Apple Store
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
         <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9234 8.23178C15.1354 6.67239 10.6605 4.16836 3.7196 0.281998C3.25164 -0.0270497 2.71324 -0.0675497 2.24805 0.0899037L14.1567 11.9985L17.9234 8.23178Z" fill="#32BBFF"></path><path d="M2.24788 0.0908203C2.16069 0.120352 2.07585 0.155977 1.9947 0.199008C1.481 0.476884 1.10352 1.01159 1.10352 1.68785V22.311C1.10352 22.9873 1.48095 23.522 1.9947 23.7998C2.07571 23.8428 2.1605 23.8786 2.2476 23.9083L14.1565 11.9994L2.24788 0.0908203Z" fill="#32BBFF"></path><path d="M14.1569 11.9989L2.24805 23.9078C2.71338 24.0664 3.25178 24.029 3.71988 23.7154C10.451 19.9462 14.8755 17.4718 17.6958 15.8992C17.7743 15.8551 17.8512 15.812 17.9272 15.7693L14.1569 11.9989Z" fill="#32BBFF"></path><path d="M1.10352 11.9989V22.3105C1.10352 22.9868 1.48095 23.5215 1.9947 23.7993C2.07571 23.8423 2.1605 23.8781 2.2476 23.9078L14.1565 11.9989H1.10352Z" fill="#2C9FD9"></path><path d="M3.71984 0.282559C3.16414 -0.0843794 2.50882 -0.0739263 1.99512 0.198699L13.9762 12.1798L17.9236 8.23234C15.1356 6.67295 10.6607 4.16893 3.71984 0.282559Z" fill="#29CC5E"></path><path d="M13.9762 11.8171L1.99512 23.7982C2.50887 24.0708 3.16414 24.0865 3.71984 23.7143C10.451 19.9451 14.8755 17.4707 17.6957 15.8981C17.7743 15.854 17.8512 15.8108 17.9272 15.7681L13.9762 11.8171Z" fill="#D93F21"></path><path d="M22.8956 11.9997C22.8956 11.4283 22.6073 10.8516 22.0358 10.5318C22.0358 10.5318 20.9671 9.93552 17.6913 8.10327L13.7949 11.9997L17.6951 15.8999C20.9349 14.0808 22.0357 13.4675 22.0357 13.4675C22.6073 13.1477 22.8956 12.5711 22.8956 11.9997Z" fill="#FFD500"></path><path d="M22.0358 13.4669C22.6073 13.1471 22.8956 12.5704 22.8956 11.999H13.7949L17.6951 15.8993C20.935 14.0802 22.0358 13.4669 22.0358 13.4669Z" fill="#FFAA00"></path></svg>
              Google Store
            </a>
          </div>
        )}
      </div>
      <div className="button-container">
        <button
          className="seller-button"
          onClick={() => toggleDropdown("seller5")}>
          Pos App &#9662;
        </button>
        {activeDropdown === "seller5" && (
          <div className="dropdown">
            <a href="#" target="_blank" rel="noopener noreferrer">
           <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2275_12134)"><path d="M16.6192 0C16.6751 0 16.7309 0 16.7899 0C16.9269 1.69253 16.2809 2.95719 15.4958 3.87301C14.7254 4.78251 13.6704 5.6646 11.9642 5.53076C11.8504 3.86247 12.4975 2.69161 13.2816 1.77789C14.0087 0.92636 15.3419 0.168621 16.6192 0Z" fill="#FFFFFF"></path><path d="M21.7841 17.6183C21.7841 17.6352 21.7841 17.65 21.7841 17.6658C21.3046 19.118 20.6206 20.3626 19.7859 21.5177C19.024 22.5663 18.0903 23.9774 16.423 23.9774C14.9824 23.9774 14.0254 23.0511 12.549 23.0258C10.9871 23.0005 10.1282 23.8004 8.70019 24.0017C8.53683 24.0017 8.37348 24.0017 8.21329 24.0017C7.16468 23.8499 6.31842 23.0195 5.7019 22.2712C3.88396 20.0602 2.47914 17.2042 2.21777 13.5493C2.21777 13.191 2.21777 12.8337 2.21777 12.4754C2.32843 9.85968 3.59941 7.73295 5.28878 6.70225C6.18036 6.15423 7.40602 5.68737 8.7708 5.89603C9.3557 5.98667 9.95325 6.1869 10.477 6.38503C10.9734 6.57579 11.5941 6.91408 12.1822 6.89617C12.5806 6.88457 12.9768 6.67696 13.3784 6.53047C14.5545 6.10576 15.7074 5.61886 17.2271 5.84756C19.0535 6.12367 20.3498 6.93516 21.1507 8.18717C19.6057 9.17044 18.3843 10.6522 18.593 13.1826C18.7784 15.4811 20.1148 16.8258 21.7841 17.6183Z" fill="#FFFFFF"></path></g><defs><clipPath id="clip0_2275_12134"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
              Apple Store
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
         <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9234 8.23178C15.1354 6.67239 10.6605 4.16836 3.7196 0.281998C3.25164 -0.0270497 2.71324 -0.0675497 2.24805 0.0899037L14.1567 11.9985L17.9234 8.23178Z" fill="#32BBFF"></path><path d="M2.24788 0.0908203C2.16069 0.120352 2.07585 0.155977 1.9947 0.199008C1.481 0.476884 1.10352 1.01159 1.10352 1.68785V22.311C1.10352 22.9873 1.48095 23.522 1.9947 23.7998C2.07571 23.8428 2.1605 23.8786 2.2476 23.9083L14.1565 11.9994L2.24788 0.0908203Z" fill="#32BBFF"></path><path d="M14.1569 11.9989L2.24805 23.9078C2.71338 24.0664 3.25178 24.029 3.71988 23.7154C10.451 19.9462 14.8755 17.4718 17.6958 15.8992C17.7743 15.8551 17.8512 15.812 17.9272 15.7693L14.1569 11.9989Z" fill="#32BBFF"></path><path d="M1.10352 11.9989V22.3105C1.10352 22.9868 1.48095 23.5215 1.9947 23.7993C2.07571 23.8423 2.1605 23.8781 2.2476 23.9078L14.1565 11.9989H1.10352Z" fill="#2C9FD9"></path><path d="M3.71984 0.282559C3.16414 -0.0843794 2.50882 -0.0739263 1.99512 0.198699L13.9762 12.1798L17.9236 8.23234C15.1356 6.67295 10.6607 4.16893 3.71984 0.282559Z" fill="#29CC5E"></path><path d="M13.9762 11.8171L1.99512 23.7982C2.50887 24.0708 3.16414 24.0865 3.71984 23.7143C10.451 19.9451 14.8755 17.4707 17.6957 15.8981C17.7743 15.854 17.8512 15.8108 17.9272 15.7681L13.9762 11.8171Z" fill="#D93F21"></path><path d="M22.8956 11.9997C22.8956 11.4283 22.6073 10.8516 22.0358 10.5318C22.0358 10.5318 20.9671 9.93552 17.6913 8.10327L13.7949 11.9997L17.6951 15.8999C20.9349 14.0808 22.0357 13.4675 22.0357 13.4675C22.6073 13.1477 22.8956 12.5711 22.8956 11.9997Z" fill="#FFD500"></path><path d="M22.0358 13.4669C22.6073 13.1471 22.8956 12.5704 22.8956 11.999H13.7949L17.6951 15.8993C20.935 14.0802 22.0358 13.4669 22.0358 13.4669Z" fill="#FFAA00"></path></svg>
              Google Store
            </a>
          </div>
        )}
      </div>
      <div className="button-container">
        <button
          className="seller-button"
          onClick={() => toggleDropdown("seller6")}>
          Waiter App &#9662;
        </button>
        {activeDropdown === "seller6" && (
          <div className="dropdown">
            <a href="#" target="_blank" rel="noopener noreferrer">
           <svg width="25" height="25" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2275_12134)"><path d="M16.6192 0C16.6751 0 16.7309 0 16.7899 0C16.9269 1.69253 16.2809 2.95719 15.4958 3.87301C14.7254 4.78251 13.6704 5.6646 11.9642 5.53076C11.8504 3.86247 12.4975 2.69161 13.2816 1.77789C14.0087 0.92636 15.3419 0.168621 16.6192 0Z" fill="#FFFFFF"></path><path d="M21.7841 17.6183C21.7841 17.6352 21.7841 17.65 21.7841 17.6658C21.3046 19.118 20.6206 20.3626 19.7859 21.5177C19.024 22.5663 18.0903 23.9774 16.423 23.9774C14.9824 23.9774 14.0254 23.0511 12.549 23.0258C10.9871 23.0005 10.1282 23.8004 8.70019 24.0017C8.53683 24.0017 8.37348 24.0017 8.21329 24.0017C7.16468 23.8499 6.31842 23.0195 5.7019 22.2712C3.88396 20.0602 2.47914 17.2042 2.21777 13.5493C2.21777 13.191 2.21777 12.8337 2.21777 12.4754C2.32843 9.85968 3.59941 7.73295 5.28878 6.70225C6.18036 6.15423 7.40602 5.68737 8.7708 5.89603C9.3557 5.98667 9.95325 6.1869 10.477 6.38503C10.9734 6.57579 11.5941 6.91408 12.1822 6.89617C12.5806 6.88457 12.9768 6.67696 13.3784 6.53047C14.5545 6.10576 15.7074 5.61886 17.2271 5.84756C19.0535 6.12367 20.3498 6.93516 21.1507 8.18717C19.6057 9.17044 18.3843 10.6522 18.593 13.1826C18.7784 15.4811 20.1148 16.8258 21.7841 17.6183Z" fill="#FFFFFF"></path></g><defs><clipPath id="clip0_2275_12134"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
              Apple Store
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
         <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9234 8.23178C15.1354 6.67239 10.6605 4.16836 3.7196 0.281998C3.25164 -0.0270497 2.71324 -0.0675497 2.24805 0.0899037L14.1567 11.9985L17.9234 8.23178Z" fill="#32BBFF"></path><path d="M2.24788 0.0908203C2.16069 0.120352 2.07585 0.155977 1.9947 0.199008C1.481 0.476884 1.10352 1.01159 1.10352 1.68785V22.311C1.10352 22.9873 1.48095 23.522 1.9947 23.7998C2.07571 23.8428 2.1605 23.8786 2.2476 23.9083L14.1565 11.9994L2.24788 0.0908203Z" fill="#32BBFF"></path><path d="M14.1569 11.9989L2.24805 23.9078C2.71338 24.0664 3.25178 24.029 3.71988 23.7154C10.451 19.9462 14.8755 17.4718 17.6958 15.8992C17.7743 15.8551 17.8512 15.812 17.9272 15.7693L14.1569 11.9989Z" fill="#32BBFF"></path><path d="M1.10352 11.9989V22.3105C1.10352 22.9868 1.48095 23.5215 1.9947 23.7993C2.07571 23.8423 2.1605 23.8781 2.2476 23.9078L14.1565 11.9989H1.10352Z" fill="#2C9FD9"></path><path d="M3.71984 0.282559C3.16414 -0.0843794 2.50882 -0.0739263 1.99512 0.198699L13.9762 12.1798L17.9236 8.23234C15.1356 6.67295 10.6607 4.16893 3.71984 0.282559Z" fill="#29CC5E"></path><path d="M13.9762 11.8171L1.99512 23.7982C2.50887 24.0708 3.16414 24.0865 3.71984 23.7143C10.451 19.9451 14.8755 17.4707 17.6957 15.8981C17.7743 15.854 17.8512 15.8108 17.9272 15.7681L13.9762 11.8171Z" fill="#D93F21"></path><path d="M22.8956 11.9997C22.8956 11.4283 22.6073 10.8516 22.0358 10.5318C22.0358 10.5318 20.9671 9.93552 17.6913 8.10327L13.7949 11.9997L17.6951 15.8999C20.9349 14.0808 22.0357 13.4675 22.0357 13.4675C22.6073 13.1477 22.8956 12.5711 22.8956 11.9997Z" fill="#FFD500"></path><path d="M22.0358 13.4669C22.6073 13.1471 22.8956 12.5704 22.8956 11.999H13.7949L17.6951 15.8993C20.935 14.0802 22.0358 13.4669 22.0358 13.4669Z" fill="#FFAA00"></path></svg>
              Google Store
            </a>
          </div>
        )}
      </div></div>
      </section>
        <div>
          <Image src='https://6ammart-admin.6amtech.com/storage/app/public/business_image/2024-11-19-673c98d84c119.png' alt=""
            width={360} height={380} />
        </div>

      </section>
      <Join />
    </>
  );
}
