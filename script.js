const width = window.innerWidth;
const height = window.innerHeight;

const randomWidth = Math.floor(Math.random() * (width / 2));
const randomHeight = Math.floor(Math.random() * (height / 2));

console.log(`Width: ${width}px, Height: ${height}px`);
console.log(`Random width: ${randomWidth}px, Random height: ${randomHeight}px`);

const showEye = () => {
	// Get the current screen size by width and height
	const width = window.innerWidth;
	const height = window.innerHeight;

	// Get random width and height. Divide by 2 so it can fit for positioning
	const randomWidth = Math.floor(Math.random() * (width * 0.8));
	const randomHeight = Math.floor(Math.random() * (height * 0.8));

	// Eyes element
	const eyes = document.getElementById('eyes');

	// Set its positioning
	eyes.style.left = `${randomWidth}px`;
	eyes.style.top = `${randomHeight}px`;

	// Show the eye
	eyes.style.display = 'block';
};

// Hides the div containing the welcome content
const hideWelcomeContainer = () => {
	const welcomeContainer = document.getElementById('welcome-container');
	welcomeContainer.style.display = 'none';
};

// Add event listener for the door
document.getElementById('door-button').addEventListener('click', () => {
	// Show the eye for 3.6 seconds and disable the pointer events at that duration so the user cant click the door multiple times
	showEye();
	document.body.style.pointerEvents = 'none';
	
	setTimeout(() => {
		hideWelcomeContainer();
		document.body.style.pointerEvents = 'auto';
	}, 3600)
});