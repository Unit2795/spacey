export const badExport = () => "This should only export components!"; // Will show a warning that this file should only export components

const ExportComponentOnly = () => {
	return (
		<div>
			{Math.random()}
		</div>
	);
};

export default ExportComponentOnly;
