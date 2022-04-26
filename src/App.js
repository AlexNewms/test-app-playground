import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
    const [someState, setSomeState] = React.useState('')
    console.log('Rerendered the page')

    // uncomment out one of the below const's to see how useMemo is working 

    // notice if we use the first one the text in the input is laggy to show up since every character does a large calculation on each re-render when we change state
    //const longArrayCalc  = Array.from(Array(10000000).keys()).map(item => item * Math.random()).filter(x => x < 20)

    // useMemo below will not be recalculated because it's dependency array is empty so does not need to change on each re-render
    //const longArrayCalcMemo = React.useMemo(()=>{Array.from(Array(10000000).keys()).map(item => item * Math.random()).filter(x => x < 20)},[])
  
    // However this useMemo below does recalculate since we now have 'someState' inside the dependency array
    //const longArrayCalcMemoDependency = React.useMemo(()=>{Array.from(Array(10000000).keys()).map(item => item * Math.random()).filter(x => x < 20)},[someState])
    
  return (
    <div className="App" style={{backgroundColor: 'red'}}>
      <input type="text" onChange={(e) => setSomeState(e.target.value)} style={{height: 100, width: 500}}></input>
    </div>
  );
}




export default App;
