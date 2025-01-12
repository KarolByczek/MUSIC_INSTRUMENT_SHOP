

const Carousel = () => {

  function onClickHandle(e:any) {
    const slider = e.target.closest(".container").querySelector(".slider")
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
    if (slider.classList.contains(".left-handle")) {
      slider.style.setProperty("--slider-index", sliderIndex - 1)
    }
    if (slider.classList.contains(".left-handle")) {
      slider.style.setProperty("--slider-index", sliderIndex + 1)
    }
  }


  return (
    <div className="container">
      <button className="handle left-handle" onClick={onClickHandle}>
        <div className="text">&#129088;</div>
      </button>
      <div className='slider'>
        <img src="https://thumbs.static-thomann.de/thumb//txteaser1000--16bcb21d2cf8859a60079edf7f73a7d6/pics/cms/image/teasertool/de/13242/448687_homepianos.webp?d=ZW1uZzUybENVcU1RQ2dsZk0yNmUxT2psRFhJSjNOQ2pDeGJkUktiWVVOV2pIOWMrMWkxckVPZ1c2d0NXckxaZTdyVGlISkZ0bWwvcmdON3RGV2o0QWRVZnhHZlRpSVp1cDVtb1crNTlOL00yR1lLczFBVDFBcUludlJ6U1JrbGl0VXkrV0FaWkxzb2ZYYlhzcXYzRGJIcWVxSWtRN1l6Q3lMWE1RelpaVEF0Z1ZSdytFSmU3dXNBTThVSkJaQ05BaGxRdXJaeXpyZzFkNWV1U2lWU3pxelJMc3Y4QjgrSGtsZHpmOEV0Z2JoS212TTRwc054cUsxWFFMbDY2UUlqeHpUeE81NUEwYTd4NWs0VXVzNGZVZUpTVnQvRjUrK3diUEp4M0ZDcDg5WS9nZEJNQkFpVHAvc2Myb1V4aWlsL2g%3D" alt="alternative1" />
        <img src="https://thumbs.static-thomann.de/thumb//txteaser1000--b8eb7ab01cf6b54ff98965db6febe35a/pics/cms/image/teasertool/de/13242/universal_audio_topsellers.webp?d=ZW1uZzUybENVcU51aldNaFNaWjcyZmQySUZEVE9WTzlqVjI3Rk11dmovZHNxOTc4RVF0d1JJd2FzL3djT0RPWW5rcCtsS05mS3pkYjRjaTBSRHhsR1NTY05tTXRmc1YwM1lHcm1kaVo5RlVWcXdrNGltT3Z5ZGRpeEZLTkxiVEFRazJrVXZNdU92aGU1UUhWd1FzTFlyL09ZdjBhZmphdjVCeUZCRHdHMnpZUFRNbUYveXdZNmt4VGY2WFJDdWNRZW9yVTJlQlBEbWxWdll2c1ZGOHpvUjZ2dE44Vk1iNzJFeVVET3VBdGpwQ0kwWHpaNzZhTXpsU2FySjVlNGhsZWlFQWNlSWxlMVJ5b2dZcmJvOUgvOVdHU3FVVVJOK09uMXdLU3JHazVxUHVCU3FNajJzS1dMUUxkWWUwbEFyb3U%3D" alt="alternative2" />
        <img src="https://thumbs.static-thomann.de/thumb//txteaser1000--fe3a30e4bd6eabb5f450d21011dbf6b9/pics/cms/image/teasertool/de/13242/alesis_electronic_drums.webp?d=ZW1uZzUybENVcU9pbnMvYTN5U3Z3ZWpsRFhJSjNOQ2pEZlMyM3pTSFgzdWpIOWMrMWkxckVPZ1c2d0NXckxaZTdyVGlISkZ0bWwvcmdON3RGV2o0QWRVZnhHZlRpSVp1cDVtb1crNTlOL001SEcyeVNSOEpSYUludlJ6U1JrbGl0VXkrV0FaWkxzcXMyVUFzZDg3aGpucWVxSWtRN1l6Q3lMWE1RelpaVEF0Z1ZSdytFSmU3dW1MMHIvM3JpSXpXM1VZeTJSRXdUNXBUemUvenVrd1VuUU9Nd01LcTVsNElkTDJxVlpwelpWMG9lUXhGNXZQZEMxNGR4MUxrU1BuUmRkWjhkdzc5ZFFMcDVUQjFONnlnRVNKUkk1MWR5ajFLQllHQVJLOWZjdWVQNE9rNlBnbzVseU85Z0ZCNUQ2OVk%3D" alt="alternative3" />
        <img src="https://thumbs.static-thomann.de/thumb//txteaser1000--eeb5ccaa2d9a81c100825310543913c9/pics/cms/image/teasertool/de/13242/aucoustic_guitars_topseller.webp?d=ZW1uZzUybENVcU0rZmUrRFdZb0JvdmQySUZEVE9WTzlxTE9Fd2xtM3V0NXNxOTc4RVF0d1JJd2FzL3djT0RPWW5rcCtsS05mS3pkYjRjaTBSRHhsR1NTY05tTXRmc1YwM1lHcm1kaVo5RlVUQnZUNjdrVlY1TmRpeEZLTkxiVEFRazJrVXZNdU92aGU1UUhWd1FzTFlyL09ZdjBhZmphdktNaktTSU5KTHIxZ1ZSdytFSmU3dXRGdVRtQkZMMmtzaGxRdXJaeXpyZzFkNWV1U2lWU3pxK2t3L2l2OUM0bFVsZHpmOEV0Z2JoS212TTRwc054cUt6K1ZtNDdqenBFK0J1eG1FMm9KVmRCNWs0VXVzNGZVZUpTVnQvRjUrK3diUEp4M0ZDcDg5WStqVHl1ZFRTOFhrLy9zYzlUeVVydmo%3D" alt="alternative4" />
        <img src="https://thumbs.static-thomann.de/thumb//txteaser1000--d0ad3dcabd17e5443b4f07d77d48512c/pics/cms/image/teasertool/de/13242/bluetooth_speaker_topseller.webp?d=ZW1uZzUybENVcU0rZmUrRFdZb0JvdmQySUZEVE9WTzlqVjI3Rk11dmovZHNxOTc4RVF0d1JJd2FzL3djT0RPWW5rcCtsS05mS3pkYjRjaTBSRHhsR1NTY05tTXRmc1YwM1lHcm1kaVo5RlhaQnFTN3lBK0ZVZUNOVldOdjJON3M4QU9DWjhNRGdCOTZucWlKRU8yTXdoS3FDTTZPSW1ZRnlHekY1dk51RHpKRllFMmtNMFZac25Ea3VidURCN0d3VTgzdjg3cE1GSjNaampxNTlSdHZ4M1M5cWxXYWMyVmRLSGtNUmViejNRc2FUTzRURzhaVnVQRUhpeWVxV3QwaDZlVXdkVGVzb0JFaVVTT2RYY285U3VTSFgzUldXenNtaitEcE9qNEtPWmZ3OHcrSmsyc1VJZz09" alt="alternative5" />
      </div>
      <button className="handle right-handle" onClick={onClickHandle}>
        <div className="text">&#129090;</div>
      </button>
    </div>
  );
}

export default Carousel
