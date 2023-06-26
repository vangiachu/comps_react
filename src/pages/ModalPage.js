import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = (
		<div>
			<Button onClick={handleClose} primary>
				I Accept
			</Button>
		</div>
	);
	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is an important agreement for you to accept</p>
		</Modal>
	);

	return (
		<div>
			<Button onClick={handleClick} primary>
				Open Modal
			</Button>
			{showModal && modal}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
				blandit neque, quis consequat lorem. Donec vel felis vitae mi
				condimentum semper ut ultricies tellus. Nullam at purus eu urna lobortis
				consequat sed non massa. Quisque et lobortis justo. Etiam a eleifend
				nibh, et tristique diam. Fusce id sapien placerat, blandit enim a,
				porttitor mi. Aenean finibus lacus sit amet sapien laoreet, at
				vestibulum eros facilisis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
				blandit neque, quis consequat lorem. Donec vel felis vitae mi
				condimentum semper ut ultricies tellus. Nullam at purus eu urna lobortis
				consequat sed non massa. Quisque et lobortis justo. Etiam a eleifend
				nibh, et tristique diam. Fusce id sapien placerat, blandit enim a,
				porttitor mi. Aenean finibus lacus sit amet sapien laoreet, at
				vestibulum eros facilisis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
				blandit neque, quis consequat lorem. Donec vel felis vitae mi
				condimentum semper ut ultricies tellus. Nullam at purus eu urna lobortis
				consequat sed non massa. Quisque et lobortis justo. Etiam a eleifend
				nibh, et tristique diam. Fusce id sapien placerat, blandit enim a,
				porttitor mi. Aenean finibus lacus sit amet sapien laoreet, at
				vestibulum eros facilisis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
				blandit neque, quis consequat lorem. Donec vel felis vitae mi
				condimentum semper ut ultricies tellus. Nullam at purus eu urna lobortis
				consequat sed non massa. Quisque et lobortis justo. Etiam a eleifend
				nibh, et tristique diam. Fusce id sapien placerat, blandit enim a,
				porttitor mi. Aenean finibus lacus sit amet sapien laoreet, at
				vestibulum eros facilisis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
				blandit neque, quis consequat lorem. Donec vel felis vitae mi
				condimentum semper ut ultricies tellus. Nullam at purus eu urna lobortis
				consequat sed non massa. Quisque et lobortis justo. Etiam a eleifend
				nibh, et tristique diam. Fusce id sapien placerat, blandit enim a,
				porttitor mi. Aenean finibus lacus sit amet sapien laoreet, at
				vestibulum eros facilisis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
				blandit neque, quis consequat lorem. Donec vel felis vitae mi
				condimentum semper ut ultricies tellus. Nullam at purus eu urna lobortis
				consequat sed non massa. Quisque et lobortis justo. Etiam a eleifend
				nibh, et tristique diam. Fusce id sapien placerat, blandit enim a,
				porttitor mi. Aenean finibus lacus sit amet sapien laoreet, at
				vestibulum eros facilisis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
				blandit neque, quis consequat lorem. Donec vel felis vitae mi
				condimentum semper ut ultricies tellus. Nullam at purus eu urna lobortis
				consequat sed non massa. Quisque et lobortis justo. Etiam a eleifend
				nibh, et tristique diam. Fusce id sapien placerat, blandit enim a,
				porttitor mi. Aenean finibus lacus sit amet sapien laoreet, at
				vestibulum eros facilisis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
				blandit neque, quis consequat lorem. Donec vel felis vitae mi
				condimentum semper ut ultricies tellus. Nullam at purus eu urna lobortis
				consequat sed non massa. Quisque et lobortis justo. Etiam a eleifend
				nibh, et tristique diam. Fusce id sapien placerat, blandit enim a,
				porttitor mi. Aenean finibus lacus sit amet sapien laoreet, at
				vestibulum eros facilisis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
				blandit neque, quis consequat lorem. Donec vel felis vitae mi
				condimentum semper ut ultricies tellus. Nullam at purus eu urna lobortis
				consequat sed non massa. Quisque et lobortis justo. Etiam a eleifend
				nibh, et tristique diam. Fusce id sapien placerat, blandit enim a,
				porttitor mi. Aenean finibus lacus sit amet sapien laoreet, at
				vestibulum eros facilisis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
				blandit neque, quis consequat lorem. Donec vel felis vitae mi
				condimentum semper ut ultricies tellus. Nullam at purus eu urna lobortis
				consequat sed non massa. Quisque et lobortis justo. Etiam a eleifend
				nibh, et tristique diam. Fusce id sapien placerat, blandit enim a,
				porttitor mi. Aenean finibus lacus sit amet sapien laoreet, at
				vestibulum eros facilisis.
			</p>
		</div>
	);
}

export default ModalPage;
