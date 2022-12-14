import { useState } from 'react';
import './App.css';
import Form from './components/Form'
import GiphyDisplay from './components/GiphyDisplay'


function App() {
  const [giphyData, setGiphyData] = useState({});
  // const [giphyTitle, setGiphyTitle] = useState('dog')

  const makeApiCall = async (giphyTitle) => {
    const giphyUrl= `https://api.giphy.com/v1/gifs/random?api_key=M4PoF7T7D8fynGIzM7cC3JH7lbv1vYmD`
    const res = await fetch(giphyUrl);
    const json = await res.json();

    setGiphyData(json)
  };

  console.log(giphyData)



  return (
    <div className="App">
      <Form getGiphy={makeApiCall} />
      <GiphyDisplay giphy={giphyData}/>
    </div>
  );
}

export default App;
