import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    const navigate=useNavigate()

    return (
        <div className="text-center py-40 text-5xl space-y-5 bg-[#1CABE2]">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={()=>navigate('/')} className="btn font-bold text-xl">Go back</button>
        </div>
    );
};

export default ErrorPage;