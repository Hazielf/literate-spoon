import '../css/Components/Header.css'

function Header(){
  return (
    <header>
      <div className="header-left">
        <div className="logo">
          <img src="/img/logo.png" alt="Logo CiberStore" />
        </div>
        <h2><a href="/">CiberStore</a></h2>
      </div>

      <div className="search-container">
        <div className="container_busqueda">
          <input
            type="text"
            placeholder="Buscar"
          />
          <a href="#"></a>
          <i className="fa-solid fa-magnifying-glass icon"></i>
        </div>
      </div>
    </header>
  )
}

export default Header