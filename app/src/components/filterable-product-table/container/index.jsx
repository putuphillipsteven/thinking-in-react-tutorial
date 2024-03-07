import { SearchBar } from '../components/search-bar';

export const FilterableProductTable = ({ products }) => {
	return (
		<div className='p-2 flex flex-col items-center gap-y-4'>
			<div className='header'>
				<h2 className='text-xl font-semibold font-mono'>Filterable Product Table</h2>
			</div>
			<div className='body'>
				<SearchBar />
			</div>
		</div>
	);
};
