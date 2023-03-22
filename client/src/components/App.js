import Header from "./Header";
import HomePage from "./HomePage";
import { Route,Routes } from "react-router-dom";
import ReviewPage from "./ReviewPage";

function App() {
  return (
    <div className="app">
      <Header />
      
      <Routes>
      <Route path="/review-details/:id" element={<ReviewPage />} />
      <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
