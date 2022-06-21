import "./App.css";
// import Trainers from "./components/apis/Trainers";
// import Converter from "./components/state/Converter";
// import Counter from "./components/state/Counter";
// import FilterableList from "./components/state/FilterableList";
// import FilterableListFull from "./components/state/FilterableListFull";
// import Form from "./form";
import Heading from "./Heading";
// import Trainer from "./Trainer";
// import FilmReq from "./components/apis/FilmReq";

//routing imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/routing/Home";
import Nav from "./components/routing/Nav";
import About from "./components/routing/About";
import NotFound from "./components/routing/NotFound";
import Shop from "./components/routing/Shop";

function App() {
  return (
    <div className="App">
      {/* <Heading /> */}

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <FilmReq /> */}
      {/* <Trainers /> */}
      {/* <FilterableListFull/> */}
      {/* <Counter/>
      <br/>
      <Converter/>
      <Trainer name="Jordan H" age={28} specialism="Software"/>
      <Trainer name="Piers B" age={24} specialism="Weaponisation"/>
      <Trainer name="Ed" age={26} specialism="SDET"/>
      <Trainer/> */}
    </div>
  );
}

export default App;
