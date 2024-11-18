import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

    const { signInUser, signUpGoogle } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(true)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        signInUser(email, password)
            .then((result) => {
                console.log(result.user)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const handleGoogle = () => {
        signUpGoogle()
            .then((result) => {
                console.log(result.user)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">Login now!</h1>
            </div>
            <div className="card w-full max-w-md shrink-0 border-2">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'password' : 'text'} name="password" placeholder="Password" className="input input-bordered" required />
                        <button onClick={() => setShowPassword(!showPassword)} className="absolute top-14 right-3">{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#F59E0B] text-white font-bold">Login</button>
                    </div>
                    <p>Don't have an account? <Link to='/register' className="text-[#F59E0B] border-b border-orange-300">Register</Link></p>
                </form>
            </div>
            <div>
                <div className="flex items-center justify-center space-x-2">
                    <hr className="border-t-2 border-gray-400 flex-grow" />
                    <span className="text-black font-medium">Or</span>
                    <hr className="border-t-2 border-gray-400 flex-grow" />
                </div>
                <button onClick={handleGoogle} className="btn border-2 border-gray-400 rounded-full px-10"><FaGoogle></FaGoogle>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;