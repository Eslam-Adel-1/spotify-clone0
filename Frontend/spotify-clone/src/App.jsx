// React Router Imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts Imports
import RegisterPage from "./pages/AuthPages/register_page/RegisterPage.jsx";
import LoginPage from "./pages/AuthPages/login_page/LoginPage.jsx";
import Auth_Layout from "./pages/AuthPages/Auth_Layout.jsx";
import ForgetPassword from "./pages/AuthPages/forget_password_page/ForgetPassword.jsx";

// Pages Imports
import MainPage from "./pages/MainPages/main_page/MainPage.jsx";
import PagesLayout from "./pages/MainPages/Pages_Layout.jsx";
import AlbumPage from "./pages/MainPages/album_page/AlbumPage.jsx";

// ProtectRoutes Imports
import ProtectedRoutes from "./Ui/Components/ProtectedRoutes.jsx";
import NotFoundPage from "./pages/404 Page/NotFoundPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth_Layout />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="ForgotPassword" element={<ForgetPassword />} />
        </Route>
        {/* //------------------------------ */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<PagesLayout />}>
            <Route path="home" element={<MainPage />} />
            <Route path="/album/:id" element={<AlbumPage />} />
          </Route>
        </Route>
        {/* //------------------------------ */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
