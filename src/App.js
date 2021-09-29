const foodILike =[
  {
    name: 'kimchi',
    Image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
  },
  {
    name: 'bap',
    Image: 'https://lh3.googleusercontent.com/proxy/YLoy2w3dwQpPfTp86wpvjZzaOIAofgN9sQTV5N3ZoVtBN2UmO5ra2IqrqDhBGlyUnbey9wqP2FHlRSPBozg36qA',
  }
]


function renderFood(foo){
  return <Food name={foo.name} picture={foo.Image}/>
}

function App() {
  return (
    <div>
      {
        foodILike.map(renderFood)
      }
    </div>
  );
}



function Food({name,picture}){
  //{fav} = props
  return(
    <div>
      <h2>i love {name}</h2>
      <img src = {picture} />
    </div>
  );
}


export default App;
