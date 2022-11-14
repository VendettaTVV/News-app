import { useState } from 'react';

const TestComponent = (props) => {


    const [index, setIndex] = useState(0);

    // console.log('Test component render');

    function handleClick(event) {
        console.log(event);
        event.target.innerHTML = 'New text';
        setIndex(index + 1);
    }
    function handleClickIndexMinus(event) {
        console.log(event);
        setIndex(index - 1);
    }

    function handleClickCountMinus(event) {
        props.setCount(props.count - 1);
    }

    return (
        <div>
            <h1>{props.message}</h1>
            {index}
            <div>
                <button onClick={handleClick}>Button</button>
                <button onClick={handleClickIndexMinus}> Minus1 Button</button>
                <button onClick={handleClickCountMinus}> MinusCount1 Button</button>
            </div>
        </div>
    );
};

TestComponent.defaultProps = {
message: "Default message"
};


const ArrowComponent = ({ message, text }) => {

    const [count, setCount] = useState(0);

    // console.log('Arrow render');


    const array = [
        'Test 1',
    ];

    return (
        <div>
            <div>{message} Count:<b>{count}</b></div>
            <small>{text}</small>
            <div>
                <button onClick={() => setCount(count + 1)}>Button2</button>
            </div>
            <TestComponent count={count} setCount={setCount} />
            {array.map(a => {
                return (<div key={a}>{a}</div>);
            })}
        </div>
    );
};

export default ArrowComponent;