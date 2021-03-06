import React,{useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {

useEffect(() => {

},[])

  return (
    <div className='container'>
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurveyNew} />
        </div>
      </Router>
    </div>
  );

};

export default App;
