# Frontend Test

## Introduction

This project should be easy, the minimum structure is done. We already build: a login/authenticate system with JWT (saved on localStorage).

## Frontend developer

For front end, it will be on evaluation all items bellow and the follow items too:

- Organization
- Structure folder/files/function
- Linting
- Atomic design
- Responsiveness (only desktop)
- You have to make a dynamic chart (You are free to use any library you'd want) with a selector on top, it should alternate between the NDVI and precipitation data (`data/farms_ndvi.csv` and `data/farms_precipitation.csv`).

Rules:
  - The selector should be mounted based on the `client/src/config/chart_selector.json` file;
  - You should use every bit of information that is available in that file;
  - You can transform the .csv data into a JSON;
  - We'd rather that you'd make a request for getting the chart data, but you can consume directly from the frontend;
  - It should be dynamic, we'll be testing that.

You can use any design system (or even use native HTML), but we'll evaluate you on a minimal design level.

PS: You're free to improve/alter this project.

## Backend/full-stack developer

For back end, it will be on evaluation items below:

- If Server it's up
- Must exist 404 response in case there's no endpoint corresponding
- Build a simple CRUD backend
