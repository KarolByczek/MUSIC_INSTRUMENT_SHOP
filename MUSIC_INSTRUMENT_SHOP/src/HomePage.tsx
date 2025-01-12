import CompanyStrip from './components/CompanyStrip';
import HeadStrip from './components/HeadStrip';
import Menu from './components/Menu';
import ProductStrip from './components/ProductStrip';
import Carousel from "./components/Carousel";


function HomePage() {

  return (
    <>
      <head>
        <title>HOME PAGE</title>
      </head>
      <body>
        <HeadStrip />
        <CompanyStrip />
        <ProductStrip />
        <Menu />
        <Carousel />
        <h1>
          THE SHOP
        </h1>
      </body>
    </>
  )
}

export default HomePage
