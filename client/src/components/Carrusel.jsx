import React, { useEffect } from "react";
import { useState }  from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components'
//import './Carrusel.css'

const CarouselImg = styled.img`
max-width: 500px;
width: 100%;
height: auto;
opacity: 0;
transition: 1s;
&.loaded{
    opacity: 1
}

`;




export default function  Carrusel( ){
   const images = [];
   
   const videogames = useSelector((state)=> state.videogames )
   
   images.push(videogames && videogames?.map(el => el.image))
   const carrImgs = (images[0])
   
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [selectedImage, setSelectedImage] = useState(carrImgs[0]);
   const [loaded, setLoaded] = useState(false)
  // console.log(selectedImage)
  // console.log(carrImgs)


   const arrBackUp = [ 'https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg', 'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg', 'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg', 'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg', 'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg', 'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg', 'https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg', 'https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg', 'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg', 'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg', 'https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg', 'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg', 'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg', 'https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg',  'https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg', 'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg', 'https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg', 'https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg', 'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg', 'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg', 'https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg', 'https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg', 'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg', 'https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg', 'https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg', 'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg', 'https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg']


   


   
   useEffect((autoPlay = true) => {
    if (autoPlay) {
        const interval = setInterval(()=> {
            selectNewImage(selectedIndex, carrImgs || arrBackUp )
        }, 1000);
        return () => clearInterval(interval)
    } 
});



const selectNewImage = (index, carrImgs, next = true ) =>{
    setLoaded(false);
    setTimeout(()=> {
        if(videogames.length > 0 ){
        const condition = next ? selectedIndex < carrImgs.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition  ? selectedIndex - 1 : carrImgs.length -1
        setSelectedImage(carrImgs[nextIndex]);
        setSelectedIndex(nextIndex); 
    } else {
 
          
          const randomIndex = Math.floor(Math.random() * arrBackUp.length)
         const condition = next ? selectedIndex < arrBackUp.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition  ? selectedIndex - 1 : arrBackUp.length -1
        setSelectedImage(arrBackUp[randomIndex]);
        setSelectedIndex(nextIndex); 
    }  
    }, 500)
};



const pause = () => {
 selectNewImage(selectedIndex, carrImgs, false ) 
} 
   const previous = () => { 
     selectNewImage(selectedIndex, carrImgs, false);
    
    }

   const next = () => {
    selectNewImage(selectedIndex, carrImgs) 
   
    }


return(
    <div className="CarouselContainer">
     < CarouselImg 
     src={selectedImage} 
     alt='Not Found' 
     className={ loaded ? "loaded" : ""}
     onLoad={()=>setLoaded(true)} 
     />
     {/* <button onClick={previous} > {`<<`} </button>
     <button onClick={pause} > {`||`} </button>
     <button onClick={next} > {`>>`} </button>  */}
    </div>
)    


}