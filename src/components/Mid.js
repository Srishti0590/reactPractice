import { Route, Routes } from "react-router-dom";
import Aboutus from "./aboutus";
import Banner from "./banner";
import Contactus from "./contactus";
import Gallery from "./gallery";
import Register from "./register";
const Mid=()=>{
    return(
       <Routes>
           <Route path="/" element={<Banner/>}></Route>
           <Route path="/gallery" element={<Gallery/>}></Route>
           <Route path="/aboutus" element={<Aboutus/>}></Route>
           <Route path="/contactus" element={<Contactus/>}></Route>
           <Route path="/register" element={<Register/>}></Route>



       </Routes>
    )
};

export default Mid;