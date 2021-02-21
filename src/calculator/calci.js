


import React from "react";
import './calci.css';
class Calculator extends React.Component{

    state={
        a:0,
        b:0,
        showresult:false
    };

    setA=(e)=>{
        this.setState({
           a:parseInt(e.target.value) ,
           showresult:false
        })
    };
    setB=(e)=>{
        this.setState({
           b:parseInt(e.target.value),
           showresult:false
        })
    };

    setshowresult=()=>{
        this.setState( prevState=>{
            return {showresult : !prevState.showresult};
        })
    };
    
    
    render(){
   const add =  (this.state.a+this.state.b);
        return (

    <div className="cal-culator">
        <h1>THIS IS Calculator</h1>
        <input placeholder="enter number 1" onChange={this.setA}/>
        <input placeholder="enter number 2" onChange={this.setB}/>
        <br/>
        <button onClick={this.setshowresult} >CLICK</button>
 
    { (this.state.showresult) ?(
        <div className="result">
            {"A : " +this.state.a+" , B: "+this.state.b}
            <br/>
         {"ADD : " + add}
            <br/>
         {"SUB : " +(this.state.a-this.state.b)}
            <br/>
         {"MUL : " +(this.state.a*this.state.b)}
            <br/>
         {"DIV : " +(this.state.a/this.state.b)}

        </div>):(<h2 >click the button to result</h2>)
    }


    </div>

        );
    };
}
export default Calculator;


// class Calculator extends React.Component{
//     state={
//         a:0,
//         b:0,
//     };
//    setA=(q )=> { 
//     this.setState({
//         a : parseInt(q.target.value)
//     });
//     };
//     setB=(q )=> { 
//         this.setState({
//             b : parseInt(q.target.value)
//         })
//         } ;
//     render(){
//         const add=(this.state.a+this.state.b);
//         return (
//         <div className="calculaor-div">
//    <input  onChange={  this.setA } />
//    <input onChange={ this.setB}/>
//    <br/>
//    <br/>
//      {"A: " + this.state.a  + " B : "+this.state.b}
//     <br/>
//     {"ADD : "+ add}
//     <br/>
//     {"sub : "+(this.state.a-this.state.b)}
//     <br/>
//     {"MUL : "+(this.state.a*this.state.b)}
//     <br/>
//     {"DIV : "+(this.state.a/this.state.b)}
//         </div>
//         );
//     }
// }
// export default Calculator;

// class Calculator extends React.Component{
//     state={
//         a:0,
//         b:0,
//         setShowResult : false
//     };
//    setA=(q )=> { 
//     this.setState({
//         a : parseInt(q.target.value),
//         setShowResult : false
//     })
//     };
//     setB=(q )=> { 
//         this.setState({
//             b : parseInt(q.target.value),
//             setShowResult : false
//         })
//         };
//         setresult=()=>{
//             this.setState( prevState=>{
//                 return{setShowResult: !prevState.setShowResult};            
//             })
//         };
//     render(){
//         const add=(this.state.a+this.state.b);
//         return (
//         <div className="calculaor-div">
//    <input  onChange={  this.setA } />
//    <input onChange={ this.setB}/>
//     <button onClick={this.setresult}>CLICK</button>
//    <br/>
//    <br/>
//  {(this.state.setShowResult)?
//    (<div>
//      {"A: " + this.state.a  + " B : "+this.state.b}
//     <br/>
//     {"ADD : "+ add}
//     <br/>
//     {"sub : "+(this.state.a-this.state.b)}
//     <br/>
//     {"MUL : "+(this.state.a*this.state.b)}
//     <br/>
//     {"DIV : "+(this.state.a/this.state.b)}
//     </div>)   :  (<div>click the button to see result</div>)
//     }
//         </div>
//         );
//     }
// }
// export default Calculator;








