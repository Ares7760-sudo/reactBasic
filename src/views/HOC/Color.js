import React from 'react';

const getRandomColor = () => {
    const colorArr = ['lightcoral', 'lightseagreen', 'darkcyan', 'darkgreen', 'violet', 'burlywood', 'yellowgreen', 'royalblue'];
    let randomInx = Math.floor(Math.random() * colorArr.length);
    let randomColor = colorArr[randomInx];
    return randomColor;
}

const Color = (WrappedComponent) => {
    const randomColor = getRandomColor();

    return (props) => (
        <div style={{color: randomColor}}>
            <WrappedComponent/>
        </div>
    )
}

export default Color;