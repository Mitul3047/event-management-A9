import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";


const MainLayout = () => {
    return (
       <div>
         <div className="max-w-7xl mx-auto">
            
            <Outlet></Outlet>
            
        </div>
        <Footer></Footer>
       </div>
    );
};

export default MainLayout;