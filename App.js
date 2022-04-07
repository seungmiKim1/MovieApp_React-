import React from 'react'; 
import './App.css';
import PropTypes from 'prop-types';

/*function Thursday() { 
  return <h1>Today is Thursday!</h1>;
}

function Movie() {
  return <h1>I like Movie!</h1>;
}*/

function Food({name,picture,rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
  }

const foodILike = [
  {
    id : 1, 
    name : 'Kimchi',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcbmpress.sfo2.digitaloceanspaces.com%2Ftfood%2F2516102861_WtlGqsyD_6a53a2f10d7bcaf273d900e63e1ecb90dbd28318.jpg&f=1&nofb=1', 
    rating: 5, 
  },
  { 
    id : 2, 
    name : 'Samgyeopsal',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR800x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%3A%252F%252Fblog.kakaocdn.net%252Fdn%252FdDyTJN%252FbtqvrVnOCb4%252FVDVFUo7oXVnoFqlVIzH0h0%252Fimg.png&f=1&nofb=1',
    rating: 4.9, 
  },

  { 
    id : 3,
    name : 'Ramyeon',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR800x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%3A%252F%252Ft1.daumcdn.net%252Fcfile%252Ftistory%252F990C324C5D9EDFBD0E&f=1&nofb=1',
    rating: 3.5, 
  },

  {  
    id : 4,
    name : 'Udon',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR800x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%3A%252F%252Ft1.daumcdn.net%252Fcfile%252Ftistory%252F990C324C5D9EDFBD0E&f=1&nofb=1',
    rating: 4.3, 
  },

  { 
    id : 5,
    name : 'Gimbap',
    image : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frecipe.ezmember.co.kr%2Fcache%2Frecipe%2F2017%2F04%2F19%2Fd20b047290d4e88e20c451798c0b3ec11.jpg&f=1&nofb=1',
    rating: 2.1, 
  },
]; //foodILike 변수에 빈 배열을 생성 

/*function renderFood(dish){
  return <Food name={dish.name} picture={dish.image}/>;
}
// const renderFood = dish => <Food name={dish.nam} picture={dish.image}/>;도 같은 표현이다. */

function App() {
  //console.log(foodILike.map(renderFood));
  return(
    /*<div className="App"/>;*/
    <div>
      {foodILike.map(dish=>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
        ))} {/*위에서 food라는 컴포넌트를 만들고 여기서 사용*/}
      {/*{foodILike.map(renderFood)}*/} 
      
    </div>
  );
}

Food.PropTypes = { 
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
};

export default App;
