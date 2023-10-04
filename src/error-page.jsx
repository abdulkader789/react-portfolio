import { useRouteError } from "react-router-dom";
import './error-page.css'
function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (

        <div className="page-container">
            <h1>
                <span className="pendulum">4</span>04 Page Not Found
            </h1>
        </div>

    );
}
export default ErrorPage;