// https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/movie" element={<Detail></Detail>}></Route>
    <Route path="/" element={<Home></Home>}></Route>
  </Routes>
  </BrowserRouter>
}

export default App;
