import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks,setNayoks] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setNayoks(data))
  },[])
  // const nayoks = [
  //   { name: "Rifat", movies: 5 },
  //   { name: "Hasan", movies: 6 },
  //   { name: "Risat", movies: 7 },
  //   { name: "Sudipta", movies: 8 },
  //   { name: "Salah", movies: 9 },
  //   { name: "Salah", movies: 6 }
  // ]
  const products = ['mobile','laptop','watch'];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        products.map(product =>  <Product name ={product}></Product>)
      }
      {
        nayoks.map(nayok => <Nayok nayok={nayok} key={nayok.id}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
function MovieCounter() {
  const [count, setCount] =useState(0);

  const handleClick=()=>setCount(count+1);
  return (
    <div>
      <button onClick ={(handleClick)}>Add Movie</button>
      <h3>No of movies : {count}</h3>
      <MovieDisplay movies={count +10}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I Have Acted: {props.movies}</h4>
}

function Product(props){
  return(
    <div>
      <h2>Product Name : {props.name}</h2>
    </div>
  )
}

function Nayok(props) {
  console.log(props)
  const { name, movies } = props.nayok;
  console.log(name, movies);
  const nayokStyle = {
    border: "2px solid purple",
    margin: "20px",
    borderRadius: "10px",
    boxShadow: "10px 10px 10px gray"
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok : {name}</h1>
      <p>i have done {movies || 3} movies</p>
    </div>
  )
}

export default App;
