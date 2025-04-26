import "./css/Productos.css"

function Monitores() {
  const monitores = [
    {
      id: 1,
      imagen: "/img/productos/397467-1200-1200.webp",
      titulo: "Monitor curvo 27\" Teros TE-2731S",
      caracteristicas: [
        "MODELO TE-2731S",
        "PANTALLA TAMAÑO 27 PULG",
        "RESOLUCION MAX 1920 x 1080",
        "TASA DE REFRESCO 100 HZ"
      ],
      precio: "S/530"
    },
    {
      id: 2,
      imagen: "/img/productos/eee.webp",
      titulo: "Monitor Caixun 22\" C22X3F Plana Full HD Panel",
      caracteristicas: [
        "Modelo del Producto: A22FAB-RAGL",
        "Tamaño de pantalla: 21,45\"",
        "Resolución Máxima: 1920 x 1080",
        "Frecuencia de actualización máxima HDMI: 75Hz"
      ],
      precio: "S/ 285"
    },
    {
      id: 3,
      imagen: "/img/productos/aaaaaa.jpg",
      titulo: "Monitor SAMSUNG Monitor A22i",
      caracteristicas: [
        "Marca: SAMSUNG",
        "Tamaño de pantalla: 49 Pulgadas",
        "Resolución: QHD Ultra Wide 1440p",
        "Relación de aspecto: 32:9"
      ],
      precio: "S/ 1,000"
    },
    {
      id: 4,
      imagen: "/img/productos/aa.jpg",
      titulo: "KOORUI Monitor de computadora",
      caracteristicas: [
        "Marca: KOORUI",
        "Tamaño de pantalla: 24 Pulgadas",
        "Resolución: FHD 1080p",
        "Relación de aspecto: 16:09"
      ],
      precio: "$110"
    },
    {
      id: 5,
      imagen: "/img/productos/qqq.avif",
      titulo: "Monitor Gaming Teros",
      caracteristicas: [
        "MODELO: 2731S",
        "MARCA: TEROS",
        "TAMAÑO PANTALLA: 27\"",
        "RESOLUCIÓN: 1920 x 1080 FULL HD"
      ],
      precio: "S/ 480"
    },
    {
      id: 6,
      imagen: "/img/productos/aq.avif",
      titulo: "Monitor Gaming 27\" Xiaomi G27QI",
      caracteristicas: [
        "Modelo: G27QI",
        "Resolución de pantalla: WQHD",
        "Características de la pantalla: IPS",
        "Velocidad de imagen: 144Hz"
      ],
      precio: "S/ 800"
    },
    {
      id: 7,
      imagen: "/img/productos/ter.avif",
      titulo: "MONITOR TEROS TE-2765G",
      caracteristicas: [
        "Modelo: TE-2765G",
        "Tamaño de la pantalla: 27\"",
        "Resolución de pantalla: WQHD",
        "Detalle de la garantía: 1 AÑO POR FALLA DE FABRICA"
      ],
      precio: "S/ 700"
    },
    {
      id: 8,
      imagen: "/img/productos/wq.avif",
      titulo: "Monitor 165Hz Teros Gamer",
      caracteristicas: [
        "Marca: Teros",
        "Modelo: TE-2471G",
        "Tamaño: 23.8 pulgadas",
        "Resolución máxima: 1920 x 1080 (Full HD)"
      ],
      precio: "S/ 440"
    },
    {
      id: 9,
      imagen: "/img/productos/oc.webp",
      titulo: "Tablet ALLDOCUBE 10.1\" IPS Conectividad 4G",
      caracteristicas: [
        "Modelo T1021P",
        "memoria RAM 4GB",
        "Sistema operativo Android",
        "Memoria interna 64GB"
      ],
      precio: "S/ 319.00"
    },
    {
      id: 10,
      imagen: "/img/productos/qqqqqqqqqqqqqqq.webp",
      titulo: "Monitor AOC 35",
      caracteristicas: [
        "Modelo: AG353UCG",
        "Tamaño de la pantalla: 35\"",
        "Garantía: 3 años",
        "Incluye: Cable poder, cable HDMI, cable DP, manual, base"
      ],
      precio: "s/ 800"
    },
    {
      id: 11,
      imagen: "/img/productos/wwwww.jpg",
      titulo: "Monitor Gamer LG 27GS65F",
      caracteristicas: [
        "Modelo: LG 27GS65F",
        "Tamaño de la pantalla: 27\"",
        "Resolución de pantalla: Full HD",
        "Garantía: 12 Meses"
      ],
      precio: "s/ 1800"
    },
    {
      id: 12,
      imagen: "/img/productos/hh.webp",
      titulo: "Monitor Gamer Teros TE",
      caracteristicas: [
        "Modelo: TE-2127S",
        "Tamaño de la pantalla: 21.5\"",
        "Resolución de pantalla: FHD",
        "Número de entradas HDMI: 1"
      ],
      precio: "s/ 375.00"
    }
  ]

  return (
    <main className="items-page">
      <div className="items-container">
        <div className="items-grid">
          {monitores.map((monitor) => (
            <div key={monitor.id} className="item-card">
              <img
                src={monitor.imagen}
                alt={monitor.titulo}
                className="item-image"
              />
              <h2 className="item-title">{monitor.titulo}</h2>
              
              <div className="item-specs">
                {monitor.caracteristicas.map((caracteristica, index) => (
                  <p key={index} className="item-spec">{caracteristica}</p>
                ))}
              </div>
              
              <h1 className="item-price">{monitor.precio}</h1>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Monitores