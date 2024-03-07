export const ProductTable = ({ products }) => {
	const rows = [];
	let lastCategory = null;

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
	);
};
