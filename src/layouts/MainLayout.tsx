import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
