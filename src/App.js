import React from 'react';
import PropTypes from 'prop-types';

const foodILike =[
  {
    id: 1,
    name: 'kimchi',
    Image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
    rating:4.9,
  },
  {
    id: 2,
    name: 'bap',
    Image: 'https://lh3.googleusercontent.com/proxy/Ia5SM0H7Kq971udLTKP_-GG4wmjOWh11hZJlKrJ0UoGqeSRna3D8wQaA3hkFn0gDg0BlJ2FMcj5lxYlM_1Bn3y9j6Xxy-TsAYVwX58MpSC-Opnk3kiepi9RLiTVDRnKMcvE9740l',
    rating:5,
  }
]



function App() {
  return (
    <div>
      {
        foodILike.map(dish => (
          <Food 
          key={dish.id}
          name={dish.name}
          picture={dish.Image}
          rating={dish.rating} />
        ))
      }
    </div>
  );
}



function Food({name,picture, rating}){
  //{fav} = props
  return(
    <div>
      <h2>i love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}


export default App;
