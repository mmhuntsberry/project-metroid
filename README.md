# Project Metroid

## Table of Contents
- [Uses](#uses)
- [Getting Started](#getting-started)
- [Docker and MySQL](#docker-and-mysql)
- [Updating the Schema](#updating-the-schema)



## Uses
This project uses:

**React** - A JavaScript library for building user interfaces. Uses Create React App.
**Emotion** - Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.
**Prettier** - An opinionated code formatter.
**ESLint** - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
**Stylelint** - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
**Node** - Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.
**GraphQL** - An open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015. 
**MySQL** - MySQL is an open-source relational database management system. 
**Docker** - Docker is a set of platform as a service products that uses OS-level virtualization to deliver software in packages called containers. 

## Getting Started

The application is split up between three different services.  The `client`, `server` and the `database`.

You can serve each the client and server individually.  The client and server you can serve up simply navigating to their respective directory and running:

```
yarn start
```

For example, if you are in the root of the project, navigate to the client folder and run `yarn start` to get the React frontend running.  

You can view your React frontend at `localhost:3000` and your graphql-playground at `localhost:4000`.

## Docker and MySQL

Assuming you have Docker installed this application is designed to spin up the Client(React), the Server(Node, GraphQL), and MySQL in a Docker container using a `docker-compose.yml` file.

Let's spin them up!

First, in the `/server/primsa` directory.  We need to create a `.env` in here your credentials for our MySQL database will be stored. Since at the moment we are hosting our DB locally in a Docker container our credentials are secret.  Add this line to your `.env` file.
```
DATABASE_URL="mysql://root:password@db:3306/test"
```

In the root of the project, in the `package.json` file, you'll find three scripts.  You can `docker-compose up` or `docker-compose down` individually or do both and clean your local environment of any dangling images(recommended).

Simply run, 
```
yarn start:clean
```

This command will spin down any already running container, prune them from memory, then rebuild them. 

Once your containers are up and running you can visit your `graphql playground` at `http://localhost:4000/` and if you have a database management system such as MySQL Workbench you can see a visual representation of your data.

In order to view your data in MySQL workbench you need to configure your connection.  For development purposes, mySQL persists its data on your local machine in a `.data` file in the root of your project.  The `.data` directory should be automatically seeded with whatever tables and data you have specified in the `/sql/sql-scripts` directory.

MySQL development configuration
```
connection name: project-metroid
host: 127.0.0.1
user: root
password: password
default schema: test
```

_note:_ If you're using a windows machine your host will be whatever the docker machine ip is hosting the db.

## Updating the Schema
If you need to make a change to the Schema for any reason, please follow these steps until we can automate the process.  

- Step 1
In the projects root directory run:
  ```
  yarn down
  ```
  This will kill any running docker containers.

- Step 2
Navigate to `/server/prisma` and in the `.env` file replace the database address which in this case is `db` with `127.0.0.1`.  Resulting in our `DATABASE_URL` now looking like this:
  ```
  DATABASE_URL='mysql://root:password@127.0.0.1:3306/test'
  ```
- Step 3
We need to start up our server and database again.  In the root of our project, run: 
  ```
  yarn start:clean
  ```
  If you're wanting to start with new data be sure to delete `.data` directory.

- Step 4
Make whatever changes you need to your schema.

- Step 5
Back in the `/server/prisma` directory, we need prisma to take in our new schema changes and we do so by running: 
  ```
  npx prisma introspect
  ```
  and 
  ```
  npx prisma generate
  ```
- Step 6
We need to switch our database url back to what it was originally. We can do this by first running:
  ```
  yarn down
  ```
  In `/server/prisma/.env` file change the `DATABASE_URL` to:

  ```
  DATABASE_URL="mysql://root:password@db:3306/test"
  ```
- Step 7
Spin up docker containers in the root of the project.
  ```
  yarn start:clean
  ```


