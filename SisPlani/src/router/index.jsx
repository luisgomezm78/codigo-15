import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Home, Login, RegistroDes, RegistroHab, RegistroAfp } from "../pages";
import { Layout } from "../components";
import RegistroEmp from "../pages/RegistroEmp";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registroemp" element={<RegistroEmp/>}/>
                    <Route path="/registrohab" element={<RegistroHab/>}/>
                    <Route path="/registrodes" element={<RegistroDes/>}/>
                    <Route path="/registroafp" element={<RegistroAfp/>}/>                   
                   <Route /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}