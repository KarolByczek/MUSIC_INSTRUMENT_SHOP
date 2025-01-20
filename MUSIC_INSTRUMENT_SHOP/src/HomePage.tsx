import CompanyStrip from './components/CompanyStrip';
import HeadStrip from './components/HeadStrip';
import Menu from './components/Menu';
import ProductStrip from './components/ProductStrip';
import Carousel from "./components/Carousel";


const IMAGES = [
  "https://thumbs.static-thomann.de/thumb//txteaser1000--16bcb21d2cf8859a60079edf7f73a7d6/pics/cms/image/teasertool/de/13242/448687_homepianos.webp?d=ZW1uZzUybENVcU1RQ2dsZk0yNmUxT2psRFhJSjNOQ2pDeGJkUktiWVVOV2pIOWMrMWkxckVPZ1c2d0NXckxaZTdyVGlISkZ0bWwvcmdON3RGV2o0QWRVZnhHZlRpSVp1cDVtb1crNTlOL00yR1lLczFBVDFBcUludlJ6U1JrbGl0VXkrV0FaWkxzb2ZYYlhzcXYzRGJIcWVxSWtRN1l6Q3lMWE1RelpaVEF0Z1ZSdytFSmU3dXNBTThVSkJaQ05BaGxRdXJaeXpyZzFkNWV1U2lWU3pxelJMc3Y4QjgrSGtsZHpmOEV0Z2JoS212TTRwc054cUsxWFFMbDY2UUlqeHpUeE81NUEwYTd4NWs0VXVzNGZVZUpTVnQvRjUrK3diUEp4M0ZDcDg5WS9nZEJNQkFpVHAvc2Myb1V4aWlsL2g%3D",
  "https://thumbs.static-thomann.de/thumb//txteaser1000--b8eb7ab01cf6b54ff98965db6febe35a/pics/cms/image/teasertool/de/13242/universal_audio_topsellers.webp?d=ZW1uZzUybENVcU51aldNaFNaWjcyZmQySUZEVE9WTzlqVjI3Rk11dmovZHNxOTc4RVF0d1JJd2FzL3djT0RPWW5rcCtsS05mS3pkYjRjaTBSRHhsR1NTY05tTXRmc1YwM1lHcm1kaVo5RlVWcXdrNGltT3Z5ZGRpeEZLTkxiVEFRazJrVXZNdU92aGU1UUhWd1FzTFlyL09ZdjBhZmphdjVCeUZCRHdHMnpZUFRNbUYveXdZNmt4VGY2WFJDdWNRZW9yVTJlQlBEbWxWdll2c1ZGOHpvUjZ2dE44Vk1iNzJFeVVET3VBdGpwQ0kwWHpaNzZhTXpsU2FySjVlNGhsZWlFQWNlSWxlMVJ5b2dZcmJvOUgvOVdHU3FVVVJOK09uMXdLU3JHazVxUHVCU3FNajJzS1dMUUxkWWUwbEFyb3U%3D",
  "https://thumbs.static-thomann.de/thumb//txteaser1000--fe3a30e4bd6eabb5f450d21011dbf6b9/pics/cms/image/teasertool/de/13242/alesis_electronic_drums.webp?d=ZW1uZzUybENVcU9pbnMvYTN5U3Z3ZWpsRFhJSjNOQ2pEZlMyM3pTSFgzdWpIOWMrMWkxckVPZ1c2d0NXckxaZTdyVGlISkZ0bWwvcmdON3RGV2o0QWRVZnhHZlRpSVp1cDVtb1crNTlOL001SEcyeVNSOEpSYUludlJ6U1JrbGl0VXkrV0FaWkxzcXMyVUFzZDg3aGpucWVxSWtRN1l6Q3lMWE1RelpaVEF0Z1ZSdytFSmU3dW1MMHIvM3JpSXpXM1VZeTJSRXdUNXBUemUvenVrd1VuUU9Nd01LcTVsNElkTDJxVlpwelpWMG9lUXhGNXZQZEMxNGR4MUxrU1BuUmRkWjhkdzc5ZFFMcDVUQjFONnlnRVNKUkk1MWR5ajFLQllHQVJLOWZjdWVQNE9rNlBnbzVseU85Z0ZCNUQ2OVk%3D",
  "https://thumbs.static-thomann.de/thumb//txteaser1000--eeb5ccaa2d9a81c100825310543913c9/pics/cms/image/teasertool/de/13242/aucoustic_guitars_topseller.webp?d=ZW1uZzUybENVcU0rZmUrRFdZb0JvdmQySUZEVE9WTzlxTE9Fd2xtM3V0NXNxOTc4RVF0d1JJd2FzL3djT0RPWW5rcCtsS05mS3pkYjRjaTBSRHhsR1NTY05tTXRmc1YwM1lHcm1kaVo5RlVUQnZUNjdrVlY1TmRpeEZLTkxiVEFRazJrVXZNdU92aGU1UUhWd1FzTFlyL09ZdjBhZmphdktNaktTSU5KTHIxZ1ZSdytFSmU3dXRGdVRtQkZMMmtzaGxRdXJaeXpyZzFkNWV1U2lWU3pxK2t3L2l2OUM0bFVsZHpmOEV0Z2JoS212TTRwc054cUt6K1ZtNDdqenBFK0J1eG1FMm9KVmRCNWs0VXVzNGZVZUpTVnQvRjUrK3diUEp4M0ZDcDg5WStqVHl1ZFRTOFhrLy9zYzlUeVVydmo%3D",
  "https://thumbs.static-thomann.de/thumb//txteaser1000--d0ad3dcabd17e5443b4f07d77d48512c/pics/cms/image/teasertool/de/13242/bluetooth_speaker_topseller.webp?d=ZW1uZzUybENVcU0rZmUrRFdZb0JvdmQySUZEVE9WTzlqVjI3Rk11dmovZHNxOTc4RVF0d1JJd2FzL3djT0RPWW5rcCtsS05mS3pkYjRjaTBSRHhsR1NTY05tTXRmc1YwM1lHcm1kaVo5RlhaQnFTN3lBK0ZVZUNOVldOdjJON3M4QU9DWjhNRGdCOTZucWlKRU8yTXdoS3FDTTZPSW1ZRnlHekY1dk51RHpKRllFMmtNMFZac25Ea3VidURCN0d3VTgzdjg3cE1GSjNaampxNTlSdHZ4M1M5cWxXYWMyVmRLSGtNUmViejNRc2FUTzRURzhaVnVQRUhpeWVxV3QwaDZlVXdkVGVzb0JFaVVTT2RYY285U3VTSFgzUldXenNtaitEcE9qNEtPWmZ3OHcrSmsyc1VJZz09",
  "https://thumbs.static-thomann.de/thumb//txteaser1000--c8d1e3e701f0e78d2737b3f18db67b81/pics/cms/image/teasertool/de/13242/gibson_les_paul_deal_2024.webp?d=ZW1uZzUybENVcU56M0FiRXg2YS80S2lISWxrUmtBUkpxSUdLMjZQUi8vVlpNNFppV2lPOGNIbVRoUzZ6aDlSNCswZllhT3ZlY1FNOEFkRm9FT3NuZ20zZ3FtMUxyellwc1Y1Z1lVSkd3bC8zeWlCbGRqZVVpLzNFdlB0MExFQW9oMnRnODRnbjBHeS9WWmU3dy95RmxjaHN4ZWJ6Ymc4eVR0Z3JIN1JKV0NSckFsYjBsSUZHdWxQTjcvTzZUQlNkMlk0NnVmVWJiOGQwdmFwVm1uTmxYU2g1REVYbTg5MExHa3p1RXh2R1ZianhCNHNucWxyZEllbmxNSFUzcktBUklsRWpuVjNLUFVvRmdZQkVyMTl5NTQvZzZUbytDam1YSTcyQVVIa1ByMWc9",
  "https://thumbs.static-thomann.de/thumb//txteaser1000--29d6326f2e09f93bf4a480f7ff79760f/pics/cms/image/teasertool/de/13242/millenium_drums_mps_1000.webp?d=ZW1uZzUybENVcVAwNkRHQnQ3OHJMT2psRFhJSjNOQ2pHSSs5eUlEdzVUYWpIOWMrMWkxckVPZ1c2d0NXckxaZTdyVGlISkZ0bWw4eFdKWmFId1NyNnVWRGhqYXNUSHJkMTJMRVVvMHR0TUJDVGFSUzh5NDYrRjdsQWRYQkN3dGl2ODVpL1JwK05xOG95TXBJZzBrdXZXQlZIRDRRbDd1NmlHcnNJOG52NWo5NE4vbktBSWo3SFYzbDY1S0pWTE9yNlREK0svMExpVlNWM04vd1MyQnVFcWE4emltdzNHb3JVVlh6KzZWYWNNNXpKODE3OWxaRmxIbVRoUzZ6aDlSNGxKVzM4WG43N0J0L3RNb2gxbE8ycHFOUEs1MU5MeGVULyt4ejFQSlN1K009",
  "https://thumbs.static-thomann.de/thumb//txteaser1000--08ffb962fc687cc34ef41bb18e3a8797/pics/cms/image/teasertool/de/13242/recorder_topseller.webp?d=ZW1uZzUybENVcU1acXgwb0lDTTdxL2QySUZEVE9WTzljVFhoQnRLZTRHUnNxOTc4RVF0d1JJd2FzL3djT0RPWW5rcCtsS05mS3pkYjRjaTBSRHhsR1NTY05tTXRmc1YwM1lHcm1kaVo5RlhsUTRZMnJFeDYzZGRpeEZLTkxiVEFRazJrVXZNdU92aUtlSFBoTHNRSWJML09ZdjBhZmphdktNaktTSU5KTHIxZ1ZSdytFSmU3dW04aGw1RkNXZ2ZYMWd1TzZJMDh0VGxkNWV1U2lWU3pxK0pqamZtUlhoMXpHT3FGLytUcjBVUVpWdVhJZytHRWxOaDlTRXZ2NWk0akVZcHpKRmFCL0pyZDNMbEV6OFdlUFZ2MExEQ2plM095WTV4bDVTaHJSbTZTQjJzTjN6QnhsUmU1VGM2WFp6Y0M%3D",
  "https://thumbs.static-thomann.de/thumb//txteaser1000--73c9c321288d3e20f36177c248860328/pics/cms/image/teasertool/de/13242/looper_topsellers_2.webp?d=ZW1uZzUybENVcVA0NldrT1VtUm9ZdmQySUZEVE9WTzlqeExVc2NIVkZPcHNxOTc4RVF0d1JJd2FzL3djT0RPWW5rcCtsS05mS3pkYjRjaTBSRHhsR1NTY05tTXRmc1YwM1lHcm1kaVo5RlhsUTRZMnJFeDYzZGRpeEZLTkxiVEFRazJrVXZNdU92ak1KdURyKzlScmptL1dlV0lqTUd0WHBQa29OZWdpRTMyTmduQTFnYXBaRkszdDJ2TllqTzlvNkdDMC81SmpmSDAyKzJCa1kyakF4SFM5cWxXYWMyVmRLSGtNUmViejNRdUhpMVNpZTA5dFc1d3BERE1uMDd0SjZlVXdkVGVzb0JFaVVTT2RYY285U3VTSFgzUldXenNtaitEcE9qNEtPWmNqdllCUWVRK3ZXQT09"
]


function HomePage() {

  return (
    <>
        <title>HOME PAGE</title>
      <section>
        <HeadStrip />
        <CompanyStrip />
        <ProductStrip />
        <Menu />
        <h1>WELCOME TO THE MUSIC INSTRUMENT SHOP <span>&#128075;</span></h1>
        <Carousel slides={IMAGES} />
        <p>
          THE SHOP
        </p>
      </section>
    </>
  )
}

export default HomePage
