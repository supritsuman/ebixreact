import Logo from "./logo";

const Header = () => {
  return (
    <>
    <div className="topnav">
        <div className="container-fluid px-4">
          <a href="#">Careers</a>
          <a href="#" className="ms-4">Contact us</a>
         </div> 
     </div>
    <nav className="navbar navbar-expand-lg navbar-light px-4 navnew">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <Logo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
