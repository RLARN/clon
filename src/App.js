import axios from 'axios';
import React from 'react';

 class App extends React.Component{
    state = {
    isLoading: true,
    movies : [],
 };


 getMovies = async() => {
   const{
     data:{
       data:{movies},
     },
   } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
   this.setState({movies, isLoading: false});
 }

 componentDidMount(){
  this.getMovies();
 }



  render(){
    const {isLoading} = this.state;
      return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
    }
  
 }

export default App;
