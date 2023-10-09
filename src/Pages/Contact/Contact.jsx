import Navbar from "../../Component/Navbar/Navbar";
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';

const Contact = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="">
                <img className="md:h-[500px] w-full" src="https://i.ibb.co/R2ZTdjY/pavan-trikutam-71-Cj-SSB83-Wo-unsplash.jpg" alt="" />
            </div>
            <h2 className="text-5xl text-center py-10 text-purple-500">Contact Us</h2>
            <div className="flex md:flex-row flex-col justify-around  items-center py-20">
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h3 className=" font-medium text-3xl text-purple-500">Email</h3>
                        <div className="flex justify-start gap-4 items-center">
                            <AiTwotoneMail className="text-purple-500"></AiTwotoneMail>
                        <p className="text-base ">FestiveFusion@FestiveFusion.com</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className=" font-medium text-3xl text-purple-500">Phone Number</h3>
                        <div className="flex justify-start gap-4 items-center">
                            <BsFillTelephoneInboundFill  className="text-purple-500"></BsFillTelephoneInboundFill>
                        <p className="text-base ">+880123456789</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className=" font-medium text-3xl text-purple-500">Location</h3>
                        <div className="flex justify-start gap-4 items-center">
                            <FaLocationCrosshairs className="text-purple-500"></FaLocationCrosshairs>
                        <p className="text-base ">Chasara,Narayanganj,Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-10">
                    <input className=" w-full p-3 border-b bg-transparent border-purple-500" placeholder="Name" type="text" name="" />
                    <input className="w-full p-3 border-b bg-transparent border-purple-500" type="email" placeholder="Email" />
                    <textarea placeholder="FeedBack " className="w-full p-3 bg-transparent border border-purple-500" name="" id="" cols="30" rows="3"></textarea>
                </div>
            </div>
            <div style={{ width: '100%' }}>
                <iframe
                    title="Google Map"
                    width="100%"
                    height="300"
                   
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Chasra,narayanganj,Bangladesh+(FestiveFusion)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                    <a href="https://www.maps.ie/population/">Population Estimator map</a>
                </iframe>
            </div>
        </div>
    );
};


export default Contact;