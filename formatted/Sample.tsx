import {
	useRef,
	useState
} from "react";

interface SampleProps {
	text: string
	hello?: number
}

class SampleClass {
	public memberOne: string;

	public memberTwo: string;

	constructor() {
		this.memberOne = "Hello!";
		this.memberTwo = "World!";
	}

	memberThree() {
		console.log( `${ this.memberOne } ${ this.memberTwo }` ); // Prefer template literals over string concatenation
	}
}

const objectExample = {
	key: {
		test: "hello world!"
	},
	key2: "value2"
};

const keywordSpacing = ( a: boolean ) => {
	if ( a ) {
		try {
			console.log( "true" );
		} catch {
			console.log( "error!" );
		}
	}
};

function doBadStringConcat( name: string ) {
	// Violates prefer-template, no-implicit-coercion, and single quotes
	if ( name ) {
		return `Hello ${ name }!`;
	}

	return "";
}

const Sample = () => {
	const [ isOpen, setIsOpen ] = useState( false );
	const buttonRef = useRef( null );
	const doubleNegation = "0";

	const arrayExample = [ 1, 2, 3 ];

	function toggleOpen() {
		setIsOpen( !isOpen );
	}

	return (
		<div>
			<p
				id="needDoubleQuotes"
				onClick={
					() => {
						alert( 1 + 2 );
					}
				}
			>
				Newlines needed!
			</p>

			<button
				ref={ buttonRef }
				type="button"
				onClick={
					() => {
						const condition = Math.random() < 0.5;
						const ternaryOperator = condition
							? "true" :
							"false";

						console.log( ternaryOperator );
						console.log( ...arrayExample );

						toggleOpen();
					}
				}
			>
				Click me!
			</button>

			<ul>
				{
					arrayExample.map( item=>(
						<li
							key={ item }
							style={
								{
									color: isOpen ? "red" : "blue"
								}
							}
						>
							{item}
						</li>
					) )
				}
			</ul>

			{
				Boolean( doubleNegation ) && (
					<p>
						Double negation
					</p>
				)
			}

			{
				isOpen
					? (
						<p>
							This is open!
						</p>
					)
					: null
			}
		</div>
	);
};

export default Sample;
