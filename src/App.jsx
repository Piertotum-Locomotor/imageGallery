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

    const button = document.getElementsByTagName("button");
    const overlay = document.querySelector("div.overlay");

    function clickHadle() {
        if (button.getAttribute("className") === "dark") {
            button.setAttribute("className", "light")
            button.textContent = "lighten"
            overlay.style.backgroundcolor(rgba(0, 0, 0, 0.5))
        } else {
            alert("aa")
            button.setAttribute("className", "dark")
            button.textContent = "darken"
            overlay.style.backgroundcolor(rgba(0, 0, 0, 0))
        }
    }

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
          <button className="dark" onClick={clickHadle}>Darken</button>
        </div>
        <div className="thumb-bar">
            {images.map((currentValue) => {
                return (
                    <img key={currentValue} src={currentValue.src} alt={currentValue.alt} onClick={() => {setSrc(currentValue.src), setAlt(currentValue.alt)}} />
                );
            })}
        </div>
      </>
    );
  }