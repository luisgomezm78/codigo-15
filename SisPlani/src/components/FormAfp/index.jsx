import TextField from "../TextField";
import Card from "../Card";
import Button from "../Button";
import { useState } from "react";
import Swal from "sweetalert2";
import { createAfp } from "../../services";

export default function FormAfp() {
  const [textNombre, setTextNombre] = useState("");
  const [textAporte, setTextAporte] = useState("0.00");
  const [textSeguros, setTextSeguros] = useState("0.00");
  const [textComision, setTextComision] = useState("0.00");
  const [textMaxAsegurable, setTextMaxAsegurable] = useState("0.00");

  const handleInputChangeN = (e) => setTextNombre(e.target.value);

  const handleInputChangeA = (e) => setTextAporte(e.target.value);

  const handleInputChangeS = (e) => setTextSeguros(e.target.value);

  const handleInputChangeC = (e) => setTextComision(e.target.value);

  const handleInputChangeM = (e) => setTextMaxAsegurable(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!textNombre) {
      Swal.fire({
        title: "Error",
        text: "Completa el campo de nombre",
        icon: "error",
      });
      return;
    }

    if (
      textAporte == 0.0 ||
      textSeguros == 0.0 ||
      textComision == 0.0 ||
      textMaxAsegurable == 0.0
    ) {
      Swal.fire({
        title: "Error",
        text: "Los campos deben tener un valor mayor que cero",
        icon: "error",
      });
      return;
    }

    const response = await createAfp({
      nombre: textNombre,
      aporte: textAporte,
      seguros: textSeguros,
      comision: textComision,
      maxasegurable: textMaxAsegurable,
    });
    setTextNombre("");
    setTextAporte("0.00");
    setTextSeguros("0.00");
    setTextComision("0.00");
    setTextMaxAsegurable("0.00");

    Swal.fire({
      title: "Success",
      text: "Se grabo correctamente",
      icon: "success",
    });

  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Card className="items-center justify-center bg-gray-50">
          <div className="w-full  text-white p-1 mt-3 mb-2">
            <h1 className="bg-red-700 font-semibold text-xl px-2">
              Registro de AFP
            </h1>
            <Card className="border rounded shadow-lg mt-3 mb-3 text-xs ">
              <div className="flex flex-row items-center justify-end gap-3 mb-2 mt-2">
                <label htmlFor="">Código:</label>
                <label
                  htmlFor=""
                  className="bg-red-100 w-[20%] rounded border py-1 text-center font-bold"
                >
                  AFP-001
                </label>
              </div>

              <div className="flex flex-col items-left mx-1 mb-1">
                <TextField
                  label="Nombre:"
                  name="nombreafp"
                  value={textNombre}
                  onChange={handleInputChangeN}
                />
              </div>

              <div className="grid grid-cols-2 gap-5 mx-1  mb-2 items-center">
                <TextField
                  label="Porcentaje de Aporte:"
                  name="aporteafp"
                  value={textAporte}
                  onChange={handleInputChangeA}
                />

                <TextField
                  label="Prima de Seguros:"
                  name="segurosafp"
                  value={textSeguros}
                  onChange={handleInputChangeS}
                />

                <TextField
                  label="Comisión Variable:"
                  name="comisionafp"
                  value={textComision}
                  onChange={handleInputChangeC}
                />

                <TextField
                  label="Remuneración Max Asegurable:"
                  name="maxasegurableafp"
                  value={textMaxAsegurable}
                  onChange={handleInputChangeM}
                />
              </div>
            </Card>
          </div>
          <div className="w-[50%] flex items-center justify-right gap-4">
            <Button text="Grabar AFP" type="submit" />
            <Button text="Salir" type="button" />
          </div>
        </Card>
      </form>
    </>
  );
}
