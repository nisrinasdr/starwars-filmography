import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FilmDetail from "./Component/Film/FilmDetail";
import Films from "./Component/Film/Films";
import Header from './Component/Header/Header';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Films/>} />
          <Route path='/:filmID' element={<FilmDetail/>} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
