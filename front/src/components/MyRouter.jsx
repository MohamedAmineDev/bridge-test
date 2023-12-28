import App from '../App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import AdminPanel from './AdminPanel';
function MyRouter() {
    return (
        <>
            <Router>
                <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin-panel" element={<AdminPanel />} />
                    {/* Other routes */}
                </Routes>
            </Router>

        </>
    );
}
export default MyRouter;