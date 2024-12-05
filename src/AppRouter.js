import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";  // Appコンポーネント
import Component43 from "./ui-components/Component43";
import Component43Page from "./Component43Page";  // Component43Pageコンポーネント

function AppRouter() {
return (
    <Router>
    <Routes>
        {/* ホームページに Component43 を表示 */}
        <Route path="/" element={<App />} />

        {/* クリック後の遷移先 */}
        <Route path="/Component43Page" element={<Component43Page />} />
    </Routes>
    </Router>
);
}

export default AppRouter;
