import React, { Component } from 'react';
import luckymirzapur from '../assets/luckymirzapur.png'

class LuckyBanner extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div style={{width:'100%',
            display:'grid', justifyContent:'center', alignItems:'center',
            paddingTop:80
            }}>
            <div
            style={{
                backgroundImage: `url(${luckymirzapur})`,
                height: "350px",   
                backgroundPosition: 'stretch',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                paddingRight:250,
                paddingLeft:250,
            }}
            > 
            <div style={{
                flexDirection: 'column',
                display: 'flex',
                paddingTop: 120,
                paddingLeft: 48,
            }}>
            <text style={{
                 color:'whitesmoke',
                 fontSize:20,
                 lineheight:1.5,  
                 fontWeight:'bold'
            }}>Shop the collection today and 20 Lucky Winners per day to win</text>
            <text style={{
                marginLeft:150, 
                marginTop:5,
                color:'whitesmoke',
                 fontSize:20,
                 lineheight:1.5,  
                 fontWeight:'bold'
                }}>Amazon Fire TV Stick</text>
            <button style={{
                 backgroundColor:'white',
                 border: 'none',
                 color: 'black',
                 padding: 8,
                 borderRadius: 20,
                 height: 40,
                 width: 155,
                 marginLeft: 155,
                 marginTop: 20,
                 display: 'inline-block'
            }}>
                <text style={{fontSize:12, fontWeight:'bold'}}>VIEW COLLECTION</text>
            </button>
        </div>
            </div>
            </div>
            </>
         );

<>
<div>

</div>
</>    }
}
 
export default LuckyBanner;