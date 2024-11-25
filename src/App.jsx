import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './pages/Display';
import Tasks from './components/Tasks';
const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/display" element={<Display />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
