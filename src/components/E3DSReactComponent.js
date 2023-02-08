import React, { useState, useEffect } from 'react';


const myHTML = `
<div id="playerUI"  style="display: block;" >
        
<div id="player"  style="display: block;">
        <video id="streamingVideo" playsinline >
           
           <source src="" type="video/mp4">
        </video>
     </div>

  </div>

  <canvas id="canvas"></canvas>
  `;

function E3DSReactComponent() {
    useEffect(() => {
        const script1 = document.createElement('script');
        const script2 = document.createElement('script');
        const script3 = document.createElement('script');
        const script4 = document.createElement('script');
        const script5 = document.createElement('script');
        script1.src = "/pxs/scripts/preLoadScripts.js";
        script2.src = "/pxs/scripts/postLoadScripts.js";
        script3.src = "/pxs/dist/m.js";
        script4.src = "/pxs/scripts/adapter-latest.js";
        script5.src = "/pxs/scripts/jquery.min.js";
        document.body.appendChild(script5);
        document.body.appendChild(script1);
        document.body.appendChild(script2);
        document.body.appendChild(script3);
        document.body.appendChild(script4);
        console.log("append");
        return () => {
            document.body.removeChild(script5);
            document.body.removeChild(script1);
            document.body.removeChild(script2);
            document.body.removeChild(script3);
            document.body.removeChild(script4);
            console.log("removed");
        }
    }, []);
    return (<div dangerouslySetInnerHTML={{ __html: myHTML }} />)
}

export default E3DSReactComponent;