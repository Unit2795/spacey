import {useState, useRef} from "react";

const Sample = () => {
	const [isOpen, setIsOpen] = useState(false);
	const buttonRef = useRef(null);
	const doubleNegation = "0";

	const arrayExample =    [1, 2, 3];

	function toggleOpen() { setIsOpen(!isOpen) }

	return (<div>
        <p id='needDoubleQuotes' onClick={() => alert(1+2)}>Newlines needed!</p>
		<button ref={buttonRef} onClick={() => {
			const condition = Math.random()<0.5;
			const ternaryOperator = condition ? "true" :
				"false";

			console.log(ternaryOperator);
			console.log(... arrayExample);

			toggleOpen();
		}} type={"button"}>Click me!</button>
		<ul>{arrayExample.map(item=><li key={item} style={{color: isOpen ? 'red':'blue'}}>{item}</li>)}</ul>
		{!!doubleNegation && <p>Double negation</p>}
		{isOpen && <p>This is open!</p>}
    </div>);
};

export default Sample;;