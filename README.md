<h1 align="center">Tech Diversity</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/martosaied/fibonacci-nest-rest?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/martosaied/fibonacci-nest-rest?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/martosaied/fibonacci-nest-rest?color=56BEB8">
</p>


<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="https://github.com/martosaied" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

This is a Rest implementation for a Fibonacci calculator. I used a simple algorithm combined with caching values on memory. This allow me to speed up the caluclation by caching the previous values.
I also cache the http calls.

I decided to use NestJS since it has a pretty easy installation process and cames with a lot of helpful packages and some boilerplate code to set-up the basics even faster.
Also because it's my daily working frameworks that i use on microservices and i feel very comfortable using it.

I also decided using a 3rd party package to cache results and calls to have more reliability on that part.

I added validation for non-integer values or strings.

## :sparkles: Features ##

:heavy_check_mark: In-memory cache \
:heavy_check_mark: Per-endpoint cache

## :rocket: Technologies ##

The following tools were used in this project:

- [NestJS](https://nestjs.com/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://es.reactjs.org/)
- [MaterialUI](https://material-ui.com/)

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/Martosaied/tech-diversity

# Access
$ cd tech-diversity

# Go to docker folder
$ cd docker

# Build docker containers
$ docker-compose up --build

# Once containers are up, execute migrations
$ docker exec tech-diversity-api npm run migrate

# The web will initialize in the <http://localhost:3000> and the api in the <http://localhost:8000>
# WARNING: this dockerization requires to rebuild images on each api change. This is not ideal but is enough for easy testing and review 
```


&#xa0;

<a href="#top">Back to top</a>