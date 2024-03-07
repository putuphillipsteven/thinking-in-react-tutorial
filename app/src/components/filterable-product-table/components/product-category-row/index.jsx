export const ProductCategoryRow = ({ category }) => {
	return (
		<tr>
			<th colSpan={2} className='border border-black p-2'>
				{category}
			</th>
		</tr>
	);
};
