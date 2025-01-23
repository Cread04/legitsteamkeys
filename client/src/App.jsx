import './App.css'
import Home from "./Home.jsx";

function App() {
  return <BrowserRouter>
    <Routes >
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
}