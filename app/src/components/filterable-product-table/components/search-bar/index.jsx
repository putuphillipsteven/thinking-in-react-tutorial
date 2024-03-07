export const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
	return (
		<form className='flex flex-col gap-y-4'>
			<input
				type='text'
				value={filterText}
				onChange={(e) => onFilterTextChange(e?.target?.value)}
				placeholder='Search Product...'
				className='px-2 py-1 font-mono'
			/>
			<label>
				<input
					type='checkbox'
					checked={inStockOnly}
					onChange={(e) => onInStockOnlyChange(e?.target?.checked)}
				/>{' '}
				Only show products in stock
			</label>
		</form>
	);
};
