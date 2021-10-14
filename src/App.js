import "bootstrap/dist/css/bootstrap.min.css";
import Routing from './components/Routing/Routing';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routing></Routing>
      </AuthProvider>
    </div>
  );
}

export default App;
