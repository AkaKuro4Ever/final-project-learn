# README

Welcome to the Non-Instant Chat App, a React-Redux project! Here, you'll be able to communicate with others in a single-page application chatroom, using a Rails API Backend and React/Redux front-end.

To get started, clone the repo, and then run ```rake start```.

Be sure to sign-up and sign in. Just type in any name you'd like, and then type it again in the login text field. It's currently not designed to handle passwords or a lack of user before typing in a message (but no worries, the developer is well aware). Have fun and become as many different users as you'd like!

Big warning - since WebSockets is not being used right now in this, the update of multiple user messaging is not in real time. You need to refresh constantly. Apologies for this!!!

Link to video demo/walkthrough: https://youtu.be/RqjiMlEZ54g

Blogpost about the Project:

https://akakuro4ever.github.io/the_final_project

* Ruby version: 2.3.3, dependent on rack, rails, sqlite3, react-redux
