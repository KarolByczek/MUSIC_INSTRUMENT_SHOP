import './HomePage.scss';
import { Link } from "react-router-dom";

function HomePage() {

  return (
    <>
     <h1>
      THE SHOP
     </h1>
     <Link className="link" to="guitars">
        <div className="add_employee_link">Go to guitars page.</div>
      </Link>
    </>
  )
}

export default HomePage
