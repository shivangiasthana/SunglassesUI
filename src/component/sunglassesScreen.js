import React, { Component } from 'react';
import './sunglassesStyles.css'
import amozonprime from '../assets/amozonprime.png'
import sunglasses from '../assets/sunglasses.png'
import MirzapurCover from '../assets/mirzapurimage1.png'
import TermsAndCondition from './ternsAndCondition'
import MirzapurTitle from '../assets/mirzapurtitle.png'
import LuckyBanner from './LuckyBanner';
import excel from '../assets/excel.png'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'
import bottom_picture from '../assets/bottom_picture.png'
import Collection from './collectionScreen'

class SunGlasses extends Component {
    render() { 
        return (
        <>
        <div style={{ backgroundColor:'black' , width:"100%" ,  height:"100%" }}>
        <div style={{ 
            backgroundImage: `url(${MirzapurCover})`,
            width: "100%",
            height:550,   
            backgroundPosition: 'stretch',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
    }}>
        <div  className="logo">
        <img src={excel} height={40} width={70}/>
        </div>
        <div className="primeView">
            <div>
            <div className="mirzaView">
            {/* <text className="primeText">PRIME ORIGINAL</text>
            <text className="mirzaText">MIRZAPUR</text> */}
            <img src={MirzapurTitle} height={80} width={200} className="mirzapurTitle"/>
            </div>
            <div >
            <div className="stream">
            <text className="streamText">STREAM</text>
            <text className="now">NOW</text>
            <div className="line"/>
            <img src={amozonprime} height={80} width={80} className="amozonprime"/>
            </div>
            </div>
            </div>
            <div className="mirzasunview" >
                <div className="separate"/>
                <div style={{flexDirection:'column'}}>
                <div className="mirzasun">
                    <text className="mirzasuntext">MIRZAPUR</text>
                    <text className="mirzasuntext">INSPIRED</text>
                    <text className="mirzasuntext">SUNGLASSES</text>
                </div>
                <img src={sunglasses} height ={90} width={220} style={{marginLeft:35, marginTop:10}}/>
                </div>
            </div>

        </div>
        <div className="lucky">
            <text className="luckytext">Shop the collection today and 20 Lucky Winners per day to win</text>
            <text className="luckytext" style={{marginLeft:150, marginTop:5}}>Amazon Fire TV Stick</text>
            <button className="button">
                <text style={{fontSize:12, fontWeight:'bold'}}>VIEW COLLECTION</text>
            </button>
        </div>
        </div>
         <Collection/>
         
        <LuckyBanner/>
        <TermsAndCondition/>
        <div style={{marginTop:80, width:'85%', marginLeft:104}}>
            <div style={{
                display:'flex',
                flexDirection:'column'
            }}>
            <text style={{color:'white', fontSize:22, fontWeight:'700'}}>Looking for Help ?</text>
            <div style={{height:2, width: 40, backgroundColor:'white', marginTop:15, marginBottom:30}}/>
            <div style={{
                display:'flex',
                flexDirection:'row'
            }}>
            <div style={{display:'flex', flexDirection:'column'}}>
            <text style={{color:'white', fontSize:18, margin:5}}>We are availale by phone Monday to Sunday from 9 AM to 8 PM.</text>
            <text style={{color:'white', fontSize:18, margin:5}}>Please feel free to call us if you have any queries.</text>
            </div>
            <div style={{flexDirection:'row', display:'flex', marginLeft:90}}>
            <div className="no-borderRadiusImportant"    
            style={{width: 300, height:70, 
            borderRadius: '10px', 
            border:'2px solid white' ,marginRight:30}}>
                <div style={{flexDirection:'row', display:'flex'}}>
                <img src={mail} height={50} width={50} style={{marginTop:8, marginLeft:25}}/>
                <div style={{flexDirection:'column', display:'flex', marginLeft:20, marginTop:8}}>
                <text style={{color:'white', fontSize:16}}>Email Us</text>
                <text style={{color:'white', fontSize:15 }}> support@lenskart.com</text>
                </div>
                </div>
            </div>
            <div className="no-borderRadiusImportant"    
            style={{width: 200, height:70, 
            borderRadius: '10px', 
            border:'2px solid white' ,}}>
                <div style={{flexDirection:'row', display:'flex'}}>
                <img src={phone} height={40} width={40} style={{marginTop:12, marginLeft:20}}/>
                <div style={{flexDirection:'column', display:'flex', marginLeft:20, marginTop:8}}>
                <text style={{color:'white', fontSize:16}}>Call Us</text>
                <text style={{color:'white', fontSize:15 }}>99998 99998</text>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        <img src={bottom_picture} style={{width:'100%'}}/>
       
        </div>
        </>
    )
    }
}
 
export default SunGlasses;