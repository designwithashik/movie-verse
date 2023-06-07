import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;