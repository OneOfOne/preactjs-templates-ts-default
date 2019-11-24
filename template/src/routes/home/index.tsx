import { h, FunctionComponent } from 'preact';

const style: any = require('./style.css');

const Home: FunctionComponent = () => (
	<div className={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
	</div>
);

export default Home;
