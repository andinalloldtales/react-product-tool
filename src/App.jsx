import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage"
import CreatePage from "./pages/createpage";
import EditPage from "./pages/editpage";

const App = () => {
  return (
    <div>
     
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="/create" element={<CreatePage/>}></Route>
          <Route path="/edit" element={<EditPage/>}></Route>
        </Routes>
    </div>
  )
}

export default App;