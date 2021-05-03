# HUON D'AUVERGNE DIGITAL ARCHIVE

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview of the Project
Version 3.0 of the Huon Digital Archive includes a thorough overhaul to the ReactJS framework in order to support the dynamics requirements of a scholary collaborative element in which users will be able to leave annotation postings and administators will be able to approve/disprove those annotations through their own respective portal. The Huon Digital Archive is a project that is meant to portray the scholarly translations of this Franco-Italian poem that has been translated by a group of professors who have now moved their work to a virtual platform. We were involved specifically in the version 3.0 changes that were mentioned above. 

## File structure
The top level contains the largest and most important files folders. Firstly, the files consist of a README as well as the package files which help npm know what to install in regards to packages when you first pull the program from GitHub. The build folder contains the optimized code that you would want to upload to a server. The node_modules folder contains every package and their dependencies that are used. For example, this folder includes the firebase package, React bootstrap, and many many more. The public folder contains most of the resources we used whether they be images, manifests for Mirador, the xml documents containing the texts and their respective notes, and the mirador files themselves. Finally comes the src folder which I will go over in the next paragraph. 

The public folder contains all of the pages that are able to be viewed. Firstly we will go over the files immediately in the folder. The App.css file just styles the app window that shows the webpage and should not be tinkered with. The App.js file controls every viewable page on the website. If you want to add a new page to the website, you would import it at the top and add a Route for it as well. The index.css file contains all of the styling for every page that is viewable. If you want to change the css for the whole website, you would do it here. The index.js file is just to make sure the app starts running and also should not be tinkered with. 

Now we will get to the folders in the src folder. The annotator folder contains all of the code that manages annotations. The components folder contains the code for the navigation bar and footer. The data folder contains one file but this file is also vital for adding any new pages. This file contains all of the urls to each viewable page. The pages folder is a big one. This folder contains every page for the website. The folder is organized by the different dropdown menus which should make it easy to find each file. The pluginsForMirador folder contains the plugins for mirador. 

## Implemented Features
The already implemented features consist of the entirety of the website prior to our involvement. This has taken up a majority of our time as we had to overhaul the website in its entirety over to ReactJS whilst deciphering their code base and fixing errors whilst coming across them. 
## Not Yet Implemented Features
The not yet implemented features consist of the collaborative element that will host the slew of functionality that will enable users to annotate and make postings alongside their annotations. This is in the works and you will see code that has begun to integrate this functionality within the system. In it is currently in its developement phase and is not complete. The other unimplemented feature is the administration portal as that was pushed off as we had to get the entire website over to React. This portal will be added in the coming week(s).
## Dependencies
In terms of dependencies we have made this incredibly easy for users and those who are intrigued by the functionality of our code. We recommend you use Visual Studio Code, Git, Node, and NPM. NPM makes this very easy because all dependencies will be automatically kept up to date and tied in for full support of the website's functionality. 
## Instructions for Compilation
Please see the available scripts below. npm start -> will build and compile the entirety of the website within your localhost. 
## Instructions for Running
Please refer to the above section, and look at the available scripts portion below. In order to run our software all that is needed is to run the instructions for compilation and then to enjoy the website, there are no active inputs needed to keep running our website. Feel free to interact with all of our functionality. 

## Additional Info
This repository was created to better group our files in sight of the interim code assignment, commit history is not accurate to the actual development of the software shown. You were added to the hda-test repository as well if you would like to see the actual "working" repository. However the same contents will be shown. 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\