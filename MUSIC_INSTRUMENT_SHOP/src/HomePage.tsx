import CompanyIcon from './components/CompanyIcon';
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
        <CompanyIcon />
        <Menu />
        <h1>
          THE SHOP
        </h1>
        <div className="image-container">
          <img src="src/assets/instrument-user-bckg01.jpg" alt="Sample Image" />
        </div>
      </body>

    </>
  )
}

export default HomePage
