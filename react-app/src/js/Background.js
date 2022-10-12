import React, { useEffect } from 'react';
import '../css/Background.css';
const SiteBackground = (props)=>{
    let size = 100;
    let margin = 1;
    let amount = Math.round(window.innerWidth/(size+margin)*(window.innerHeight/size-(margin-size*0.2885)));
    // useEffect( () => {
    //     props.interval = setInterval(() => {
            
    //     },300);
    //  }, []);
    // useEffect(() => {
    //     return () => {
    //         clearInterval(props.interval);
    //     }
    // }, [])
    return(
    <div className='main'>
        <div className="background-container">
            {[...Array(amount)].map((x, i) =>
                <>
                    <div id={"hex"+i}></div>
                </>
            )}
        </div>
    </div>);
}
export default SiteBackground;