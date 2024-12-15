import './HomePage.scss';
import { Link } from "react-router-dom";

function HomePage() {

  return (
    <>
     <h1>
      THE SHOP
     </h1>
     <Link className="link" to="guitars">
        <div className="menu_link">Go to guitars page.</div>
      </Link>
      <Link className="link" to="saxophones">
        <div className="menu_link">Go to saxophones page.</div>
      </Link>
    </>
  )
}

export default HomePage
