import React,{useState} from 'react'
import bird from './images/bird.svg';
import cat from './images/cat.svg';
import cow from './images/cow.svg';
import dog from './images/dog.svg';
import gator from './images/gator.svg';
import heart from './images/heart.svg';
import horse from './images/horse.svg';

let obj = {
    bird,cat,cow,dog,gator,heart,horse
}

export default function AnimalShow({type}) {
  let [clicks,setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  }
  return (
    <div onClick = {handleClick}>

    <img src = {obj[type]} alt = "imag"></img>

    <img 
    src = {obj["heart"]} 
    alt = "imag"
    style={{width : 10 + 10 * clicks,height : 10 + 10 * clicks}}
    ></img>

    </div>
 
  )
}
