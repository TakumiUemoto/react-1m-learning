import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import App from "../../App";
import Counter from "../../features/Counter";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;