import { BrowserRouter, Routes, Route } from "react-router-dom";

// auth pages import
import Register from "./pages/auth-pages/register";
import SignIn from "./pages/auth-pages/sign-in";
import ResetPassword from "./pages/auth-pages/reset-password";
import ConfirmEmail from "./pages/auth-pages/confirm-email";
import Confirmation from "./pages/auth-pages/confirmation";

//dashboard pages import
import Dashboard from "./pages/dashboard-pages/dashboard";
import AddCollection from "./pages/dashboard-pages/add-collection";
import Guide from "./pages/dashboard-pages/guide";
import Dig from "./pages/dashboard-pages/dig";

//layouts import
import DashboardLayout from "./layout/dashboard-layout";
import AppLayout from "./layout/app-layout";

//app pages import
import MenuItem from "./pages/app-pages/app";
import Points from "./pages/app-pages/points";
import Features from "./pages/app-pages/features";
import Relations from "./pages/app-pages/relations";
import NotFound from "./pages/not-found";
import { useEffect } from "react";
import { useAppContext } from "./context/app-context";
import Options from "./pages/app-pages/options";

const App = () => {
    const { setCurrentSection, setTrench } = useAppContext();
    useEffect(() => {
        const storedSection =
            JSON.parse(localStorage.getItem("currentSection")) || {};
        setCurrentSection(storedSection);
        setTrench(storedSection.name);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<NotFound />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/forgot" element={<ResetPassword />} />
                <Route path="/confirm" element={<ConfirmEmail />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/" element={<DashboardLayout />}>
                    <Route path="/" index element={<Dashboard />} />
                    <Route path="/add-collection" element={<AddCollection />} />
                    <Route path="/guide" element={<Guide />} />
                    <Route path="/dig" element={<Dig />} />
                </Route>
                <Route path="/" element={<AppLayout />}>
                    <Route path="/app" element={<MenuItem />} />
                    <Route path="/options" element={<Options />} />
                    <Route path="/points" element={<Points />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/relations" element={<Relations />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
