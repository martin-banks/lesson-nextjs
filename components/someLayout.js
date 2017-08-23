import Header from './header'

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: 'solid 5px #bada55',
	borderRadius: 8,
}

const Layout = props => (
	<div style={ layoutStyle }>
		<Header />
		{ props.children }
	</div>
)

export default Layout
