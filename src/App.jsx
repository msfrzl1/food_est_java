import { useRoutes } from 'react-router-dom';
import { RouteList } from './components/Routes/Route';

function App() {
   const element = useRoutes(RouteList);

   return element;
}

export default App;
