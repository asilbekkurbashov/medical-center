import { Route, Routes } from "react-router-dom";
import RootLayout from "./router/layout/RootLayout";
import Doctors from "../components/Doctors";
import MoreInfo from "../components/MoreInfo";

const App = () => {
  return (
    <main className="min-h-screen">
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Doctors/>}/>
          <Route path="/:id" element={<MoreInfo/>}/>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
