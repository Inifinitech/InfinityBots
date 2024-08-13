import BotCollection from "./components/BotCollection";
import ErrorPage from "./components/ErrorPage";
import BotDetail from "./components/BotDetail";
import YourBotArmy from "./components/YourBotArmy";

const routes = ([
    {
        path: "/",
        element: <BotCollection />,
        errorElement: <ErrorPage />
    },
    {
        path: "/details/:id",
        element: <BotDetail />,
        errorElement: <ErrorPage />
    },
])
export default routes