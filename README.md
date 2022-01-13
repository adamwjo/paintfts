# Thinking In React
## The Deliverables
- Create a piece of state that houses the array of painting data provided.
	- When deciding which your component you should define this in, refer to your component map to determine which components will need access to this data, and place it in a "parent" component they have in common.

 - Use the paintings array in state, create a "Painting Card" for every object in that resides there.

 - Create a piece of state that will house the "search term". 

 - Have the SearchBar component use an `onChange` event listener to capture the value from the input, and store it in the piece of state you defined for the "search term"
	 - Think of callback functions and passing them around using props

- Finally use the `.filter()` method to create an array of paintings who's title contain the characters in the "search term" piece of state.. and render those instead!




## Getting Started


In the project directory, run:

### `npm install && npm start`

- This command runs the paintfts  app in the "development mode".
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- The page will reload when you make changes.\
You may also see any lint errors in the console.

### Step 1.) Create a Component Hierarchy Map
- Using whatever software you'd like (I use lucidchart) create a component hierarchy map based on the current way the app is set up. Remember to use your [react developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to help take a closer look at your components.

### Step 2.) Look at the Deliverables and decide where you should define state


### Step 3.) Give it your best shot!
