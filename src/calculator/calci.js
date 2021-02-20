


import React from "react";



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

class Calculator extends React.Component{
    state={
        a:0,
        b:0,
        setShowResult : false
    };
   setA=(q )=> { 
    this.setState({
        a : parseInt(q.target.value),
        setShowResult : false
    })
    };
    setB=(q )=> { 
        this.setState({
            b : parseInt(q.target.value),
            setShowResult : false
        })
        };

        setresult=()=>{
            this.setState( prevState=>{
                return{setShowResult: !prevState.setShowResult};
                
            })
        };

    render(){
        const add=(this.state.a+this.state.b);
        return (
        <div className="calculaor-div">
   <input  onChange={  this.setA } />
   <input onChange={ this.setB}/>
    <button onClick={this.setresult}>CLICK</button>
   <br/>
   <br/>
 {(this.state.setShowResult)?
   (<div>
     {"A: " + this.state.a  + " B : "+this.state.b}
    <br/>
    {"ADD : "+ add}
    <br/>
    {"sub : "+(this.state.a-this.state.b)}
    <br/>
    {"MUL : "+(this.state.a*this.state.b)}
    <br/>
    {"DIV : "+(this.state.a/this.state.b)}
    </div>)   :  (<div>click the button to see result</div>)
    
    }

        </div>
        );
    }
}
export default Calculator;









