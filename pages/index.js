import Link from 'next/link'

const Index = () => (
	<div>
		<p>Hello world</p>
		<Link href='/about'>
			<button style={{ color: 'red' }}>Link to about page</button>
		</Link>
	</div>
)

export default Index
