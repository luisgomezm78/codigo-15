import TextField from "../TextField";
import SelectTri from "../SelectTri";
import Card from "../Card";
import Button from "../Button";

export default function FormDes() {
  return (
    <>
      <form action="">
        <Card className="items-center justify-center bg-gray-50">
          <div className="w-full  text-white p-1 mt-3 mb-2">
            <h1 className="bg-red-700 font-semibold text-xl px-2">
              Registro de Descuentos
            </h1>
            <Card className="border rounded shadow-lg mt-3 mb-3 text-xs ">
              <div className="flex flex-row items-center justify-end gap-3 mb-2 mt-2">
                <label htmlFor="">Código:</label>
                <label
                  htmlFor=""
                  className="bg-red-100 w-[20%] rounded border py-1 text-center font-bold"
                >
                  D-001
                </label>
              </div>

              <div className="flex flex-col items-left mx-1 mb-1">
                <TextField label="Nombre:" name="nombredes" />
                <TextField label="Descripción:" name="descripciondes" />
              </div>
              <div className="grid grid-cols-2 gap-5 mb-1 items-center">
                <div className="flex flex-col px-1">
                  <SelectTri
                    title={"Tipo"}
                    option1={"Fijo"}
                    option2={"Variable"}
                  />
                </div>
                <TextField label="Variable:" name="variablehab" />
              </div>
              <div className="flex flex-col items-left mx-1 mb-3">
                <TextField label="Formula:" name="formulahab" />
              </div>
            </Card>
          </div>
          <div className="w-[50%] flex items-center justify-right gap-4">
            <Button text="Grabar Descuento" type="submit" />
            <Button text="Salir" type="button" />
          </div>
        </Card>
      </form>
    </>
  );
}
