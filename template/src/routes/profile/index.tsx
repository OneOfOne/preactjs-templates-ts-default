import { h, Component } from 'preact';

const style: any = require('./style.css');

interface props {
	path: string;
	user?: string;
}

interface state {
	time: number;
	count: number;
}

export default class Profile extends Component<props, state> {
	timer: any;
	constructor(props: props) {
		super(props);

		this.timer = null;
		this.state = {
			time: Date.now(),
			count: 10,
		};
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user, path }: props, { time, count }: state) {
		return (
			<div className={style.profile}>
				<h1>
					Profile: {user}{' '}
					{path ? (
						<small>
							<strong>{path}</strong>
						</small>
					) : null}
				</h1>
				<p>This is the user profile for a user named {user}.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment}>Click Me</button> Clicked {count} times.
				</p>
			</div>
		);
	}
}
