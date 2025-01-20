

import { useState } from 'react';
import Image from 'next/image';
import Gifts from './gifts';
import EqualizerFillIcon from "remixicon-react/EqualizerFillIcon";
import Filter3FillIcon from "remixicon-react/Filter3FillIcon";
const OfferHeader = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const offers = [
    { id: 1, category: 'food', title: 'GURDEEP50', discount: 50 },
    { id: 2, category: 'bank', title: 'EAT750', discount: 30 },
    { id: 3, category: 'food', title: 'EA9T50', discount: 40 },
    { id: 4, category: 'bank', title: 'ETTTAT50', discount: 20 },
    { id: 5, category: 'food', title: 'SAHAN50', discount: 50 },
    { id: 6, category: 'bank', title: 'OSAHANEAT50', discount: 40 },
  ];

  const bankOffers = [
    {
      id: 1,
      title: 'Get flat $0.30 cashback using Amazon Pay',
      description: 'Get flat $0.30 cashback on orders above $0.99 for 10 orders. No code required.',
      image: 'https://askbootstrap.com/preview/osahan-eat/theme-2/img/bank/7.png',
    },
    {
      id: 2,
      title: 'Get flat $0.30 cashback using Osahan Pay',
      description: 'Get flat $0.30 cashback on orders above $0.99 for 10 orders. No code required.',
      image: 'https://askbootstrap.com/preview/osahan-eat/theme-2/img/bank/8.png',
    },
  ];

  const handleFilter = (category) => setFilter(category);
  const handleSort = (criteria) => setSort(criteria);

  const filteredOffers = filter ? offers.filter((offer) => offer.category === filter) : offers;
  const sortedOffers = [...filteredOffers].sort((a, b) => {
    if (sort === 'alphabetical') return a.title.localeCompare(b.title);
    if (sort === 'discount') return b.discount - a.discount;
    return 0;
  });

  return (
    <section className="offers">
      <div className="sort-filter">
    <div>
      <h5  onClick={() => setFilter('')}>All</h5>
      </div>
      <div className="sort-filter-container">
        <button className="btn" onClick={() => handleSort('alphabetical')}>
          <Filter3FillIcon />
          <span className="tex">Sorted by </span>
        </button>
        <button className="btn" onClick={() => handleFilter('bank')}>
          <EqualizerFillIcon />
          <span className="tex">Filter by</span>
        </button>
        {/* <button className="btn" onClick={() => setFilter('')}>
          <span className="tex">Clear Filters</span>
        </button> */}
      </div>
</div>
      <h1>Available Coupons</h1>

     
      <div className="offers-content">
        {sortedOffers.map((offer) => (
          <div key={offer.id} className="offer-card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                <Image
                  src={`https://askbootstrap.com/preview/osahan-eat/theme-2/img/bank/${offer.id}.png`}
                  alt={offer.title}
                  width={30}
                  height={30}
                />
              {offer.title}
              </h5>
              <h6>Get {offer.discount}% OFF on your first FoodiMann eat order</h6>
              <p className="card-text">
                Use code {offer.title} &amp; get {offer.discount}% off on your first FoodiMann order on the Website and
                Mobile site. Maximum discount: $600
              </p>
              <a href="#" className="card-link">
                COPY CODE
              </a>
              <a href="#" className="card-link">
                KNOW MORE
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bank Offers */}
      <div className="col">
        <h1>Banks And Cards Offers</h1>
      </div>
      <div className="row pt-5 offers-bottom">
        {bankOffers.map((offer) => (
          <div key={offer.id} className="col-md-6">
            <div className="card offer-card border-0 shadow-sm">
              <div className="row d-flex align-items-center no-gutters">
                <div className="col-md-4 col-4 p-4">
                  <Image src={offer.image} className="card-img" alt={offer.title} width={200} height={200} />
                </div>
                <div className="col-md-8 col-8">
                  <div className="card-body">
                    <div className="card-title">{offer.title}</div>
                    <p className="card-text">{offer.description}</p>
                    <p className="card-text">
                      <small className="text-info">Other T&amp;Cs may apply</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Gifts />
    </section>
  );
};

export default OfferHeader;
