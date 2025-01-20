
 import { useState } from 'react';


const FilterPop = () => {
  const [switchStates, setSwitchStates] = useState({
    deals: false,
    freeDelivery: false,
    onlyOpened: false,
  });

  const handleSwitch = (key) => {
    setSwitchStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="filter-pop">
      <h6>Rating</h6>
      <hgroup>
        <button className={switchStates.rating === '3.5-4.5' ? 'active' : ''}> <svg className="remixicon-icon " width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15L10 12z"></path></svg>3.5-4.5</button>
        <button NameName={switchStates.rating === '4.5-5.0' ? 'active' : ''}> <svg className="remixicon-icon " width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15L10 12z"></path></svg>4.5-5.0</button>
        <button className={switchStates.rating === '5.0' ? 'active' : ''}><svg className="remixicon-icon " width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15L10 12z"></path></svg>5.0</button>
      </hgroup>

      <h6>Special Offers</h6>
      <hgroup>
        <button className={switchStates.specialOffers === 'Offer1' ? 'active' : ''}><svg className="remixicon-icon " width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z"></path></svg>Clothes</button>
        <button className={switchStates.specialOffers === 'Offer1' ? 'active' : ''}><svg className="remixicon-icon " width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z"></path></svg>Fruits</button>
        <button className={switchStates.specialOffers === 'Offer1' ? 'active' : ''}><svg className="remixicon-icon " width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z"></path></svg>Others</button>
      </hgroup>

      {/* Individual Toggles */}
      <div className="status-toggle switching">
        <span className="switch-label">Deals</span>
        <div>
          <input type="checkbox" id="deals" className="check" checked={switchStates.deals} readOnly />
         
          <label htmlFor="deals" onClick={() => handleSwitch('deals')} className="checktoggle dealing"></label>
       
        </div>
        <span className="switch-label">{switchStates.deals ? 'Off' : 'On'}</span>
      </div>

      <div className="status-toggle switching">
        <span className="switch-label">Free Delivery</span>
        <div>
          <input
            type="checkbox"
            id="freeDelivery"
            className="check"
            checked={switchStates.freeDelivery}
            readOnly
          />
          <label
            htmlFor="freeDelivery"
            onClick={() => handleSwitch('freeDelivery')}
            className="checktoggle "
          ></label>
        </div>
        <span className="switch-label">{switchStates.freeDelivery ? 'Off' : 'On'}</span>
      </div>

      <div className="status-toggle switching">
        <span className="switch-label">Only Opened</span>
        <div>
          <input type="checkbox" id="onlyOpened" className="check" checked={switchStates.onlyOpened} readOnly />
       
          <label
            htmlFor="onlyOpened"
            onClick={() => handleSwitch('onlyOpened')}
            className="checktoggle"
          ></label>
        </div>
        <span className="switch-label">{switchStates.onlyOpened ? 'Off' : 'On'}</span>
      </div>
      
    </section>
  );
};

export default FilterPop;
