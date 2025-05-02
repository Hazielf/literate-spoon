import "./css/Productos.css"

function Tablets() {
  const tablets = [
    {
      id: 1,
      imagen: "/img/productos/tablet galaxi.jpg",
      titulo: "SAMSUNG Galaxy Tab S6 Lite (2024)",
      caracteristicas: [
        "Marca: Samsung",
        "Nombre del modelo Tab S6 Lite",
        "Capacidad de almacenamiento de memoria 64 GB",
        "Resolución Máxima de Pantalla 2000 x 1200 Pixels"
      ],
      precio: "S/739"
    },
    {
      id: 2,
      imagen: "/img/productos/tablet lenovo.avif",
      titulo: "Tablet Lenovo 11\" 128Gb Con Folio Case Y Lápiz",
      caracteristicas: [
        "Marca Lenovo",
        "Modelo Tab M11",
        "País de origen China",
        "Capacidad de almacenamiento 128GB"
      ],
      precio: "S/699"
    },
    {
      id: 3,
      imagen: "/img/productos/tablet mgalaxi.webp",
      titulo: "Tablet GALAXY S9 FE 10.9\" 6GB 128GB Silver",
      caracteristicas: [
        "Marca: Samsung",
        "Modelo SM-X510NZSAPEO",
        "Capacidad del disco duro 128GB",
        "Incluye Tablet, cable USB, S Pen"
      ],
      precio: "S/1,899"
    },
    {
      id: 4,
      imagen: "/img/productos/tablet galaxi.jpg",
      titulo: "Tablet XIAOMI Redmi Pad PRO",
      caracteristicas: [
        "Modelo VHU4782EU",
        "Marca: xiaomi",
        "Sistema operativo Android",
        "Capacidad del disco duro 256GB"
      ],
      precio: "S/1,299"
    },
    {
      id: 5,
      imagen: "/img/productos/image.webp",
      titulo: "Apple iPad Air 11\" Chip M2 128GB Wifi",
      caracteristicas: [
        "Modelo Air M2",
        "Sistema operativo iOS",
        "Memoria interna 128GB",
        "Características Pantalla Liquid Retina|Chip M2 de Apple"
      ],
      precio: "S/3,299"
    },
    {
      id: 6, 
      imagen: "/img/productos/imageUrl_1.webp",
      titulo: "Tablet ALLDOCUBE 10.1\" IPS Conectividad 4G",
      caracteristicas: [
        "Modelo T1021P",
        "memoria RAM 4GB",
        "Sistema operativo Android",
        "Memoria interna 64GB"
      ],
      precio: "S/319"
    },
    {
      id: 7,
      imagen: "/img/productos/tableta xiaomi.webp", 
      titulo: "Tablet XIAOMI Redmi Pad PRO",
      caracteristicas: [
        "Modelo VHU4782EU",
        "Marca: xiaomi",
        "Sistema operativo Android",
        "Capacidad del disco duro 256GB"
      ],
      precio: "S/1,299"
    },
    {
      id: 8,
      imagen: "/img/productos/20392770.webp",
      titulo: "Tablet TCL 10 G2 10.36\"",
      caracteristicas: [
        "Modelo TCL TAB10 G2 WIFI 4+128GB CASE GRIS",
        "memoria RAM 4GB",
        "Sistema operativo Android", 
        "Capacidad del disco duro 128GB"
      ],
      precio: "s/499"
    },
    {
      id: 9,
      imagen: "/img/productos/image-b0d990cdc8f64ec5929e94da65f35b0a.webp",
      titulo: "Tablet Samsung A9 Plus",
      caracteristicas: [
        "Memoria interna 64GB",
        "Modelo F-SMX210NZA-07",
        "Sistema operativo Android",
        "Observaciones Pantalla: 1920x1200"
      ],
      precio: "S/699"
    }
  ]

  return (
    <main className="items-page">
      <div className="items-container">
        <div className="items-grid">
          {tablets.map((tablet) => (
            <div key={tablet.id} className="item-card">
              <img 
                src={tablet.imagen}
                alt={tablet.titulo}
                className="item-image"
              />
              <h2 className="item-title">{tablet.titulo}</h2>
              <div className="item-specs">
                {tablet.caracteristicas.map((caracteristica) => (
                  <p key={caracteristica} className="item-spec">{caracteristica}</p>
                ))}
              </div>
              <h1 className="item-price">{tablet.precio}</h1>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Tablets