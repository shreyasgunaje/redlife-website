import { Route, Routes, Navigate } from "react-router-dom"
import Main from "./layouts/Main"
import Home from "./pages/home"

const AppRoutes = (props) => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Main/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path='' element={<Navigate to ='/home'/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default AppRoutes;