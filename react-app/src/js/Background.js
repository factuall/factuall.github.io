import React, { useEffect, useState } from 'react';
import '../css/Background.css';
const SiteBackground = (props)=>{
    let size = 100;
    let margin = 1;
    let amount = Math.round(window.innerWidth/(size+margin)*(window.innerHeight/size-(margin-size*0.2885)));
    let hexes = [];
    hexes.length = amount+1;
    const [xhexes, xsetHexes] = useState({list: [...hexes]});
    const updateHexes = () =>{
        let lista = [];
        lista.length = amount+1;
        for (let i = 0; i < amount; i++) {
            lista[i] = Math.floor(Math.random() * 16)+22;
        }
        xsetHexes({list: [...lista]});
        console.log(xhexes);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            updateHexes();
            
        },5000);
        return () => {
            clearInterval(interval);
        }
    }, []);     
    return(
    <div className='main'>
        <div className="background-container">
            {[...Array(amount)].map((x, i) => 
                    <div id={"hex"+i} style={{backgroundColor: "rgb("+xhexes.list[i]+","+xhexes.list[i]+","+xhexes.list[i]  +")",
                    transition: "all 5s ease-in-out"}}> </div>

                )}
            {/* {[...Array(amount)].map((x, i) => {
                console.log(hexes[i]);
                return(<>
                    <div style={{backgroundColor: (hexes[i])}}> </div>
                        </>);
                })} */}
                
                
        </div>
    </div>);
}
export default SiteBackground;