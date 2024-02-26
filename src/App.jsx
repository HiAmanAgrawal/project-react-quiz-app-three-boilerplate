import Home from "./Pages/Home.jsx"
import Quiz from "./Pages/Quiz.jsx"
import Result from "./Pages/Result.jsx"
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/quiz'} element={<Quiz />} />
        <Route path={'/result'} element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App