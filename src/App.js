import Quiz from "./components/Quiz";
import Start from "./components/Start";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
