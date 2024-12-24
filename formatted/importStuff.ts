export const importA = "Hello!";
export const importB = "World!";
export const importC = "This is a test!";

const arrayExample = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]; // Array should have a space after the opening bracket and before the closing bracket

const computedProperty = ( a: string ) => ( {
	[ a ]: "needs a space"
} ); // Missing semicolon at end of function, computed property "a" should have a space after the opening bracket and before the closing bracket, function params should have a space after the opening parenthesis and before the closing parenthesis, there should be a space after the colon for the type annotation AND the object

const objectExample = {
	key: {
		test: "hello world!"
	},
	key2: "value2"
}; // Object should have a space after the opening bracket and before the closing bracket, there should be a space after the colons

const dotNotation = objectExample
	.key
	.test; // Dot notation should be on the same line period should be on the same line as the property, not the object

computedProperty( "bad spacing" );

const functionArgs = (
	a: string,
	b: string,
	c: string
) => { // If a function parameter is on a newline, all parameters should be on a newline
	console.log( a ); // Function call arguments should go on a new line
};

const keywordSpacing = ( a: boolean ) => {
	if ( a ) { // There should be a space after the if, try, catch, else and other keywords
		try {
			console.log( "true" );
		} catch {
			console.log( "error!" );
		}
	}
};

console.log( ...arrayExample ); // There should not be a space after the spread operator

class NewLinesBetweenMembers { // There should be newlines between the members of this class
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

const condition = true;
const ternaryOperator = condition
	? "true" :
	"false"; // If a ternary operator is on a newline, all operands should be on a newline

const infixOperator = 1 + 2; // Infix operators should have a space on either side

const multiSpace = "Too many spaces!"; // There should not be more than one space between the equals sign and the value

// The file should end with a newline
