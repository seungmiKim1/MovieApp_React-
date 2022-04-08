import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component { 
  // App 클래스가 리액트가 제공하는 Component 클래스를 반드시 상속받아야 한다. 
  // 지금의 App 컴포넌트는 클래스이기 때문에(함수가 아니므로) return문을 사용할 수 없음
  // 그래서 함수 형태의 App 컴포넌트처럼 JSX를 반환할 수 없다. 
  // 클래스형 컴포넌트에서는 JSX를 반환하기 위해 render() 함수 사용

    constructor(props) {
      super(props);
      console.log('hello');
    }
    state ={ 
      count: 0, // count를 key값으로 넣는다. 객체 형태니깐. 

    };

    /*add = () => {
     // console.log('add'); 
     this.setState({count:this.state.count+1});
        }; */

    // current에는 현재의 state가 넘어온다. 새로운 state로 교체되는 것이 아닌 state를 비교하여 바뀐 데이터만 업데이트한다.
    // 그래서 변경 대상이 아닌 키와 키값은 그대로 유지된다.
    add = () => { 
      this.setState(current => ({
        count : current.count+1,
      }));
    };

    minus = () => {
      this.setState(current => ({
        count : current.count-1,
      }));
    };

  /* minus = () => {
      //console.log('minus'); 
      this.setState({count:this.state.count-1});
    }; */

    componentDidMount() {
      console.log('component rendered');
    }

    componentDidUpdate() {
      console.log('I just updated');
    }

    componentWillUnmount() {
      console.log('Goodbye, cruel world');
    }




    render() {
      console.log("I'm rendering");

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
