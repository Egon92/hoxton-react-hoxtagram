import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Img from "./components/Logo/Logo";
import Section from "./components/Section/Section";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/images")
      .then((resp) => resp.json())
      .then((imagesFromServer) => setImages(imagesFromServer));
  }, []);

  return (
    <div className="App">
      <Logo />
      <Section images={images} name={"Egon"} drink={"vodka"} />
    </div>
  );
}

export default App;
