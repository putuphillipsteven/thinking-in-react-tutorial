import { useState } from 'react';
import { ProductTable } from '../components/product-table';
import { SearchBar } from '../components/search-bar';

export const FilterableProductTable = ({ products }) => {
	const [filterText, setFilterText] = useState('');
	const [inStockOnly, setInStockOnly] = useState(false);

	return (
		<div className='p-2 flex flex-col items-center gap-y-4'>
			<div className='header'>
				<h2 className='text-xl font-semibold font-mono'>Filterable Product Table</h2>
			</div>
			<div className='body flex flex-col gap-y-2'>
				<SearchBar
					filterText={filterText}
					inStockOnly={inStockOnly}
					onFilterTextChange={setFilterText}
					onInStockOnlyChange={setInStockOnly}
				/>
				<ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
			</div>
		</div>
	);
};
