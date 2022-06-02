import { Route, Routes } from "react-router-dom";
import Aboutus from "./aboutus";
import Contactus from "./contactus";
import Gallery from "./gallery";
const Mid=()=>{
    return(
       <Routes>
           <Route path="/gallery" element={<Gallery/>}></Route>
           <Route path="/aboutus" element={<Aboutus/>}></Route>
           <Route path="/contactus" element={<Contactus/>}></Route>



       </Routes>
    )
};

export default Mid;