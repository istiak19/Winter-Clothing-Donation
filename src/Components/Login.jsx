import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Login = () => {
    const emailRef = useRef()
    const location = useLocation()
    const navigate = useNavigate()
    const { signInUser, signUpGoogle, passwordReset } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        setErrorMsg('')

        if (password.length < 6) {
            setErrorMsg('Password must be at least 6 characters long.')
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setErrorMsg('Password must contain at least one uppercase letter.')
            return;
        }

        if (!/[a-z]/.test(password)) {
            setErrorMsg('Password must contain at least one lowercase letter.')
            return;
        }

        signInUser(email, password)
            .then((result) => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')

            })
            .catch((error) => {
                console.log(error.message)
                setErrorMsg(error.message)
            })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value
        if (!email) {
            toast.warning('Please provide a valid email')
        }
        else {
            passwordReset(email)
                .then(() => {
                    toast.info('Please reset email sent. please check your email')
                })
                .catch((error) => {
                    setErrorMsg(error.message)
                })
        }
    }

    const handleGoogle = () => {
        signUpGoogle()
            .then((result) => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero-content flex-col w-11/12 mx-auto">
            <Helmet>
                <title>Login - Winter Clothes Donation</title>
            </Helmet>
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">Login now!</h1>
            </div>
            <div className="card w-full max-w-md shrink-0 border-2">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" ref={emailRef} className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'password' : 'text'} name="password" placeholder="Password" className="input input-bordered" required />
                        <button onClick={() => setShowPassword(!showPassword)} className="absolute top-14 right-3">{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                        <label onClick={handleForgetPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#F59E0B] text-white font-bold">Login</button>
                    </div>
                    <p>Don't have an account? <Link to='/register' className="text-[#F59E0B] border-b border-orange-300">Register</Link></p>
                    {
                        errorMsg && <p>{errorMsg}</p>
                    }
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