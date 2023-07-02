import { Route, Routes, Navigate } from "react-router-dom"
import Main from "./layouts/Main"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Join from "./pages/join"
import Organize_camp from "./pages/organize_camp"
import Find_donor from "./pages/find_donor"

const AppRoutes = (props) => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Main/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="about-us" element={<About/>}/>
                    <Route path="contact-us" element={<Contact/>}/>
                    <Route path="find-a-donor" element={<Find_donor/>}/>
                    <Route path="organize-a-camp" element={<Organize_camp/>}/>
                    <Route path="join-us" element={<Join/>}/>
                    <Route path='' element={<Navigate to ='/home'/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default AppRoutes;