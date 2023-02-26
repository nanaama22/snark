
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from './container/Layout/Layout';
import  Messages  from './pages/Messages/Messages';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/app/' element={<Layout />}/>
          <Route path='/messages' element={<Messages />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
