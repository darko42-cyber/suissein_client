import { Link } from "react-router-dom";
import { navData } from "../../data/navdata";
import "./navbar.css";
const Navbar = ({ scroll,navOpen }) => {
  return (
   <>

   {
    navOpen &&  <nav
    className={`${
      scroll
        ? "navbar-list-primary"
        : "navbar-list-nuetral"
    }`}
  >
  
    <ul>
      {navData.map((nav) => {
        return (
          <Link
            key={nav.url}
            to={`${nav.url}`}
            className={`${
              scroll
                ? "navbar-link-primary"
                : "navbar-link-nuetral"
            }`}
          >
            <li className="link-text"> {nav.text} </li>
            {nav.subUrl?.length && (
              <li
                style={{ opacity: 0, height: "0px" }}
                className='sublinks'
              >
                {nav.subUrl?.map((sub) => {
                  return (
                    <span key={sub.text}>
                      {" "}
                      {sub.text}{" "}
                    </span>
                  );
                })}
              </li>
            )}
          </Link>
        );
      })}
    </ul>
  </nav>
   }
   
   </>
  );
};

export default Navbar;
