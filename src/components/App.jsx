import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from './Protfolio';
import EcommerceDetails from './EcommerceDetails';
import RestaurantDetails from './Restaurant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ecommerce-details" element={<EcommerceDetails />} />
        <Route path="/restaurant-details" element={<RestaurantDetails />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;