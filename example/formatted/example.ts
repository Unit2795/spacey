interface Name {
	firstName: string
	lastName: string
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

function doBadStringConcat( name: Name ) {
	// Violates prefer-template, no-implicit-coercion, and single quotes
	if ( Boolean( name.firstName ) && Boolean( name.lastName ) ) {
		return `Hello, ${ name.firstName } ${ name.lastName }!`;
	}

	return "";
}

// Nothing changes here, but we need to make sure these are called so we don't get errors about unused code
doBadStringConcat( {
	firstName: "John",
	lastName: "Doe"
} );
keywordSpacing( true );
console.log( objectExample.key2 );
const myClass = new SampleClass();
myClass.memberThree();
