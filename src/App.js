import {useState} from 'react';
import AnimalShow from './AnimalShow';

function generateRandom(){
  let arr = ["cow","dog","cat","horse",'gator','bird'];

  return arr[Math.floor(Math.random() * arr.length)];
}

function App() {
  let [animals , setAnimals] = useState([]);
  function handleClick(){
     setAnimals([...animals,generateRandom()])
  }

  let rendered = animals.map((item,index) => <AnimalShow type = {item} key = {index} />)

  return (
    <div>
      <button onClick={handleClick}> Add Animals </button>
      <div>{rendered}</div>
    </div>
  )
}

export default App