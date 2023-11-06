import { useState } from "react";

export default function App() {
    const images = [
        {src: "images/pic1.jpg", alt: "Closeup of a human eye"},
        {src: "images/pic2.jpg", alt: "Rock that looks like a wave"},
        {src: "images/pic3.jpg", alt: "Purple and white pansies"},
        {src: "images/pic4.jpg", alt: "Section of wall from a pharoah's tomb"},
        {src: "images/pic5.jpg", alt: "Large moth on a leaf"}
      ];

    const [displayed_src, setSrc] = useState("images/pic1.jpg")
    const [displayed_alt, setAlt] = useState("Closeup of a human eye")

    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src={displayed_src}
            alt={displayed_alt}
          />
          <div className="overlay"></div>
          <button className="dark">Darken</button>
        </div>
        <div className="thumb-bar" onClick={() => {setSrc(images[1].src), setAlt(images[1].alt)}}>
            {images.map((currentValue) => {
                return (
                    <img key={currentValue} src={currentValue.src} currentValue={currentValue.alt} />
                );
            })}
        </div>
      </>
    );
  }