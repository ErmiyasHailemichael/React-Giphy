const GiphyDisplay = ({giphy}) => {

    console.log(giphy);

    // const image = giphy.data.images.hd.mp4
 
//    return <h1> This is GiphyDisplay components</h1>
return giphy.data ? (
    
    <>
    
    <h1>{giphy.data.title}</h1>
    {/* {giphy.data.images.hd.mp4} */}
    {/* The image is playing but only broken way */}
    
    <img src={giphy.data.images.downsized.url} alt={giphy.data.title} />
    <h5>{giphy.data.rating}</h5>
    <h6>{giphy.data.type}</h6>
    </>
) : (
    <h1>Search to find gif images</h1>
)
}

export default GiphyDisplay;
   
