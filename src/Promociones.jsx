import "./css/Promociones.css"

const promotionGroups = [
  ['/img/promos/promo_1.jpg', '/img/promos/promo_2.jpg'],
  ['/img/promos/promo_4.jpg', '/img/promos/promo_3.jpg'],
];

const offerGroups = [
  {
    className: 'tres-ofertas',
    images: [
      '/img/promos/promo_5.jpg',
      '/img/promos/promo_6.jpg',
      '/img/promos/promo_7.jpg',
    ]
  },
  {
    className: 'dos-promociones',
    images: [
      '/img/promos/promo_8.jpg',
      '/img/promos/promo_9.jpg',
    ]
  },
];

function Promociones() {
  return (
    <main>
      <div className="orden-promociones">
        {promotionGroups.map((group, groupIndex) => (
          <div className="dos-promociones" key={`promo-group-${groupIndex}`}>
            {group.map((promoSrc, imgIndex) => (
              <div className="container-promo" key={`promo-${groupIndex}-${imgIndex}`}>
                <img src={promoSrc} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <br />
      <h1>ofertas</h1>
      <br />

      <div className="ofertas-final">
        {offerGroups.map((group, groupIndex) => (
          <div className={group.className} key={`offer-group-${groupIndex}`}>
            {group.images.map((offerSrc, imgIndex) => (
              <div className="container-oferta" key={`offer-${groupIndex}-${imgIndex}`}>
                <img
                  className={offerSrc.includes('promo_6') ? 'ofertas' : ''}
                  src={offerSrc}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Promociones