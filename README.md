
# Client Management System

Backend for Client Management System.
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/articles| Get all articles |
| POST | /api/articles/user-articles | Getting all articles of user |
| PATCH | /api/articles/update | To update the article |
| POST | /user/login | To login, it will generate the token |
| POST | /user/all-users | To get all the users |


For authentication and authentication of token, token need to send in req.headers in variable 'access-token'

### Postman Testing Link
You can use following link to test API using postman
https://www.getpostman.com/collections/5d43df73491697b3c64d

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`: MongoDB URL Link

`PORT`: Port on which app to be run

`JWT_SECRET_KEY`: Secret key for JWT.