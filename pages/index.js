import Link from 'next/link'
import Layout from '../components/someLayout'
import PostLink from '../components/postLink'

const styles = { 
	color: 'green', 
	fontSize: 12, 
	padding: 24,
	borderRadius: 8,
	background: 'white',
}

const Index = () => (
	<div>
		<Layout>
			<h1>Next blog</h1>
			<ul>
				<PostLink title='Hello world'></PostLink>
				<PostLink title='Learning next.js'></PostLink>
				<PostLink title='Deploy apps with zeit'></PostLink>
			</ul>
		</Layout>
	</div>
)

export default Index
