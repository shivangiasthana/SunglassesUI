import React, { Component } from 'react';
import "./CollectionStyle.css"
import munna from '../assets/munna.png'
import akhanda from '../assets/akhanda.png'
import maurya from '../assets/maurya.png'
import sunglass_1 from '../assets/sunglass_1.png'
import sunglass_2 from '../assets/sunglass_2.png'
import sunglass_3 from '../assets/sunglass_3.png'

class Collection extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div style={{backgroundColor:'black', paddingTop:100, paddingRight:100, paddingLeft:100}}>
           <div className="con">
               <text className="bold">BOLD, DARING & STURDY</text>
               <text className="pilotText">These Pilots are perfect for that Grunge look</text>
               <div style={{
                   height:2, 
                   width:45, 
                   backgroundColor:'white',
                   marginTop:20,
                   marginBottom:60,
                   marginLeft:545
                }}/>

            <div style={{display:'flex', flexDirection:'row'}}>
                {
                    person.map((item)=>{
                        return (
                            <div style={{display:'flex', flexDirection:'column'}}>
                            <div style={{
                                height:200, 
                                width:200, 
                                borderRadius: '100px', 
                                border:'5px solid red' ,
                                marginLeft:95,
                                backgroundImage: `url(${item.image})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',  
                                }}
                                className="no-borderRadiusImportant"    
                            >
                            </div>
                            <div className="peronview">
                            <text className="persontext">{item.text}</text>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                {
                    sunglass.map((item)=>{
                        return (
                        <>
                        <div style={{display:'grid', justifyContent:'space-around', width:'100%' }}>
                        <img src={item.image} height={100} width={200}
                        /> 
                        <div style={{marginLeft:60, display:'flex' ,flexDirection:'column'}}>
                        <text style={{
                            color:'white',
                            fontSize:10
                            }}>VINCENT CHASE</text>
                            <text style={{
                                color:'white',
                                fontSize:11,
                                marginLeft:-10
                            }}>
                                {item.type}
                            </text>
                        <div style={{marginTop:20}}>
                          <button className="buttonCollection">
                            <text style={{fontSize:10, fontWeight:'bold', textAlign:'center', alignSelf:'center'}}>BUY NOW</text>
                          </button>
                        </div>
                            </div>
                        </div>
                        </>
                        )
                    })
                }
            </div>
            </div> 
           </div>
            </>
         );
    }
}
 
export default Collection;

const person =[
    {
        image:akhanda,
        text:"The iron fisted Akhandanand Tripathi is a millionaire carpet carpet exported and the mafia don of Mirzapur"
    },
    {
        image:munna,
        text:"Akhandanand's son, Munna Tripathi is power hungry and will not stop at anything to inherit his father's legacy"
    },
    {
        image:maurya,
        text:"An honest cop, Maurya Saab who goes an extra mile to eliminate the bad and the over-powering crime in the city"
    }
]

const sunglass =[
    {
        image:sunglass_1,
        type:"Golden Green Full Rim"
    },
    {
        image:sunglass_2,
        type:"Black Grey Full Rim"
    },
    {
        image:sunglass_3,
        type:"Golden Brown Full Rim"
    }
]