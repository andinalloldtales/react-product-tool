import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homepage"
import CreatePage from "./pages/createpage";
import EditPage from "./pages/editpage";


const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
              <Link to="/"><h2 className="text-white text-base font-medium">Product Tool</h2></Link>
               <Link to="/create" className="text-xs bg-white/10 text-white border border-white/20 rounded-md px-3 py-1.5 hover:bg-white/20">+ Add product</Link>
         </div>
    </nav>

      <div className="container mx-auto p-2 h-full">
          <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="/create" element={<CreatePage/>}></Route>
          <Route path="/edit" element={<EditPage/>}></Route>
        </Routes>
      </div>
    
    </div>
  )
}

export default App;