import "bootstrap/dist/css/bootstrap.min.css";
import Routing from './components/Routing/Routing';
import AuthProvider from './Context/AuthProvider';
import './App.css'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routing></Routing>
      </AuthProvider>
    </div>
  );
}

export default App;
