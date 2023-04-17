<h1 align="center">Blog-It</h1>

 <!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#compatible-platforms">Compatible Platforms</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
       <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#navigating-through-the-app">Navigating through the App</a></li><ul>
        <li><a href="#login">Login and SignUp</a></li>
        <li><a href="#home-page">Home Page</a></li>
        <li><a href="#create-blog">Create a Blog</a></li>
        <li><a href=”#particular-blog”>Particular Blog</a></li>
      </ul>
    <li><a href="#future-scope">Future Scope</a></li>
    
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
* It is a webApp in which users can create blogs
* A user can create account, login, rate movies, get recommendations, add movies to Watchlist and check about the cast and crew of a particular movie using the tmbd API.

### Problem Statement
Demonstrate through your app the different kinds of algorithms that a web-streaming app (like Netflix) or an audio-streaming app (like Spotify) may use for their Recommendation Engine.

### Compatible Platforms
Laptops and Desktops.

### Tech Stack  
1.Front-end: HTML, CSS, Bootstrap, JavaScript
2. Back-end: Django



<!-- INSTALLATIONS -->

## Getting Started
To install and run the project on your local system, clone this repo to your local machine and open command prompt and go to that path:

### Installation
```sh
  pip install -r requirements.txt
```
* To run it on the local host-

To separately run the application on your local host,run the following command:

```sh
  Python manage.py runserver
```

<!-- APP TUTORIAL-->
## Navigating Through The App
### Login 
Registered Users can login into their account using the username and password and can start rating the movies and then get recommendations.

<img src="images/login-screen.png" alt="login screen" width="700"/>
 
### Home Page-
This page displays all the movies and users can click on the movie and give ratings and add them to list or can see the cast and crew of the movie. 

<img src="images/Home-screen.png" alt="video call welcome screen" width="700"/>

### Get Recommendations-
Registered users will get some recommendations based on the rating given by them by clicking on the button 'Get Recommendation' to get some recommendations.

<img src="images/recommendation-window.png" alt="blank chat window" width="700"/>


<!-- FUTURE SCOPE -->

## Future Scope

The recommendation system can be improved using model based collaborative filtering which is based on matrix factorization (MF). A well-known matrix factorization method is Singular value decomposition (SVD). At a high level, SVD is an algorithm that decomposes a matrix A into the best lower rank (i.e. smaller/simpler) approximation of the original matrix A. Mathematically, it decomposes A into a two unitary matrices and a diagonal matrix


