import { ProductTable } from '../components/product-table';
import { SearchBar } from '../components/search-bar';

export const FilterableProductTable = ({ products }) => {
	return (
		<div className='p-2 flex flex-col items-center gap-y-4'>
			<div className='header'>
				<h2 className='text-xl font-semibold font-mono'>Filterable Product Table</h2>
			</div>
			<div className='body flex flex-col gap-x-2'>
				<SearchBar />
				<ProductTable products={products} />
			</div>
		</div>
	);
};
