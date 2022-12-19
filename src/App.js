import { useState } from 'react';
import './App.css';
import Form from './components/Form'
import GiphyDisplay from './components/GiphyDisplay'


function App() {
  const [giphyData, setGiphyData] = useState({});
  // const [giphyTitle, setGiphyTitle] = useState('dog')
//the endpoint you picked for giphyUrl does not take an input so a input doesn't make sense in your Form.js
  
  const makeApiCall = async (giphyTitle) => {
    const giphyUrl= `https://api.giphy.com/v1/gifs/random?api_key=M4PoF7T7D8fynGIzM7cC3JH7lbv1vYmD`
    const res = await fetch(giphyUrl);
    const json = await res.json();

    setGiphyData(json)
  };
  //here is code to search for a giphy, notice the new endpoint and the getTag function takes an argument
  //you would have to rework your GiphyDisplay to get this to work, but this is the idea.
  const [tag, setTag] = useState(null)
  const getTag = async (input) => {
    const response = await fetch(
      `https://api.giphy.com/v1/stickers/random?api_key=M4PoF7T7D8fynGIzM7cC3JH7lbv1vYmD&tag=${input}`
    )
    const data = await response.json()
    setTag(data)
  }
  console.log(giphyData)



  return (
    <div className="App">
      <Form getGiphy={makeApiCall} />
      <GiphyDisplay giphy={giphyData}/>
    </div>
  );
}

export default App;
