$('#quiz').quiz({
	//resultsScreen: '#results-screen',
	//counter: false,
	//homeButton: '#custom-home',
	counterFormat: 'Question %current of %total',
	questions: [
		{
			q: '80% of the world population is affected by light pollution.',
			options: ['True', 'Flase'],
			correctIndex: 0,
			correctResponse: 'That is correct!',
			incorrectResponse: 'Nope, 80% the world is affected by light pollution.',
		},
		{
			q:
				'What kind of light pollution cause dim objects in your field of view to be harder to see?',
			options: ['Skyglow', 'Trespass', 'Glare'],
			correctIndex: 2,
			correctResponse: 'Correct!',
			incorrectResponse: 'No, actually, it is glare',
		},
		{
			q:
				'Which type of pollution is created by light scattering in the atmosphere?',
			options: ['Clutter', 'Skyglow', 'Uplight'],
			correctIndex: 1,
			correctResponse: "That's right!",
			incorrectResponse:
				'Uplight and clutter can contibute, but scattered light causes skyglow.',
		},
		{
			q: 'Which is not a way to reduce light pollution from exterior lights?',
			options: [
				'Keep them fully shielded.',
				'Use LED light bulbs.',
				'Be no brighter than necessary.',
			],
			correctIndex: 1,
			correctResponse: 'Correct!',
			incorrectResponse:
				'Nope. LED bulbs save energy, but they can contribute to light pollution in used improperly.',
		},
	],
});
