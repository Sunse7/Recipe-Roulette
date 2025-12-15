import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/Navbar";

const RootLayout = () => (
    <>
        <h1>Recipe roulette</h1>
        <Navbar />
        <Outlet />
        <TanStackRouterDevtools />
    </>
)

export const Route = createRootRoute({ component: RootLayout }); 