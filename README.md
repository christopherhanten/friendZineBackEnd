<h1>friendZine</h1>

<h3>Post Project Presentation to dos.</h3>
1. Add icons for addMusic and addLink.<br/>
2. Add hamburger icon with the following options:<br/>
     ---Home<br/>
     ---Add Music to the Conversation<br/>
     ---Add Link to the Conversation<br/>
     ---About the Project<br/>
     ---About Chanten<br/>
     ---Exit<br/>
3. Stylize with Bootstrap and/or Reactstrap<br/>
4. Make Comment work.<br/>
5. Make Conversation work.<br/>
6. Make addMusic and AddLink pages and get them routed.<br/>
7. Make addMusic and AddLink pages add to the Conversation.<br/>
8. Create, style, route and wire getURL button up.<br/><br/>   
9. 

Trello board specified to this work:<br/>
https://trello.com/b/DCXEczCS/friendzine-post-presentation<br/>

__________________________________________________________________________________________________________________________
<br/>
<b>Key Terms:</b><br/>
<b>User</b>              : Human interatcting with the application<br/>
<b>Conversation</b>      : The place where all inputs to the application are rendered.<br/>
<b>Comment</b>           : The basic input type.<br/>
<b>Comment with link</b> : An input type that allows for a Comment w/ a specified output of URL.<br/>
<b>Get URL</b>           : A way for the User to share the URL of the specific instance of friendZine with others.<br/>

______________________________________________________________________________________________________________________________
<b>Concept</b><br/><br/>
<b>friendZine</b> is a Facebook-like application for small groups, with a predetermined membership. The User will log in to share Comments, ideas, pictures, links, and what they are listening to, watching or reading. The main component of the application is called the Conversation. It is a feed of all of the inputs given to the app. The User can add to the Conversation by directly adding Comments in a provided field. They can also click icons for music, reading, tv, and links, to add them to the Conversation.<br/><br/>

<b> A note about this app</b><br/>
There are any number of apps like Slack, Hangouts, Zoom or UberConference, or Facebook itself, obviously,  that can handle the functionality that I am offering with friendZine. The difference lies in the idea that we can talk to our friends and family without all of the advertising, without of of the interest tracking. With friendZine you have a place to go to simply communicate with those you care about. This has lead to the tagline: "Taking Our Network Back."<br/><br/>

<b>Target User</b><br/>
The target user for this application is someone who already uses other social media platforms as a way to communicate with thir friends and family, but have grown tired of all of the advertising pushed upon them and the tracking on their traffic. They want to go back to a simpler time in social networking. This app can be used by children to communicate with theiur families who haven't yet let them have other social media experiences. It can also be easily understood and used by members of the silver communitiy who do not have the capability, or desire, to engage in the more common social media outlets.<br/><br/>

The <b>minimum viable product</b> for this application will consist the Conversation, a comment text field, complete with submit button, a music button, a link button, a menu icon, and a sign out button.<br/><br/>

A stretch goal is to implement sign in / sign out functionality.<br/>
______________________________________________________________________________________________________________________________
<b>Plans</b><br/><br/>

<b>Trello:</b> https://trello.com/b/NWAYqh3P/friendzine <br/><br/>
<b>User Stories:</b> https://github.com/christopherhanten/friendZineBackEnd/blob/master/userStories.md<<br/><br/>
<b>Initial and MVP wireframes:</b><br/>
https://github.com/christopherhanten/friendZineBackEnd/blob/master/friendzineapi/images/wireframes.png
<br/><br/>
<b>Some pseudocoding and relationship mapping</b><br/>
https://github.com/christopherhanten/friendZineBackEnd/blob/master/friendzineapi/images/psuedoerd.png<br />
https://github.com/christopherhanten/friendZineBackEnd/blob/master/friendzineapi/images/newsss.jpg<br />
https://github.com/christopherhanten/friendZineBackEnd/blob/master/friendzineapi/images/newss.jpg<br/>

<b>Code</b><br/>
Backend:<br/>
https://github.com/christopherhanten/friendZineBackEnd<br/>
Frontend<br/>
https://github.com/christopherhanten/friendZineFrontEnd<br/><br/>

______________________________________________________________________________________________________________________________
<b>Back-End Technologies</b><br/>
MongoDb: Database<br/>
Express.js: Server<br/>
Node.js: Backend framework<br/>
MLabs: To get backend initially connected<br/>
Heroku: Host up the backend<br/><br/>

<b>Front-End Technogies</b><br/>
React.js<br/>
Bootstrap<br/>
HTML/CSS<br/>
Flexbox</b><br/>
Surge: For frontend hosting <br/><br/>
<i>stretch goal</i><br/> Bcrypt: Authentication and sign on<br/><br/>

______________________________________________________________________________________________________________________________
<b>ROUTES</b><br/>

|HHTP|route|
|:-----|:-------|
|GET |/index|
|POST|/index|
|GET|/addMusic|
|POST|/addMusic|
|GET|/addLink|
|POST|/addLink|
|PUT|/comment|
|DELETE|/comment|

______________________________________________________________________________________________________________________________
<b>Shoutouts</b><br/>
I took quite a bit of my code from here:<br/>
https://medium.com/@learnreact/container-components-c0e67432e005<br/>

I also jacked some code from Lilian:<br/>
https://github.com/LillianChernin/lilys-library-back-end<br/>
She also was a big help in getting my backend up on Heroku.<br/>

Scott helped me with Flexbox, Marcy gave me a hand styling.<br/>
Max had some helpful hints on Flexbox as well.<br/>
Jake and Marcy broke down a problem that I was having at home, and helped me fix it<br/>

Also, big shout out to Neo, for helping me get my front end deployed.
