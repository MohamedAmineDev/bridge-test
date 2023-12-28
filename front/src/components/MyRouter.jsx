import App from '../App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
function MyRouter() {
    return (
        <>
            <Router>
                <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                    {/* Other routes */}
                </Routes>
            </Router>

        </>
    );
}
export default MyRouter;