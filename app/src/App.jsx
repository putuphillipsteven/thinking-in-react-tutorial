import { FilterableProductTable } from './components/filterable-product-table/container';
import { PRODUCTS } from './components/filterable-product-table/utils/product';

function App() {
	return (
		<div className='bg-gray-200 max-w-screen min-h-screen flex flex-col justify-center items-center p-4 gap-y-2'>
			<div className='header p-2'>
				<h1 className='font-mono font-semibold text-3xl'>Thingking In React</h1>
			</div>
			<div className='body'>
				<FilterableProductTable products={PRODUCTS} />
			</div>
		</div>
	);
}

export default App;
