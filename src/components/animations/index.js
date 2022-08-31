import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

const LottieAnimation = ({
	jsonFile,
	loop = true,
	autoplay = true,
	height = 300,
	width = 300,
	isStopped = true,
	isPaused = true,
	isClickToPauseDisabled = true,
}) => {
	const defaultOptions = {
		loop: loop,
		autoplay: autoplay,
		animationData: jsonFile['default'],
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	// console.log(
	// 	'test',
	// 	loop,
	// 	autoplay,
	// 	height,
	// 	width,
	// 	isStopped,
	// 	isPaused,
	// 	isClickToPauseDisabled
	// );

	return (
		<Lottie
			options={defaultOptions}
			height={height}
			width={width}
			isStopped={isStopped}
			isPaused={isPaused}
			isClickToPauseDisabled={isClickToPauseDisabled}
		/>
	);
};

LottieAnimation.propTypes = {
	jsonFile: PropTypes.bool,
	loop: PropTypes.bool,
	autoplay: PropTypes.bool,
	height: PropTypes.number,
	width: PropTypes.number,
	isStopped: PropTypes.bool,
	isPaused: PropTypes.bool,
	isClickToPauseDisabled: PropTypes.bool,
};

export default LottieAnimation;
