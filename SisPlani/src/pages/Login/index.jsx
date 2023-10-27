import { Frame, Card, TextField } from "../../components";
import logo from "../../assets/logo2.jpeg";
import ImportLogin from "../../assets/ImageLogin.jpg";

export default function Login () {
  return (
      <>

        <Frame wmiddle={"w-full xl:w-2/5"}>
          <div className="w-full lg:w-1/2 flex flex-col text-black items-center justify-center bg-[url('/planillas.jpg')] bg-no-repeat bg-center bg-cover">
            <h1 className="text-4xl font-bold text-red-700">Welcome</h1>
          </div>

          <div className="w-full lg:w-1/2 px-16 py-12">
            <img
              className="w-1/2 h-auto mt-6 rounded-l-lg mb-4"
              src="/sisplani.jpg"
              alt=""
            />
            <h2 className="text-3xl mb-4">Bienvenidos al Sistema</h2>
            <p className="mb-4">Por favor Ingrese sus Datos</p>
            <form action="">
              
              <TextField label="Usuario" name="usuario"/>
              <TextField label="Contraseña" name="contrasena"/>
              
              <div className="mt-1 flex items-center">
              <TextField  type="checkbox" name="conectado" placeholder="Mantenerse Conectado" className={"focus:ring-red-700"}/>
              <span className="mt-3 ml-2">Mantenerse Conectado</span>
              </div>

              <div className="mt-7">
                <button className="w-full bg-red-700 py-3 text-center text-white">
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </Frame>
      </>
  );

}
