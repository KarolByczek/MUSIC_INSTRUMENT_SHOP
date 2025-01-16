import CompanyStrip from './components/CompanyStrip';
import HeadStrip from './components/HeadStrip';
import Menu from './components/Menu';
import ProductStrip from './components/ProductStrip';
import Carousel from "./components/Carousel";


function HomePage() {

  return (
    <>
        <title>HOME PAGE</title>
      <section>
        <HeadStrip />
        <CompanyStrip />
        <ProductStrip />
        <Menu />
        <Carousel />
        <h1>
          THE SHOP
        </h1>
      </section>
    </>
  )
}

export default HomePage
