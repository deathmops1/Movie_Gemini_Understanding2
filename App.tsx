import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchForm } from './components/SearchForm'
import { MovieDetail } from './components/MovieDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchForm />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;