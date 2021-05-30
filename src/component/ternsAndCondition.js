 
import React, { Component } from 'react';
import "./termsAndConditionStyles.css"
class  TermsAndCondition extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="container" >
            <div className="innerContainer">
            <text style={{ fontSize: 20, fontWeight:'bold', color:'white'}}> Terms And Conditions of the contest</text>
            <div className="separator"/>
            {termsAndConditionArray.map((item)=>{
                return (
                <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex', flexDirection:'row'}}>
                <text style={{fontSize: 12, color:'white'}}>{item.id}.</text>
                <text style={{width:8}}>{""}</text>
                <text style={{fontSize: 15, color:'white',padding:2}}>{item.text}</text>
                </div>
                </div>
                )
            })
            }
            </div>
            </div>
           
         );
    }
}
 
export default TermsAndCondition;

const termsAndConditionArray = [
    {
        text:" 20 Lucky winners everyday will e selected at random.",
        id:'1'
    },
    {
        text:" Winners will be informed within 24 hours of order placed via SMS on registered phone number and/or email on the registered email id",
        id:2
    },
    {
        text:" Complimentary Amazon Fire TV Sticks will be sent to the winners on order completion. (Order completion duration: When the order is  delivered and the return period of 14 days is over) ",
        id:3
    },
    {
        text:" The coupon code is redimable on amazon.in. To claim, follow the steps sent on email to order complimentary Amazon Fire TV Sticks",
        id:4
    },
    {
        text:" The purchase needs to be made from the Mirzapur inspired sunglasses collections only",
        id:5
    },
    {
        text:" The offer is subject to change without any prior notice and at the sole discrition of Lenskart and Amazon",
        id:6
    },
    {
        text:" Offer valid from 16th November, 2018 till 23rd November, 2018. Code needs to be used efore 31st December, 2018",
        id:7
    },
    {
        text:" In case of failure  of coupon code redemption, please follow Amazon's TNC",
        id:8
    },
    {
        text:" For after sale service of Amazon Fire TV Sticks, please follow Amazon's TNC",
        id:9
    }
]