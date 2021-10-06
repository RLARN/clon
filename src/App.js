import axios from 'axios';
import React from 'react';

 class App extends React.Component{
    state = {
    isLoading: true,
    movies : [],
 };


 getMovie = () => {
   const movie = axios.get("https://yts-proxy.now.sh/list_movies.json");
 }

 componentDidMount(){
  this.getMovie();
 }



  render(){
    const {isLoading} = this.state;
      return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
    }
  
 }

export default App;
