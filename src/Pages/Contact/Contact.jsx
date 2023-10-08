import Navbar from "../../Component/Navbar/Navbar";


const Contact = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="">
                <img className="md:h-[450px] w-full" src="https://i.ibb.co/7Yv7N30/harli-marten-M9jr-KDXOQo-U-unsplash.jpg" alt="" />
            </div>
            <h2 className="text-5xl text-center py-10">Contact Us</h2>
            <div className="flex md:flex-row flex-col justify-around  items-center py-20">
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h3 className=" font-medium text-3xl">Email</h3>
                        <p className="text-base ">FestiveFusion@FestiveFusion.com</p>
                    </div>
                    <div className="space-y-3">
                        <h3 className=" font-medium text-3xl">Phone Number</h3>
                        <p className="text-base ">+880123456789</p>
                    </div>
                    <div className="space-y-3">
                        <h3 className=" font-medium text-3xl">Location</h3>
                        <p className="text-base ">Chasara,Narayanganj,Bangladesh</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-10">
                    <input className=" py-3 border-b bg-transparent border-purple-500" placeholder="Name" type="text" name="" />
                    <input className="py-3 border-b bg-transparent border-purple-500" type="email" placeholder="Email" />
                    <textarea placeholder="FeedBack " className="py-3 bg-transparent border border-purple-500" name="" id="" cols="30" rows="3"></textarea>
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