import TextField from "../TextField";
import SelectTri from "../SelectTri";
import SelectFour from "../SelectFour";
import Card from "../Card";
import Button from "../Button";


export default function FormEmp () {
    return (
        <>
         <form action="">
          <Card className="items-center justify-center bg-gray-50">
            <div className="w-full  text-white p-1 mt-3 mb-1">
              <h1 className="bg-red-700 font-semibold text-xl px-2">
                Registro de Trabajadores
              </h1>

              <Card className="border rounded shadow-lg mt-3 mb-3 text-xs">
                <h2 className="mt-2 text-sm text-red-700 font-semibold px-1 underline">
                  Datos Personales
                </h2>

                <div className="flex flex-row items-center justify-left">
                  <div className="w-[80%] pr-2">
                    <div className="grid grid-cols-3 gap-5 items-center justify-center mb-2">
                      <TextField label="DNI" name="dni" />
                      <TextField label="Apellido Paterno" name="apepaterno" />
                      <TextField label="Apellido Materno" name="apermaterno" />
                    </div>

                    <TextField label="Nombres" name="nombres" />
                  </div>

                  <div className="w-[20%] h-full p-1">
                    <TextField
                      label="Foto"
                      name="foto"
                      className={"h-[80px]"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mb-3 items-center justify-center">
                  <SelectTri
                    title={"Sexo"}
                    option1={"Masculino"}
                    option2={"Femenino"}
                    option3={"Otros"}
                  />
                  <TextField label="Dirección" name="direccion" />
                </div>
              </Card>

              <Card className="border rounded shadow-lg flex flex-col mt-3 mb-3 text-xs">
                <h2 className="mt-2 mb-3 text-sm text-red-700 font-semibold px-1 underline">
                  Datos Laborales
                </h2>

                <div className="flex flex-col items-left mb-3">
                  <SelectTri
                    title={"Regimen Laboral"}
                    option1={"Decreto Legislativo N° 276"}
                    option2={"Decreto Legislativo N° 728"}
                    option3={"Otros"}
                  />
                </div>

                <div className="grid grid-cols-2 gap-5 items-center mb-3">
                  <SelectFour
                    title={"Categoria Ocupacional"}
                    option1={"Ejecutivo"}
                    option2={"Profesional"}
                    option3={"Técnico"}
                    option4={"Auxiliar"}
                  />
                  <TextField label="Cargo" name="cargo" />
                </div>

                <div className="grid grid-cols-3 gap-5 items-center mb-3">
                  <SelectTri
                    title={"Regimen Pensionario"}
                    option1={"DL 19990 - SNP"}
                    option2={"DL 25897 - SPP"}
                    option3={"Otros"}
                  />
                  <SelectFour
                    title={"Tipo de AFP"}
                    option1={"Integra"}
                    option2={"Profuturo"}
                    option3={"Habitat"}
                    option4={"Prima"}
                  />
                  <TextField label="Remuneración Básica" name="remuneracion" />
                </div>
              </Card>
            </div>
            <div className="w-[50%] flex items-center justify-right gap-4">
              <Button text="Grabar Empleado" type="submit" />
              <Button text="Salir" type="button" />
            </div>
          </Card>
        </form>
        </>
    );
}