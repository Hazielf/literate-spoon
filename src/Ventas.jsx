import "./css/Ventas.css"

function Ventas(){
    return(
        <main>
            <div className="content">
                <div className="Ventas">
                    <h2>
                        ¡Bienvenido a CiberStore!
                    </h2>
                    <p>
                        Con más de 25 años de experiencia en tecnología,
                        ofrecemos soluciones de calidad respaldadas por una
                        sólida garantía. <br />
                        Obtenga todo lo que necesita para que su organización
                        prospere; le ofrecemos una amplia selección de
                        productos, servicios y precios de nivel empresarial, así
                        como muchas conveniencias, incluyendo opciones de pago
                        flexibles. <br />
                        Atendemos a una variedad de clientes empresariales en
                        diversos sectores. <br />
                        Descubra nuestras marcas líderes, atención personalizada
                        y beneficios exclusivos para clientes comerciales.
                        <br />
                        Confíe en nosotros para sus necesidades tecnológicas y
                        permítanos ayudarle a alcanzar el éxito
                    </p>
                </div>

                <div className="mapa">
                    <h2>Ubicación</h2>
                    <div className="google-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7805.549966947461!2d-77.0636769206543!3d-11.990065999999974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce53c69e3575%3A0x586e76dff7534a44!2sCIBERTEC!5e0!3m2!1ses-419!2spe!4v1746032058763!5m2!1ses-419!2spe" // Usando la URL que proporcionaste
                            width="600"
                            height="450"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="audio">
                <h2>Motorola</h2>
                <audio controls>
                    <source
                        src="./src/audio/hello moto!.mp3"
                        type="audio/mp3"
                    />
                </audio>
            </div>
        </main>
    );
}

export default Ventas;