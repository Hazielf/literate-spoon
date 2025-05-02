import { useState } from 'react';
import './css/Promociones.css';

const PromoCard = ({ imgSrc, variant }) => {
  return (
    <div className={`promo-card ${variant}`}>
      <img 
        src={imgSrc}
        className="promo-image"
        alt="Promotional content"
      />
    </div>
  );
};

const PromotionalSection = ({ title, children }) => {
  return (
    <section className="promotional-section">
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
};

const Promociones = () => {
  const [promos] = useState({
    destacadas: [
      { id: 'promo1', imgSrc: '/img/promos/promo_1.jpg' },
      { id: 'promo2', imgSrc: '/img/promos/promo_2.jpg' },
      { id: 'promo3', imgSrc: '/img/promos/promo_3.jpg' },
      { id: 'promo4', imgSrc: '/img/promos/promo_4.jpg' }
    ],
    ofertas: [
      { id: 'oferta1', imgSrc: '/img/promos/promo_5.jpg' },
      { id: 'oferta2', imgSrc: '/img/promos/promo_6.jpg' },
      { id: 'oferta3', imgSrc: '/img/promos/promo_7.jpg' }
    ],
    especiales: [
      { id: 'especial1', imgSrc: '/img/promos/promo_8.jpg' },
      { id: 'especial2', imgSrc: '/img/promos/promo_9.jpg' }
    ]
  });

  return (
    <main className="promociones-contenedor">
      <PromotionalSection>
        <div className="grid-destacadas">
          {promos.destacadas.map(promo => {
            return (
              <PromoCard
                key={promo.id}
                imgSrc={promo.imgSrc}
                variant="destacada"
              />
            );
          })}
        </div>
      </PromotionalSection>

      <PromotionalSection title="Ofertas">
        <div className="grid-ofertas">
          {promos.ofertas.map(oferta => {
            return (
              <PromoCard
                key={oferta.id}
                imgSrc={oferta.imgSrc}
                variant="oferta"
              />
            );
          })}
        </div>
      </PromotionalSection>

      <PromotionalSection>
        <div className="grid-especiales">
          {promos.especiales.map(especial => {
            return (
              <PromoCard
                key={especial.id}
                imgSrc={especial.imgSrc}
                variant="especial"
              />
            );
          })}
        </div>
      </PromotionalSection>
    </main>
  );
};

export default Promociones;