<p align="center">
  <img src="https://github.com/Imperial-iGEM/igem_frontend/blob/master/public/ourlogo.png" height="200"/>
</p>

# SoapLab Frontend

## SOAPLabs.io React App

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Imperial-iGEM/igem_frontend/Node.js%20CI)
![GitHub repo size](https://img.shields.io/github/repo-size/Imperial-iGEM/igem_frontend)
![GitHub search hit counter](https://img.shields.io/github/search/Imperial-iGEM/igem_frontend/goto)

Hosted and available at:
http://soaplab.io/

The react front end of our automated DNA assemble project hosted from Digital Ocean.

## getting set up 👨‍💻

Open your command line and create a directory in which you would like to work

Make a directory (recommended SoapLabFrontend)

`$ mkdir SoapLabFrontend`

change directory into your new directory

`$ cd SoapLabFrontend`

clone our repositry

`$ git clone https://github.com/Imperial-iGEM/igem_frontend.git`

change directory into cloned repositry

`$ cd SoapLabFrontend`

In the project directory, you can run:

`$ npm install`

`$ npm start`

This starts the app locally in development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits
You will also see any lint errors in the console.

## Unit tests and intergration test ✅

To test out application run in the command line terminal

`$ npm test`

this is ran on every push or pull request to the master branch, the status of which can be seen at the top of the page in a bagdge

this is made possible with github workflows located in the `.github/workflows`

## Continous Intergration ✅

We used circle CI to ensure when the master branch is updated it is built to http://soaplab.io/ ensuring the hosted website is always uptodate with the master branch

## Build Production SOAPLabs

`npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Interested in Contributing 🤔💡

We welcome everyone interested in contrubuting if your a seasoned open source professional or interested in learning something new fell free to open issues and pull requests.

If you have any specific questions feel free to send an email to the 2020 imperial igem team 🚀
> imperialigem2020@gmail.com
