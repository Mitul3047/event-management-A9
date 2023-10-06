import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import UserWelcome from "../../Component/UserWelcone/UserWelcome";

const Login = () => {


    return (
        <div>
            <Navbar />
            <div className="max-h-screen- py-4">
                <div className="container mx-auto ">
                    <div className=" shadow-xl flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto  overflow-hidden">

                        <UserWelcome></UserWelcome>


                        <div className="w-full lg:w-1/2 py-[104px] px-12 " style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}>
                            <h2 className="text-3xl mb-4 text-center">Login</h2>
                            <p className="mb-4 text-center">
                                Welcome back! Login to your account for quick access.
                            </p>
                            <form>

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

                                </div>
                                <div className="mt-5">
                                    <button className="w-full bg-purple-500 py-3 text-center rounded text-white">Login Now</button>
                                    <p className="text-center">New To The Website? <Link to={'/register'}><span className="btn-link font-medium text-purple-500">Register</span></Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
