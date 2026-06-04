import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homepage"
import CreatePage from "./pages/createpage";
import EditPage from "./pages/editpage";


const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
          <div className="container mx-auto p-2"></div>
            <Link to="/"><h2 className="text-white text-2x1 font-bold">Product Tool</h2></Link>
      </nav>
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="/create" element={<CreatePage/>}></Route>
          <Route path="/edit" element={<EditPage/>}></Route>
        </Routes>
    </div>
  )
}

export default App;