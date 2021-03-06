import React from 'react'
import axios from 'axios'
import Movie from '../components/Movie'
import './Home.css'

 class Home extends React.Component{
    state = {
    isLoading: true,
    movies : [],
 };


 getMovies = async() => {//시간 필요
   const{
     data:{
       data:{movies},
     },
   } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')//기다려라await axios
   this.setState({movies, isLoading: false})
 };

 componentDidMount(){//생명주기함수
  this.getMovies()
 }



  render(){
    const {isLoading, movies} = this.state;
      return (
      <section className="container">
        {isLoading ?(
          <div className="loader">
            <span className="loader__text">Loading...</span>
            </div>
        ) : (
         <div className = "movies">
         { movies.map((movie) => (
           <Movie
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            />
            ))}
         </div>
       )}
       </section>
      );
    }
 }

export default Home;
