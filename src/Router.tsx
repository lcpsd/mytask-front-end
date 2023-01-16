import { Routes, Route } from "react-router-dom";
import { Protected } from "./components/Protected";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={
                <Protected>
                    <Dashboard />
                </Protected>
            } />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}