import React, { useEffect } from 'react';

declare const AN_Item_items: {
  ready: () => void
};

const Listings = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://www.auctionnudge.com/feed/item/js/theme/responsive/page/init/img_size/120/cats_output/dropdown/search_box/1/blank/1/show_logo/1/lang/english/SellerID/redfifty/siteid/3/MaxEntries/6";
    script.async = true;
    script.defer = true;
    script.referrerPolicy = 'no-referrer';
    script.addEventListener('load', () => {
      AN_Item_items.ready();
    })

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return <div id="auction-nudge-items" className="auction-nudge"></div>
}

export { Listings };

