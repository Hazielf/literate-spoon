import "./css/Marcas.css";

const SeccionMarca = ({ marca }) => {
  const {
    id,
    nombre,
    logo,
    tituloInfo,
    descripcion,
    video,
    imagen
  } = marca;

  return (
    <div className="marca" id={id}>
      <div className="contenido">
        <h1>{nombre}</h1>
        <div className="logo-container">
          <img
            className="logo-brand"
            src={logo}
            alt={`Logo ${nombre}`}
          />
        </div>
        <div className="informacion-container">
          <h2>{tituloInfo}</h2>
          {descripcion.map((texto, index) => (
            <p key={`${id}-parrafo-${index}`}>{texto}</p>
          ))}
        </div>
      </div>

      <div className="marca-contenido">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={video}
            title={`Video promocional de ${nombre}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="image-container">
          <img
            src={imagen}
            alt={`Imagen de ${nombre}`}
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

const Marcas = () => {
  const datosMarcas = [
    {
      id: 'acer',
      nombre: 'Acer',
      logo: '/img/marcas/acer-logo-acer-icon-free-free-vector.jpg',
      tituloInfo: 'Bueno, bonito y avanzado',
      descripcion: [
        'Acer es una marca líder en tecnología, especializada en productos como laptops, PCs de escritorio y monitores. Conocida por su innovación y calidad, Acer se ha posicionado como una de las marcas preferidas por los usuarios de todo el mundo.',
        'Modelos populares incluyen la serie Aspire y Predator, que ofrecen un alto rendimiento y diseños atractivos para diferentes necesidades.'
      ],
      video: 'https://www.youtube.com/embed/wVUqg0HlTRk?si=K3yCgJz-2_noYVNx',
      imagen: '/img/marcas/ACERIMG.jpg'
    },
    {
      id: 'apple',
      nombre: 'Apple',
      logo: '/img/marcas/apple.png',
      tituloInfo: 'Apple es más que tecnología, es una experiencia',
      descripcion: [
        'La marca ha redefinido la forma en que interactuamos con la tecnología, creando una comunidad global de usuarios leales. Además, Apple está comprometida con un futuro sostenible, utilizando energía renovable y materiales reciclados en sus productos.',
        'Apple no es solo una marca, es un símbolo de innovación. Fundada en 1976 por Steve Jobs, Steve Wozniak y Ronald Wayne, Apple ha transformado nuestra vida diaria con productos icónicos como el iPhone, MacBook y Apple Watch.'
      ],
      video: 'https://www.youtube.com/embed/N9bVlpMtSv4?si=OJ1bovjvWs4_RGeE',
      imagen: '/img/marcas/qqqqq.jpg'
    },
    {
      id: 'asus',
      nombre: 'Asus',
      logo: '/img/marcas/asus.png',
      tituloInfo: 'Asus: Líder en Tecnología y Innovación en PCs',
      descripcion: [
        'Asus se ha destacado por incorporar tecnologías de vanguardia en sus productos. Esto incluye pantallas de alta frecuencia de actualización para videojuegos, sistemas avanzados de refrigeración para PC, y procesadores de última generación.',
        'Asus es una empresa taiwanesa reconocida mundialmente como uno de los principales fabricantes de computadoras y componentes tecnológicos. Fundada en 1989, Asus ha revolucionado la industria de la informática con sus productos de alta calidad.'
      ],
      video: 'https://www.youtube.com/embed/kwlOAeFLKH0?si=qntrK8JSP9GZD7jT',
      imagen: '/img/marcas/asuspc.png'
    },
    {
      id: 'hp',
      nombre: 'HP',
      logo: '/img/marcas/hp_logo.png',
      tituloInfo: 'HP (Hewlett-Packard): Innovación y Tecnología de Vanguardia',
      descripcion: [
        'HP (Hewlett-Packard) es una de las empresas tecnológicas más grandes y reconocidas a nivel mundial, con más de 80 años de historia en la industria. Fundada en 1939 por Bill Hewlett y Dave Packard.',
        'HP se ha comprometido a liderar la industria en innovación tecnológica mientras mantiene un enfoque fuerte en la sostenibilidad. Sus productos están diseñados para ser más ecológicos.'
      ],
      video: 'https://www.youtube.com/embed/KdB4v9ssdIY',
      imagen: '/img/marcas/hp_laptop.avif'
    },
    {
      id: 'lenovo',
      nombre: 'Lenovo',
      logo: '/img/marcas/lenovo.png',
      tituloInfo: 'Lenovo: Innovación para Todos',
      descripcion: [
        'Lenovo es una empresa multinacional de tecnología que se ha convertido en uno de los mayores fabricantes de computadoras personales del mundo. Con una historia que comenzó en 1984 en China.',
        'La compañía es conocida por su innovación continua y su compromiso con la calidad. Lenovo ha revolucionado el mercado de las laptops con su icónica línea ThinkPad.'
      ],
      video: 'https://www.youtube.com/embed/gVBELZqOOIE?si=jqIWpvOEHUvfQpjZ',
      imagen: '/img/marcas/lenovo2.avif'
    }
  ];

  return (
    <main>
      {datosMarcas.map(marca => (
        <SeccionMarca key={marca.id} marca={marca} />
      ))}
    </main>
  );
};

export default Marcas;