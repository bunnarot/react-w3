import React from 'react';

class Calculator extends React.Component {

  setAge(e){
    const age = e.target.value;
    this.setState({'s1':age});
  }
  setAge1(e){
    const age = e.target.value;
    this.setState({'s2':age});
  }

  constructor(){
    super();
    this.state ={s1:"var1",s2:"var2"};


}

    render(){

        return (
            <div>

                        <div > Value1 :{this.state.s1} </div>  <input onChange={this.setAge.bind(this)} /><br/><br/>
                        <div > Value2 :{this.state.s2} </div><br/>  <input onChange={this.setAge1.bind(this)} /><br/>
                      
                          <div > result :{this.state.s1+this.state.s2} </div><br/>

            </div>
        );
    }
}

export default Calculator;
