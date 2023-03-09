import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import PageOne from "./pages/PageOne";



function App() {

    return (
    <>
    <Routes>
    <Route path='/' element={<Layout/>}>
        <Route index path="/" element={<PageOne/>}/>
    </Route>
    </Routes>

    </>
    );
};

export default App;
