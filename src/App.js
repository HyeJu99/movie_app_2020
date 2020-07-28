import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
    //react에서 객체는 양 옆에 공백 존재, JSX의 JS는 중괄호 양쪽을 공백으로 채우지 않음
    //alt 속성은 시각장애인을 위한 것
    return (
        <div>
            <h2>I love {name}😍</h2>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name} />
        </div>
    );
}

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://recipeland.com/images/r/20452/bdc4c97a94b026cb3163_1024.jpg",
        rating: 5,
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image: "https://image.ajunews.com/content/image/2017/01/25/20170125102649752096.jpg",
        rating: 4.9,
    },
    {
        id: 3,
        name: "Bibimbap",
        image: "https://thewoksoflife.com/wp-content/uploads/2017/05/bibimbap-recipe-13.jpg",
        rating: 4,
    },
    {
        id: 4,
        name: "Doncasu",
        image: "https://themintymusings.files.wordpress.com/2015/11/22101267883_09d02672eb_z.jpg",
        rating: 4.7,
    },
    {
        id: 5,
        name: "Kimbap",
        image:
            "https://www.thespruceeats.com/thmb/AH8JQR2GnNk874DVxH1aMk-uU58=/2848x2848/smart/filters:no_upscale()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg",
        rating: 4.5,
    },
];

function App() {
    return (
        <div>
            <h1>Hello😁</h1>
            {foodILike.map((dish) => (
                //key props는 리액트 내부에서 사용되는 특수한 props여서 Food 컴포넌트엔 전달안됨
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
            ))}
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number, // 필수 아니므로 isRequired 뺌
};

export default App;
