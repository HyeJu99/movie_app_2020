import React from "react";

function Food({ name, picture }) {
    return (
        <div>
            <h2>I love {name}😍</h2>
            <img src={picture} />
        </div>
    );
}

const foodILike = [
    {
        name: "Kimchi",
        image: "https://recipeland.com/images/r/20452/bdc4c97a94b026cb3163_1024.jpg",
    },
    {
        name: "Samgyeopsal",
        image: "https://image.ajunews.com/content/image/2017/01/25/20170125102649752096.jpg",
    },
    {
        name: "Bibimbap",
        image: "https://thewoksoflife.com/wp-content/uploads/2017/05/bibimbap-recipe-13.jpg",
    },
    {
        name: "Doncasu",
        image: "https://themintymusings.files.wordpress.com/2015/11/22101267883_09d02672eb_z.jpg",
    },
    {
        name: "Kimbap",
        image:
            "https://www.thespruceeats.com/thmb/AH8JQR2GnNk874DVxH1aMk-uU58=/2848x2848/smart/filters:no_upscale()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg",
    },
];

function App() {
    return (
        <div>
            <h1>Hello😁</h1>
            {foodILike.map((dish) => (
                <Food name={dish.name} picture={dish.image} />
            ))}
        </div>
    );
}

export default App;
