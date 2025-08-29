import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Headers from "../Headers/Headers";


export default function Roots() {
  return (
         <div className="max-w-7xl mx-auto">
        <Headers></Headers>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
  )
}
