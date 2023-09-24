
const NavBar = () => {
  return (
    <> 
    <section>
      <nav className="navbar navbar-dark bg-black fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#kOffcanvasNavbar"
            aria-controls="kOffcanvasNavbar"
            id="kToggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#" id="kBrand">
            My To dos
          </a>

          <div className="dropdown ms-auto">
            <a
              href="#"
              id="kOptions"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-three-dots-vertical text-white"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-gear"></i> Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-box-arrow-right"></i> Log Out
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-person"></i> Account
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-share"></i> Share
                </a>
              </li>
            </ul>
          </div>

          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabIndex="-1"
            id="kOffcanvasNavbar"
            aria-labelledby="kOffcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="kOffcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                id="kCloseBtn"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item" id="kHome">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i className="bi bi-house-door"></i> Home
                  </a>
                </li>
                <li className="nav-item" id="kCalendar">
                  <a className="nav-link" href="#">
                    <i className="bi bi-search"></i> Search
                  </a>
                </li>
                <li className="nav-item" id="kTodoList">
                  <a className="nav-link" href="#">
                    <i className="bi bi-calendar"></i> Calendar
                  </a>
                </li>
                <li className="nav-item" id="kProfile">
                  <a className="nav-link" href="#">
                    <i className="bi bi-person"></i> Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
    </>
  );
};

export default NavBar;
