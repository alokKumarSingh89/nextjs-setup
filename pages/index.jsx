import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import withLayout, {Layout} from "../component/Layout";

const Index=props => (
	<Layout>
		<h1>Batman tv show</h1>
		<ul>
			 {
				props.show.map(show => (
					<li key={show.id}>
						<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
							<a>{show.name}</a>
						</Link>
					</li>
				))
			}
		</ul>
	</Layout>
)

Index.getInitialProps=async () =>{
	const res=await fetch('https://api.tvmaze.com/search/shows?q=batman');
	const data= await res.json();
	console.log(`Show data count:${data.length}`);
	return {
		show: data.map(entry => entry.show)
	}
}

export default Index//withLayout(Index);