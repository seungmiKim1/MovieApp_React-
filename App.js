import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component { 
  // App 클래스가 리액트가 제공하는 Component 클래스를 반드시 상속받아야 한다. 
  // 지금의 App 컴포넌트는 클래스이기 때문에(함수가 아니므로) return문을 사용할 수 없음
  // 그래서 함수 형태의 App 컴포넌트처럼 JSX를 반환할 수 없다. 
  // 클래스형 컴포넌트에서는 JSX를 반환하기 위해 render() 함수 사용

 
    state ={ 
      count: 0, // count를 key값으로 넣는다. 객체 형태니깐. 

    };

    add = () => {
     // console.log('add'); 
     this.setState({count:1});
        };

   minus = () => {
      //console.log('minus'); 
      this.setState({count:-1});
    };

    render() {
    return(
      <div>
        <h1>The number is: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

}

export default App;
