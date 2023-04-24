import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SucursalesList from './Components/VerSucursales';
import ProductosList from './Components/VerProductos';
import NuevoProducto from './Components/NuevoProducto';
import NuevaSucursal from './Components/NuevaSucu';
import EliminarProducto from './Components/EliminarProd';
import EliminarSucursal from './Components/EliminarSucu';
import Aumentar from './Components/Aumentar';

function App() {
  return (
    <Router>
    
    <Routes>
     <Route  path="/" element={<SucursalesList/>} /> 
     <Route  path="/verProductos" element={<ProductosList/>} />
     <Route  path="/nuevoProducto" element={<NuevoProducto/>} />
     <Route  path="/nuevaSucursal" element={<NuevaSucursal/>} />
     <Route  path="/eliminarProd" element={<EliminarProducto/>} />
     <Route  path="/eliminarSucursal" element={<EliminarSucursal/>} />
     <Route  path="/aumentar" element={<Aumentar/>} />
    </Routes>
  
</Router>
  );
}

export default App;
