import { Route, Routes } from "react-router";
import Login from "./Login";
import Homepage from "./Todo";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/todo' element={<Homepage />} />
    </Routes>
  );
};

export default App;
