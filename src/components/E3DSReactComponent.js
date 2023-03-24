import React, { useState, useEffect } from 'react';


const myHTML = `
<div id="playerUI"  style="display: block;" >
    <div id="player"  style="display: block;">
        <video id="streamingVideo" playsinline >      
           <source src="" type="video/mp4">
        </video>
    </div>
</div>
`;

function E3DSReactComponent() {
    return (<div dangerouslySetInnerHTML={{ __html: myHTML }} />)
}

export default E3DSReactComponent;