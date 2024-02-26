
import { Route, Routes } from 'react-router-dom';
import HomeComponent from "./HomeComponent"
import QuizComponent from './QuizComponent';
import ResultComponent from './ResultComponent';

function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomeComponent/>}/>
            <Route path='/quiz' element={<QuizComponent/>}/>
            <Route path='/result' element={<ResultComponent/>}/>
        </Routes>
    );
}

export default AllRoutes;