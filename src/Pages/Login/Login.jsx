import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import UserWelcome from "../../Component/UserWelcone/UserWelcome";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { logIn } = useContext(AuthContext);

    const handlelogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        logIn(email,password)
        .then(r=>console.log(r.user))
        .catch(e=>console.error(e))
    }

    return (
        <div>
            <Navbar />
            <div className="max-h-screen- py-4">
                <div className="container mx-auto ">
                    <div className=" shadow-xl flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto  overflow-hidden">

                        <UserWelcome></UserWelcome>


                        <div className="w-full lg:w-1/2 py-10 px-12 " style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}>
                            <h2 className="text-3xl mb-4 text-center">Login</h2>
                            <p className="mb-4 text-center">
                                Welcome back! Login to your account for quick access.
                            </p>
                            <form onSubmit={handlelogin}>

                                <div className="mt-5">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Email"
                                        className="input rounded input-sm w-full" />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        placeholder="Password"
                                        className="input rounded input-sm w-full" />
                                </div>

                                <div className="mt-5">

                                </div>
                                <div className="mt-5">
                                    <button className="w-full bg-purple-500 py-3 text-center rounded text-white">Login Now</button>
                                    <p className="text-center mt-2">New To The Website? <Link to={'/register'}><span className="btn-link font-medium text-purple-500">Register</span></Link></p>
                                </div>
                            </form>
                            <div className="divider">or</div>
                            <div className="space-y-3">
                                <h4 className="w-full bg-purple-500 py-3 text-center rounded text-white">Login In With oogle</h4>
                                <h4 className="w-full bg-purple-500 py-3 text-center rounded text-white">Login In With acebook</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
