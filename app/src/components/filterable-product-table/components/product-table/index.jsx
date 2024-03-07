import { ProductCategoryRow } from '../product-category-row';
import { ProductRow } from '../product-row';

export const ProductTable = ({ products, filterText, inStockOnly }) => {
	const rows = [];
	let lastCategory = null;
	products?.forEach((product) => {
		if (product?.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;
		if (inStockOnly && !product?.stocked) return;
		if (product?.category !== lastCategory) {
			rows.push(<ProductCategoryRow category={product?.category} key={product?.category} />);
		}
		rows.push(<ProductRow product={product} key={product?.name} />);
		lastCategory = product?.category;
	});
	return (
		<div>
			<table className=' w-full border border-black border-collapse'>
				<thead className='border border-black'>
					<tr className='border border-black'>
						<th className='border border-black'>Name</th>
						<th className='border border-black'>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
	);
};
