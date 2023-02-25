
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from './container/Layout/Layout';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/app/' element={<Layout />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
