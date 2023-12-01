import {Route, Routes} from 'react-router-dom';
import NewTodos from './pages/NewTodo';
import AllTodos from './pages/AllTodos';
import PendingTodos from './pages/PendingTodos';
import DoneTodos from './pages/DoneTodos';
import Layout from './components/layouts/Layout';

function App() {
   return (
    <div>
    <Layout>
    <Routes>
      <Route path='/' element={<AllTodos/>}/>
      <Route path='/new-todos' element={<NewTodos/>}/>
      <Route path='/pending-todos' element={<PendingTodos/>}/>
      <Route path='/done-todos' element={<DoneTodos/>}/>
    </Routes>
    </Layout>
  </div>
   );
}

export default App;