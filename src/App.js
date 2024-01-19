
import { useEffect, useState } from 'react';
import './App.css';
import Back from './components/background/Back';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

function App() {
  let heroData=[
    {text1:'Drive Into',text2:'What You Love'},
    {text1:'Indulge',text2:'Your Passion'},
    {text1:'Give In To',text2:'Your Dreams'},
]
const[heroCount,setHeroCount]=useState(0)
const[playStatus,setPlayStatus]=useState(false)
useEffect(()=>{
  setInterval(()=>{
setHeroCount((count)=>{
return count===2?0:count+1
})
  },3000)
},[])
  return (
    <div className="App">
      <Back
      playStatus={playStatus}
      heroCount={heroCount}/>
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      setHeroCount={setHeroCount}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      playStatus={playStatus}
      />      
    </div>
  );
}

export default App;
