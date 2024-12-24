function SampleSimple({test, hello, world}:{test:string, hello:number, world: boolean}){
	const handleClick = () => {console.log("clicked!")};
	return<div>
		<button type='button' onClick={handleClick} className={'myclass'}>Click me</button>
		<p>Hello,World!</p>
	</div>
}

export default SampleSimple;;