<h1 align="center">Tech Diversity</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/martosaied/fibonacci-nest-rest?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/martosaied/fibonacci-nest-rest?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/martosaied/fibonacci-nest-rest?color=56BEB8">
</p>


<p align="center">
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="https://github.com/martosaied" target="_blank">Author</a>
</p>

<br>

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