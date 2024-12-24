function SampleSimple( { test, hello, world }: {
	test: string,
	hello: number,
	world: boolean
} ) {
	const handleClick = () => {
		console.log(
			test,
			hello,
			world
		);
	};

	return (
		<div>
			<button
				className="myclass"
				type="button"
				onClick={
					handleClick
				}
			>
				Click me
			</button>
			<p>
				Hello,World!
			</p>
		</div>
	);
}

export default SampleSimple;
