export const SearchBar = () => {
	return (
		<form className='flex flex-col gap-y-4'>
			<input type='text' placeholder='Search Product...' className='px-2 py-1' />
			<label>
				<input type='checkbox' /> Only show products in stock
			</label>
		</form>
	);
};
