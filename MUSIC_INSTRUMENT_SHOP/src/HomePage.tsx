import CompanyStrip from './components/CompanyStrip';
import HeadStrip from './components/HeadStrip';
import Menu from './components/Menu';


function HomePage() {

  return (
    <>
      <head>
        <title>HOME PAGE</title>
      </head>
      <body>
        <HeadStrip />
        <CompanyStrip />
        <Menu />
        <h1>
          THE SHOP
        </h1>
      </body>
    </>
  )
}

export default HomePage
