## React assignment

Basic React app created by create-react-app, utilizing React Router (for user details page), fetching data from an [external API (users)](https://jsonplaceholder.typicode.com/). 

### To-do:
- [ ] Fix background flicker
- [ ] Touch up user details page
- [ ] Clean up unused files
- [ ] Double-check error handling



See this Integrify assignment's details below.
***

### Assignment Overview

The purpose of this assignment is to evaluate the candidate's understanding of basic react concepts. The main reason for using React lies in the ability to create components based on functionality set, i.e. to divide the whole app into small independent parts (components). In this assignment you will be using jsonplaceholder Api to get the users data and display it in a meaningful way.

### Api To Use

https://jsonplaceholder.typicode.com/users

### Requirements

  - Create a homepage (component) that displays some of the user information in cards.
   You can choose whatever color or design you want, and it should look similar to the image # 1 below.

  - Divide the app into smaller components. For example create a separate component for the card and separate component for the button.
  - When  you click on the button it should navigate to another page (component) showing more information about that user shown in image # 2 below.
   You can use routing   and useParams hook to achieve this. The url for single user information will look like this:
   https://jsonplaceholder.typicode.com/users/id  where id is the id for that single user.
 - Make use of the following react concepts:
- 💊 `Use Functional React component.`
- 💊 `useState`
- 💊 `useEffect`
- 💊 `useParams`

 - You can use bootstrap , vanilla css or any other framework you wish for some styling.
 - Make A PR when ready.

### How to Run
- Froked the repo as usuall and then clone it. go into the clone repo and run:
- `npm install` or `yarn install` (for yarn users)
- once the depencencies are installed run `npm start` or `yarn start` (for yarn users)

### Image # 1: Home Page

![pdfresizer com-pdf-convert](https://user-images.githubusercontent.com/7606310/104325308-2afce380-54f1-11eb-9014-6d927e1fd5b5.jpg)


### Image # 2: User detail page

![pdfresizer com-pdf-convert (1)](https://user-images.githubusercontent.com/7606310/104325369-3f40e080-54f1-11eb-8226-943fce2f4385.jpg)
