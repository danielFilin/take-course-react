import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import CourseBuilder from './containers/CourseBuilder/CourseBuilder';

class App extends Component {
  render () {
    return (
      <div 
        className="App">
        <Layout>
          <CourseBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
