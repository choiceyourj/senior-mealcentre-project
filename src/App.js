import './App.css';
import { Switch ,Route } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import SearchPlace from './components/SearchPlace';
import NewPage from './pages/NewPage';


function App() { 


  return (
    <div className='App'>
    <Layout>
      <Switch>
      <Route path="/home" component={Home}/>
      <Route path='/search' component={SearchPlace}/>
      <Route path="/:sigun_cd?" component={NewPage}/>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
