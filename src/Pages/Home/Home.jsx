import Banner from "../../Component/Banner/Banner";
import Gallary from "../../Component/Gallary/Gallary";
import Navbar from "../../Component/Navbar/Navbar";
import Clints from "../../Component/clints/clints";
import EventCards from "./HomeCard/EventCards";




const Home = () => {
    return (
        <div>
            <div  className=" inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/2WPKQPY/sirio-hm3ef-UMo-Reg-unsplash.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <Navbar></Navbar>
           <Banner></Banner>
            </div>
           
           <EventCards></EventCards>
           <Clints></Clints>
           <Gallary></Gallary>
           
        </div>
    );
};

export default Home;