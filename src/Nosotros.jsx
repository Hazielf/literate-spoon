import "./css/Nosotros.css"

const Nosotros = () => {    
  return (
    <main className="about-page">
      <div className="about-container" id="somos">
        <div className="about-intro">
          <h1 className="about-title">Nosotros</h1>
          <div className="about-logo">
            <img
              className="about-logo-image"
              src="/img/marcas/qsomos.PNG"
              alt="Logo Quienes Somos"
            />
          </div>
          <div className="about-description">
            <h2 className="about-subtitle">Quienes somos</h2>
            <p className="about-text">
              Somos una empresa peruana, especializada en la importación, 
              comercialización y distribución de equipos informáticos y tecnológicos, 
              para cubrir necesidades el sector doméstico y desarrollo empresarial 
              Computadoras, Portátiles, Impresoras, Servidores y Redes- Wifi, Cables, 
              Equipos de Video Vigilancia, Licencia de Software, Celulares, Puntos de 
              Ventas, Suministros, Adaptadores de Audio, Video y otros afines a la Tecnología.
            </p>
          </div>
        </div>

        <div className="about-values">
          <div className="values-content">
            <img
              src="/img/marcas/equipo.png"
              alt="Nuestro Equipo"
              className="values-image"
            />
            <h2 className="values-title">Misión, Visión y Nuestro Equipo</h2>
            <div className="values-sections">
              <div className="values-section">
                <strong className="section-title">Nuestra misión: </strong> 
                <p className="section-text">
                  Consiste en ser la mejor empresa en mercado en Computo y Tecnología 
                  a Nivel Nacional; Trayendo innovación tecnológica a nuestro país, 
                  desarrollando estrategias y fortaleciendo nuestros vínculos comerciales 
                  con los proveedores y nuestros clientes; respetando nuestros valores 
                  institucionales, Honestidad, Eficiencia, Compromiso y Garantía Total.
                </p>
              </div>

              <div className="values-section">
                <strong className="section-title">Visión: </strong>
                <p className="section-text">
                  Ser una empresa líder dedicada a la comercialización y distribución 
                  de suministros y equipos de tecnología e informática, brindando soporte 
                  técnico y soluciones informáticas, ofreciendo la más amplia variedad 
                  de producto y precios más competitivos del mercado, respetando nuestros 
                  valores institucionales.
                </p>
              </div>

              <div className="values-section">
                <strong className="section-title">Nuestro Equipo: </strong>
                <p className="section-text">
                  Todo lo que somos, es posible gracias al esfuerzo y la calidad humana 
                  de todos nuestros colaboradores: técnicos, ingenieros, empleados y toda 
                  la fuerza de ventas comprometida con la distribución de nuestros productos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;