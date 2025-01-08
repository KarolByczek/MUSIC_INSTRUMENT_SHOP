import CompanyStrip from './components/CompanyStrip';
import HeadStrip from './components/HeadStrip';
import Menu from './components/Menu';
import ProductStrip from './components/ProductStrip';


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
        <div className='carousel'>
          <img src="https://thumbs.static-thomann.de/thumb//txteaser1000--7c074a4974ff1de580429ba7214544c1/pics/cms/image/teasertool/de/13332/headphone_topseller.webp?d=ZW1uZzUybENVcU1RSThmM0tnalFkcG93M0VFSTNpWnRVSk1oZ0ZGeGt4S0hZN3pqS0Iya2ZIbVRoUzZ6aDlSNCswZllhT3ZlY1FNUDNQOUc4eDBKZ2hncXorN2lFdlc2dS9nQmsxc0ZSWUkyR1lLczFBVDFBbWt6d09sVXZIT20xbnBxR3ZNV1IyaUhhMkR6aUNmUWJOOXdBZHd4ZFdLR0hLOG5rdHYrM3NxSWtOOG1XT2lMdzJpR1hKSmN2RlBkdnhrZUppK0JNWXNHbUFrTHByN053OEMrME9PcHpWZ3ZCTWMrYS9MbE9mK0RDUmtYeHhqa0VBMjg2MVMwbzBZamt3SW5td1FEY21hd00yNkhvQXJ3N1Z1ZUFBNUoyaWRYeWpJYW5tZUUyVWhkUmZHSE5zaWN2Z0Jvem9BWVhCSkk%3D" alt="some headphones" />
          <img src="https://thumbs.static-thomann.de/thumb//txteaser1000--95352427ee4ef37719b8f43d1c19d85d/pics/cms/image/teasertool/de/13332/millenium_mps_850.webp?d=ZW1uZzUybENVcVBiSWdFcm00ZS84T2psRFhJSjNOQ2pmMTdQNmxDZ3l4aWpIOWMrMWkxckVBWEliMm9EOTlyc015UjR0TDgyckVYcmdON3RGV2o0QWRVZnhHZlRpSVp1cDVtb1crNTlOL00yR1lLczFBVDFBZ0lxZzZza3pkYTJqSTRJdnd1anY1bzBYWjlDVVh6RlhvZHJZUE9JSjlCczMzQUIzREYxWW9ZY3J5ZVMyLzdleW9pUTN5Wlk2SXZEYUlaY2tseThVOTIvR1I0bUw0RXhpMjhoTTNrcjViS213TDdRNDZuTldDOEV4ejVyOHVVNS8yZVBVcEhmWHNnclJpZHBvMGhKUEQ2WlNud1Z3dHQxcVVsc2lDSDQ5VTA1UVZOZjVrd0E4R2pLTWhxZVo0VFpTRjFGOFljMnlKeStBR2pPZ0JoY0VrZz0%3D" alt="some drums" />
          <img src="https://thumbs.static-thomann.de/thumb//txteaser1000--3dc0e243f6392c74f5793ac39f2c5bab/pics/cms/image/teasertool/de/13332/digital_mixers.webp?d=ZW1uZzUybENVcVB5cUdiLzJkeTVpK2psRFhJSjNOQ2pHSSs5eUlEdzVUYWpIOWMrMWkxckVPZ1c2d0NXckxaZTdyVGlISkZ0bWwvcmdON3RGV2o0QWRVZnhHZlRpSVp1cDVtb1crNTlOL00yR1lLczFBVDFBcUludlJ6U1JrbGl0VXkrV0FaWkxzb2ZYYlhzcXYzRGJIcWVxSWtRN1l6Q3lMWE1RelpaVEF0Z1ZSdytFSmU3dW04aGw1RkNXZ2ZYMWd1TzZJMDh0VGxkNWV1U2lWU3pxelJMc3Y4QjgrSGtsZHpmOEV0Z2JoS212TTRwc054cUsxRlY4L3VsV25ET2N5Zk5lL1pXUlpSNWs0VXVzNGZVZUpTVnQvRjUrK3diUEp4M0ZDcDg5WS9nZEJNQkFpVHAvc2Myb1V4aWlsL2g%3D" alt="some digital mixers" />
          <img src="https://thumbs.static-thomann.de/thumb//txteaser1000--c5d6ea9dffe490693780c5acaa87bc00/pics/cms/image/teasertool/de/13332/prs_electric_guitars_2024.webp?d=ZW1uZzUybENVcVBiSWdFcm00ZS84T2psRFhJSjNOQ2pHSSs5eUlEdzVUYWpIOWMrMWkxckVPZ1c2d0NXckxaZTdyVGlISkZ0bWwvcmdON3RGV2o0QWRVZnhHZlRpSVp1cDVtb1crNTlOL05rSHpjNjlUTlA2cUludlJ6U1JrbGl0VXkrV0FaWkxzb2ZYYlhzcXYzRGJIcWVxSWtRN1l6Q0Vxb0l6bzRpWmdYSWJNWG04MjRQTWpxZ0E4aVQvc2JrWkdrVGZhTGJYTUZUemUvenVrd1VuUU9Nd01LcTVsNElkTDJxVlpwelpWMG9lUXhGNXZQZEN4cE03aE1ieGxXNDhRZUxKNnBhM1NIcDVUQjFONnlnRVNKUkk1MWR5ajFLQllHQVJLOWZjdWVQNE9rNlBnbzVsL0R6RDRtVGF4UWk%3D" alt="some electric guitars" />
        </div>
        <h1>
          THE SHOP
        </h1>
      </body>
    </>
  )
}

export default HomePage
