# Backend Test

## Introduction
This project should be easy, the minimum structure is done. We already build: a login/authenticate endpoint and a file which manage connection to mongo. 

## For backend developer
For back end, it will be on evaluation all items below and the follow items too:
- Organization;
- Structure folder/files/function; 
- Linting
- POST endpoint to create new farm
- Must build a GET /challenge/encode/:number, this endpoint should transform number into a code, which has fix number of char.
- Must build a GET /challenge/decode/:code, this endpoint should transform code into a original number.

Example of encode/decode:
```
GET /challenge/encode/1234
return ABCDEF

GET /challenge/decode/ABCDEF
return 1234
```

Maximum number is 99999999 (8's 9). The code can contain a-z, A-Z, 1-9, !@#$%*()\|-_=+^/?

As you can see we have 26+26+9+17=78 possible chars. 

PS: You're free to improve/alter this project and using mongo is not optional.

## For frontend/full-stack developer
For front end, it will be on evaluation items below:
- If Server it's up
- Must exist 404 response in case there's no endpoint corresponding
- Build GET endpoints for you frontend project

PS: You may not use mongo connection to get response;
