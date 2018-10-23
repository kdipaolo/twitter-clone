# Twitter Clone
- Front End: https://client-ronxymwltt.now.sh/
- API: https://dipaolo-tsc.herokuapp.com/graphql


## Setup 

### Client setup
1. `cd client`
2. `yarn`
3. `yarn start` 
4. This will use the server API that I have deployed here: https://dipaolo-tsc.herokuapp.com/graphql . If you would like to use the server locally.  Follow server setup and change `REACT_APP_APOLLO_URL` in `client/.env` to `http://localhost:8888/graphql`


### Server setup
1. `cd server`
2. `npm install`
4.  On start up, server is set to populate the postgres database with seed data (users and tweets), to avoid this go to `server/src/index.js` and change the `freshDatabase` const to `true`
3. `npm start`



## General Guidelines
- Your technology choices are your own to make, but be aware someone here will need to pair with you on this project.
- Commit often so we can see your progression.
- We are most interested in how you choose to test your application
- Make it easy for us to run your project locally.
- Please do not publicize the assignment.
- We're aware there are public implementations of these assignments. We'd like it to be obvious this is your own work and not copied from somewhere on the Internet.
- Don't hesitate to ask questions if you get stuck.

## Assignment: Make Twitter

This assignment is an application that mimics a simple subset of Twitter:
- Allow a user to sign-up and sign-in
- Allow posting a short message
- Allow following another user
- Allow viewing a unified timeline of all their followers' posts

## Bonus points:
- Deploy the app to heroku
- Unfollow users
- Display links to images inline
- Block users
- Email account verification
- Forgot password email

## When you're done
Please send us the link to your code (e.g. in github) and the link to your running app on Heroku.

