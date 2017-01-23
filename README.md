# Muque

Muque is a boilerplate to front-end projects to help the developers/teams to gain time during the product development. It was projected to be used in websites or web applications.

Feel free to use and change this boilerplate according your necessities.

## How Muque works

This project uses [Gulp](http://gulpjs.com/) as task manager, [Bower](https://bower.io/) to manage the front-end dependencies and [Stylus](http://stylus-lang.com/) to CSS preprocessing.

Muque was built in a modularized way, aiming offer to developers/teams a workflow with an easy to understand and maintainable code.

## Docker support

The version 1.2.0 brought the Docker support! The project contains a Dockerfile based in the [official Node.js image](https://hub.docker.com/_/node/).

This Dockerfile creates and defines a working directory, copies the Muque's _package.json_ file to this directory, installs the necessary global packages and Muque's dependency packages and maps the ports to enable the host/container communication.

To build the image, you should run the command below:

```shell
docker build -t the-name-you-want .
```

To run a container based in the built image, run the recommended command below:

```shell
docker run --name the-name-you-want -d -v $(pwd):/muque -p 3000:3000 -p 3001:3001 the-name-you-want gulp
```

Otherwise, if you use Node.js and NPM in your local host and you don't use Docker, you just need to run the _npm install_ command to install the dependent packages.

**Remember:** you can add packages or change folder names according your necessities.

## Tasks

Muque has tasks to development environments (tasks finished in _:dev_) and tasks directioned to production environments (tasks finished in _:dist_).

Muque also has some auxiliar tasks to help the developers/teams with activities like deploy to [GitHub Pages](https://pages.github.com/) and cleaning the project output folder.

The tasks are located in the _/src/tasks_ folder. The tasks supported are:

- _**gulp:**_ the default task, that runs the _server:dev_ task;

- _**gulp build:**_ clean the project's output folder and run the _:dist_ tasks, building the project to deploy in production environment;

- _**gulp clean:**_ this task cleans the project's output folder;

- _**gulp deploy:**_ this task builds the project to production environment with the _build_ task and execute the project's deploy to the [GitHub Pages](https://pages.github.com/). It's necessary manual input of the GitHub repository that will receive the static files and, if necessary, the CNAME value.

- _**gulp images:dist:**_ minify the project's images;

- _**gulp scripts:dev:**_ generate a single and not-minified _application.js_ file to the project. Recommended to development environment;

- _**gulp scripts:dist:**_ generate a single and minified _application.js_ file to the project. Recommended to production environment;

- _**gulp server:dev:**_ run a local [Browsersync](https://browsersync.io/) webserver, watching the changes in the _application.js_ and _style.css_ files with live reloading. Use in development environments;

- _**gulp server:dist:**_ build the project to production environments with the _build_ task and run a local Browsersync webserver with the files that will go to the production environments to have a preview of what's happening;

- _**gulp styles:dev:**_ generates a single and not-minified _style.css_ file to the project. Recommended to development environments;

- _**gulp styles:dist:**_ generate a single and minified _style.css_ file to the project. Recommended to production environments.

## To do list
- [ ] PostCSS support
- [ ] Babel support
- [ ] ES2015 syntax
