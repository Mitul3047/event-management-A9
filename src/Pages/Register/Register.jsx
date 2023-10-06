import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import UserWelcome from "../../Component/UserWelcone/UserWelcome";

const Register = () => {
    return ( 
        <div>
            <Navbar />
            <div className="max-h-screen- py-4">
                <div className="container mx-auto ">
                    <div className=" shadow-xl flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto  overflow-hidden">
                        <UserWelcome></UserWelcome>
                        <div className="w-full lg:w-1/2 py-16 px-12 " style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}>
                            <h2 className="text-3xl mb-4">Register</h2>
                            <p className="mb-4">
                                Create your account. It’s free and only takes a minute
                            </p>
                            <form>
                                <div className="grid grid-cols-2 gap-5">
                                    <input 
                                    type="text" 
                                    placeholder="Firstname" 
                                    className="input rounded input-sm" />

                                    <input type="text" 
                                    placeholder="Surname" 
                                    className="input rounded input-sm" />
                                </div>
                                <div className="mt-5">
                                    <input 
                                    type="text" 
                                    placeholder="Email" 
                                    className="input rounded input-sm w-full" />
                                </div>
                                <div className="mt-5">
                                    <input 
                                    type="password" 
                                    placeholder="Password" 
                                    className="input rounded input-sm w-full" />
                                </div>
                                <div className="mt-5">
                                    <input 
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    className="input rounded input-sm w-full" />
                                </div>
                                <div className="mt-5">
                                    <input 
                                    type="checkbox" 
                                    className="border border-gray-400 mr-3" />
                                    <span>
                                        I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <button className="w-full bg-purple-500 py-3 text-center rounded text-white">Register Now</button>
                                    <p className="text-center">Already Have an Account? <Link to="/login">
  <span className="btn-link font-medium text-purple-500">Login</span>
</Link>
</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
