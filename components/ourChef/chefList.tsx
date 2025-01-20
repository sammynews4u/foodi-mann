
 import chef13 from './chef13.jpeg'
 import chef14 from './chef14.jpeg'
 import chef15 from './chef15.jpeg'
 import chef16 from './chef16.jpeg'
 import { useState, useEffect } from 'react';
 import { useRouter } from 'next/router';
 import FilterPop from 'components/ourChef/filterPop'
 import WelcomeBlog from "components/welcomeBlog/welcomeBlog";
 import EasySteps from 'components/ourChef/easySteps/easySteps';
 import EqualizerFillIcon from "remixicon-react/EqualizerFillIcon";
 import Filter3FillIcon from "remixicon-react/Filter3FillIcon";
 import { useSettings } from "contexts/settings/settings.context";
 import Image from 'next/image';
  import Chefs from './chefs'
import Link from 'next/link';

 const ChefList = () => {
   const { settings } = useSettings();
   const [groupStates, setGroupStates] = useState({
    "Celebrity Chef": { dropdownOpen: false, sortBy: "" },
    "VIP Chef": { dropdownOpen: false, sortBy: "" },
    "Premium Chef": { dropdownOpen: false, sortBy: "" },
    "Regular Chef": { dropdownOpen: false, sortBy: "" },
  })
   const handleButtonClick = (group) => {
     setGroupStates((prev) => {
       const updatedStates = Object.keys(prev).reduce((acc, key) => {
         acc[key] = { ...prev[key], showPopup: key === group };
         return acc;
       }, {});
       return updatedStates;
     });
   };

   const closePopup = (group) => {
     setGroupStates((prev) => ({
       ...prev,
       [group]: { ...prev[group], showPopup: false },
     }));
   };

   useEffect(() => {
     const handleClickOutside = (e) => {
       if (!e.target.closest('.pop-filter')) {
         setGroupStates((prev) =>
           Object.keys(prev).reduce((acc, key) => {
             acc[key] = { ...prev[key], showPopup: false };
             return acc;
           }, {})
         );
       }
     };

     document.addEventListener('click', handleClickOutside);
     return () => document.removeEventListener('click', handleClickOutside);
   }, []);
   const [filters, setFilters] = useState({
     rating: null,
     specialOffers: null,
     deals: false,
     freeDelivery: false,
   });
   const router = useRouter();
   const chefs = [
     { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef1.png", id: "pearl", name: "Pearl R. Gaffney", role: "Sr. Chef", group: "Celebrity Chef", groupId: 'celebrity-chef', trustYou: "90", bestSale: "300", rating: "4.5", lowSale:"30", lowRating:"40" },
     { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef2.png", id: "kelvin", name: "Kevin Widagdo", role: "Sr. Chef", group: "Celebrity Chef", groupId: 'celebrity-chef', trustYou: "80", bestSale: "400", rating: "4.5", lowSale:"40", lowRating:"50"},
      { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef3.png", id: "fran", name: "Ruby Rushing", role: "Sr. Chef", group: "Celebrity Chef", groupId: 'celebrity-chef',trustYou: "70", bestSale: "500", rating: "4.5", lowSale:"50", lowRating:"80"},
     { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef4.png", id: "henny", name: "Henny Calvin", role: "Sr. Chef", group: "Celebrity Chef", groupId: 'celebrity-chef', trustYou: "60", bestSale: "600", rating: "4.5", lowSale:"60", lowRating:"40" },
      { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef5.png", id: "robert", name: "Robert Lucas", role: "Sr. Chef", group: "VIP Chef", groupId: 'vip-chef', trustYou: "100", bestSale: "600", rating: "4.5", lowSale:"50", lowRating:"120"},
     { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef6.png", id: "mike", name: "Mike Washoski", role: "Sr. Chef", group: "VIP Chef", groupId: 'vip-chef', trustYou: "120", bestSale: "600", rating: "4.5", lowSale:"70", lowRating:"97"},
     { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef7.png", id: "henny", name: "Henny Calvin", role: "Sr. Chef", group: "VIP Chef", groupId: 'vip-chef',trustYou: "110", bestSale: "400", rating: "4.5", lowSale:"50", lowRating:"43",},
      { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef8.png", id: "stephaine", name: "Stephaine James", role: "Sr. Chef", group: "VIP Chef", groupId: 'vip-chef', trustYou: "160", bestSale: "400", rating: "4.5", lowSale:"50", lowRating:"40"},
      {image:chef13, id:"jasmine", role: "Sr. Chef", group: "Premium Chef", groupId: 'premium-chef',name:'Jasmine', trustYou: "90", bestSale: "500", rating: "3.5", lowSale:"55", lowRating:"30",},
      {image:chef14, id:"sara", role: "Sr. Chef", group: "Premium Chef", groupId: 'premium-chef', name:'Sara', trustYou: "90", bestSale: "500", rating: "3.5", lowSale:"55", lowRating:"30",},
      {image:chef15, id:"faith", role: "Sr. Chef", group: "Premium Chef", groupId: 'premium-chef',  name:'Faith',},
      {image:chef16, id:"gloria", role: "Sr. Chef", group: "Premium Chef", groupId: 'premium-chef', name:'Gloria', trustYou: "90", bestSale: "500", rating: "4.5", lowSale:"50", lowRating:"40",},
      { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef9.png", id: "hanna", name: "Hanna Smith", role: "Sr. Chef", group: "Regular Chef", groupId: 'regular-chef',trustYou: "90", bestSale: "10", rating: "4.5", lowSale:"50", lowRating:"40"},
      { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef10.png", id: "robert", name: "Robert Lucas", role: "Sr. Chef", group: "Regular Chef",groupId: 'regular-chef', trustYou: "20", bestSale: "500", rating: "4.5", lowSale:"50", lowRating:"40"},
     { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef11.png", id: "fran", name: "Fran Rushing", role: "Sr. Chef", group: "Regular Chef", groupId: 'regular-chef',trustYou: "30", bestSale: "300", rating: "4.5", lowSale:"40", lowRating:"20"},
     { image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef12.png", id: "henny", name: "Henny Calvin", role: "Sr. Chef", group: "Regular Chef", groupId: 'regular-chef', trustYou: "40", bestSale: "300", rating: "4.5", lowSale:"30", lowRating:"20"},
  ];
  
    const navigateToChefPage = (id) => {
      router.push(`/chef-details/${id}`);
    };
 
  const toggleDropdown = (group) => {
    setGroupStates((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        dropdownOpen: !prev[group]?.dropdownOpen,
      },
    }));
  };

  const handleSort = (group, criteria) => {
    setGroupStates((prev) => ({
      ...prev,
      [group]: { ...prev[group], sortBy: criteria, dropdownOpen: false },
    }));
  };

  const getFilteredChefs = (group) => {
    const { sortBy } = groupStates[group];
    let filteredChefs = chefs.filter((chef) => chef.group === group);
    if (sortBy) {
      filteredChefs = filteredChefs.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        return bValue - aValue;
      });
    }
    return filteredChefs;
  };
 
  
    return (
      <>
 <Chefs/>
        <section className="chef-list">
    {["Celebrity Chef", "VIP Chef", "Premium Chef", "Regular Chef"].map((group) => {
      return(
      <section key={group} className="chefGroup" onClick={() => closePopup(group)}>
        <div className="chef-heading">
          <h2 onClick={() => handleSort(group, '')} style={{ cursor: 'pointer' }}> All  {group}s</h2>
          <div className="sort-filter-container">
            <Link href={`/chef-group/${group.toLowerCase().replace(' ', '-')}`} className="see-all">See all</Link>
            <button  className="btn"   onClick={() => toggleDropdown(group)}>
              <Filter3FillIcon />
              <span className="tex">Sorted by</span>
            </button>
            {groupStates[group]?.dropdownOpen && (
                  <div className="dropdown">
                    <div className="dropdown-item">
                      <input
                        type="radio"
                        name={`sort-${group}`}
                        value="trustYou"
                        checked={groupStates[group]?.sortBy === "trustYou"}
                        onChange={() => handleSort(group, "trustYou")}
                      />
                      <label>Trust You</label>
                    </div>
                    <div className="dropdown-item">
                      <input
                        type="radio"
                        name={`sort-${group}`}
                        value="bestSale"
                        checked={groupStates[group]?.sortBy === "bestSale"}
                        onChange={() => handleSort(group, "bestSale")}
                      />
                      <label>Best Sale</label>
                    </div>
                    <div className="dropdown-item">
                      <input
                        type="radio"
                        name={`sort-${group}`}
                        value="lowSale"
                        checked={groupStates[group]?.sortBy === "lowSale"}
                        onChange={() => handleSort(group, "lowSale")}
                      />
                      <label>Low Sale</label>
                    </div>
                    <div className="dropdown-item">
                      <input
                        type="radio"
                        name={`sort-${group}`}
                        value="lowRating"
                        checked={groupStates[group]?.sortBy === "lowRating"}
                        onChange={() => handleSort(group, "lowRating")}
                      />
                      <label>Low Rating</label>
                    </div>
                  </div>
                )}
           <button className="btn filter-btn" onClick={(e) => {
                    e.stopPropagation(); 
                    handleButtonClick(group);}}>
              <EqualizerFillIcon />
              <span className="tex">Filter by</span>
            </button>
            {groupStates[group]?.showPopup && (
                <>
          <div className="pop-filter" onClick={(e) => e.stopPropagation()}>
                <FilterPop/>
                <div className="filter-bottom">
        <button className="showed" onClick={() => closePopup(group)}>Show</button>
        <button className="clears" onClick={() => closePopup(group)}>Clear</button>
        </div></div>
               </>)}
          </div>
        </div>
        <section className="chefGrid">
        {getFilteredChefs(group).map((chef) => (
            <div className="ourChefimg" key={chef.id}>
              <Image src={chef.image} alt={chef.name} width={100} height={100} onClick={() => navigateToChefPage(chef.id)}/>
              <div className="ourchefContent">
                <h4 onClick={() => navigateToChefPage(chef.id)}>{chef.name}</h4>
                <div className="social">
          <a href={settings?.facebook_url} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
          </a>
          <a href={settings?.twitter_url} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#1d9bf0" rx="60"/><path fill="#fff" d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"/></g></svg>
          </a>
          <a href={settings?.instagram_url} target="_blank" rel="noopener noreferrer">
         <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></radialGradient></defs></g></svg>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0a66c2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/></g></svg>
         <div onClick={() => navigateToChefPage(chef.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0000ff" d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9"/></svg>
          </div>
        </div>
                <span>{chef.role}s</span>
              </div>
            </div>
          ))}
        </section>
      </section>
    )})}
  </section>

      <WelcomeBlog/>
        <EasySteps />
      </>
    );
  };

  export default ChefList;



