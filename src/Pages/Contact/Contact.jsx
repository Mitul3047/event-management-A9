import Navbar from "../../Component/Navbar/Navbar";


const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex md:flex-row flex-col justify-around  items-center py-20">
                <div>
                    <div>
                        <h3>Email</h3>
                        <p>FestiveFusion@FestiveFusion.com</p>
                    </div>
                    <div>
                        <h3>Phone Number</h3>
                        <p>+880123456789</p>
                    </div>
                    <div>
                        <h3>Location</h3>
                        <p>Bangladesh</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <input className="input bg-red-400" type="text" name="" value="" />
                    <input className="input bg-red-400" type="email" name="" id="" />
                    <textarea className="input bg-red-400" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    );
};

export default Contact;