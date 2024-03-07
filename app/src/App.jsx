import { FilterableProductTable } from './components/filterable-product-table/container';

function App() {
	return (
		<div className='bg-gray-200 max-w-screen min-h-screen flex flex-col items-center p-4 gap-y-2'>
			<div className='header p-2'>
				<h1 className='font-mono font-semibold text-3xl'>Thingking In React</h1>
			</div>
			<div className='body'>
				<FilterableProductTable />
			</div>
		</div>
	);
}

export default App;
