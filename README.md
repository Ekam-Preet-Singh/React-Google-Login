# React Google Login
Create a react app to login with google account. 
 - Save login data in local storage to remember user login
 - Create backend api using node and express to authenticate user
 - Published on heroku and test it on production

[Website]("https://react-google-login-ekam.herokuapp.com")

## Run it locally
1. Run `npm install` to install all the dependencies
2. Run command `npm start` to start the development server
3. Run command `noder server.js` on another terminal

## How to implement

#### Google cloud platform
1. Login to google
2. Go to [Link]("https://console.cloud.google.com")
3. Create a project
4. Go to API credential 
5. Accept consent screen
6. Create OAuth client id
7. craete `.env` file and save it as `REACT_APP_GOOGLE_CLIENT_ID`

#### Heroku publish
1. Create Procfile
2. Commit changes
3. Publish to github
4. Create heroku account and app
5. Connect it to github repo
