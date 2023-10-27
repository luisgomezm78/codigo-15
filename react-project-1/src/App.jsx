import { useState } from "react";
import { Counter, Footer, Header } from "./componets";

export default function App() {
  const [name, setName] = useState("Luis");

const changeName =() => {
  const newName = prompt ("Ingresa un nuevo nombre");
  setName(newName);
}

  return (
    <>
      <Header />
      <h1 classname="bg-custom-color">Mi primer componente {name}</h1>
      <button onClick={changeName}>Cambiar Nombre</button>
      <hr />
      <Counter/>
      <Footer />
    </>
  );
}

//export default App;
