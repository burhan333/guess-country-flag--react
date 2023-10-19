import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loader from "../components/Loader";

const Welcome = lazy(() => import('../pages/Welcome'))
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Signup = lazy(() => import('../pages/Signup'))
const ForgetPassword = lazy(() => import('../pages/ForgetPassword'))
const ResetPassword = lazy(() => import('../pages/ResetPassword'))
const Profile = lazy(() => import('../pages/Profile'))
const Leaderboard = lazy(() => import('../pages/Leaderboard'))

// const Welcome = lazy(() => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(import('../pages/Welcome')), 800);
//     });
// });

export const MyRoutes = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    return(
        <BrowserRouter>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/home" element={<Home />} />
                    {!isLoggedIn && <Route path="/login" element={<Login />} />}
                    {!isLoggedIn && <Route path="/signup" element={<Signup />} />}
                    {!isLoggedIn && <Route path="/forget" element={<ForgetPassword />} />}
                    {!isLoggedIn && <Route path="/reset" element={<ResetPassword />} />}
                    {isLoggedIn && <Route path="/profile" element={<Profile />} />}
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="*" element={isLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/" replace />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}