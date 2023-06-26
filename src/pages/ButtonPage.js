import { GoBellFill, GoCloud, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
	const handleClick = () => {};
	return (
		<div>
			<div>
				<Button
					secondary
					outline
					rounded
					className="mb-5"
					onClick={handleClick}
				>
					<GoBellFill />
					Click me!
				</Button>
			</div>
			<div>
				<Button danger outline>
					<GoCloud />
					Buy Now!
				</Button>
			</div>
			<div>
				<Button warning>
					<GoDatabase className="mr-1" />
					See Deal!
				</Button>
			</div>
			<div>
				<Button secondary outline>
					Hide Ads!
				</Button>
			</div>
			<div>
				<Button primary rounded>
					Something!
				</Button>
			</div>
		</div>
	);
}

export default ButtonPage;
