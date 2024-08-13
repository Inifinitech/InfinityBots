import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError()
    return(
        <>
        <h1>Oops! Something went wrong</h1>
        </>
    )
}

export default ErrorPage