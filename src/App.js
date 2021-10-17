import "bootstrap/dist/css/bootstrap.min.css";
import Routing from './components/Routing/Routing';
import AuthProvider from './Context/AuthProvider';
import './App.css'
import AddtoCart from "./Context/AddtoCart";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AddtoCart>
          <Routing></Routing>
        </AddtoCart>
      </AuthProvider>
    </div>
  );
}

export default App;
