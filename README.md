# About

This is the source code for my website.

Please feel free to fork and use my site as a template! Credit would be appreciated.

[www.geevee.dev](https://www.geevee.dev/) is written in Typescript with Next.js and Tailwind CSS. It is an application that runs on AWS Amplify and uses Google's Realtime Database to host its content.

This app is specifically built for Docker.

# How To Run

## Docker

##### Development
Run `docker compose -f docker-compose.yml up -d`, then restart this container whenever need be. 
*note*: If you need to install new dependencies, please rerun the command above.

##### Production
Whenever changes need to be tested in production, run `docker compose -f docker-compose-prod.yml up --build -d`.

## Local

##### Development
Run `npm i && npm run dev`.

##### Production
Run `npm i && npm build && npm start`.
