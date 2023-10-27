import { Outlet } from "react-router-dom";
import {
  UserIcon,
  PlusIcon,
  MinusIcon,
  HandThumbUpIcon,
  BookOpenIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import logoBlanco from "../../assets/logo3.png";

export default function Layout({ children }) {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-red-700 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-end">
            <div className="flex items-center">
              <div className="flex items-center ml-3 gap-5">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
                <div className="text-white">
                  <p className="text-sm dark:text-white" role="none">
                    Iván Perez
                  </p>
                  <p
                    className="text-sm font-medium truncate dark:text-gray-300"
                    role="none"
                  >
                    ADMINISTRADOR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id=""
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-red-700 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className=" flex justify-center my-10">
          <img src={logoBlanco} alt="" className="w-[200px]" />
        </div>
        <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-900 hover:text-black dark:hover:bg-gray-700 group"
              >
                <div className="flex items-cente">
                  <UserIcon className="w-5 text-white" />
                  <span className="ml-3 text-white text-xl">Empleados</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group"
              >
                <PlusIcon className="w-5 text-white" />
                <span className="ml-3 text-white text-xl">Haberes</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group"
              >
                <MinusIcon className="w-5 text-white" />
                <span className="ml-3 text-white text-xl">Descuentos</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group"
              >
                <HandThumbUpIcon className="w-5 text-white" />
                <span className="ml-3 text-white text-xl">Aportaciones</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group"
              >
                <BookOpenIcon className="w-5 text-white" />
                <span className="ml-3 text-white text-xl">Planillas</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group"
              >
                <NewspaperIcon className="w-5 text-white" />
                <span className="ml-3 text-white text-xl">Reportes</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div>
        <Outlet />
      </div>
    </>
  );
}
