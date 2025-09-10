# EXPRESS SERVER

-> Create a repository
-> Initialize the repository
-> node_modules, package.json, package-lock.json
-> Insatll express
-> Create server
-> Listen to port 3000
-> write request handlers for /test, /hello
-> Install nodemon and update scripts inide package.json
-> what are dependencies
-> what is the use "-g" while npm install
-> Difference between (^ and ~)

# ROUTING & REQUEST HANDLERS

-> Initialize git
-> .gitignore
-> Create a remote repo on github
-> Push all code to remote origin
-> Play with routes and route extensions ex. /hello, /, hello/2, /xyz
-> Order of the routes matter a lot
-> Install Postman app and make a workspace/collection > test API call
-> Write logic to handle GET, POST, PATCH, DELETE API Calls and test them on Postman
-> Explore routing and use of ?, +, () , * in the routes
-> Use of regex in routes /a/, /.*fly$/
-> Reading the query params in the routes
-> Reading the dynamic routes

# MIDDLEWARES & ERROR HANDLERS

-> Multiple Route Handlers - Play with the code
-> next()
-> next function and errors along with res.send()
-> app.use("/route", rH, [rH2, rH3], rH4, rH5);
-> what is middleware ? why do we need it
-> How express Js basically handles requests behind the scenes
-> difference betweeen app.use and app.all
-> write a dummy auth middleware for admin
-> write a dummy auth middleware for all user routes, expect /user/login
-> Error handling using app.use("/", (err,req, res, next) = {});

# DATABASE, SCHEMA & MODELS MONGOOSE

-> Create a free cluster on MongoDB official website (Mongo Atlas)
-> Install mongoose library
-> Connect your application to the database "connecttion-url"/devTinder
-> call the connectDB function and connect to database before starting application 3000
-> Create a userSchema & user model
-> Create POST /signup API to add data to database
-> Push some documents using API calls fro postman
-> Error handling using try and catch

# DIVING INTO APIs

-> Difference between JSON & JS object
-> Add the express.json() middleware to your app
-> Make your signup API dynamic to receive data from the end user
-> User.findOne with duplicate email ids, which object returned
-> API - Get user by email
-> API - Feed API - GET /feed - get all the users from the database
-> API - get user by Id
-> Create a delete user API
-> Difference between PATCH and PUT
-> API - Update a user
-> Explore the Mongoose Documentation for Model methods
-> What are options in a Model.findOneAndUpdate method, explore more about it
-> API - Update the user with email ID

# DATA SANITIZATION & SCHEMA VALIDATIONS

-> Explore schematype options from the documentations
-> add required, unique, lowercase, min, maxLength, trim
-> Add default
-> Create a custom validations function for gender
-> Improve the DB schema - PUT all appropiate validations on each field in schema
-> Add timestamps to the userSchema
-> Add API level validation on Patch request & signup post api
-> DATA Sanitizing - Add API validation for each field
-> Install validator
-> Explore validator library function & Use functions for password, email, url
-> NEVER TRUST req.body

# ENCRYPTING PASSWORDS

-> Validate data in Signup API
-> Install bcrypt package
-> Create PasswordHash using bcrypt.hash & save the user is excrupted password
-> Create login API
-> Compare passwords and throw errors if email or password is invalid

# AUTHENTICATION , JWT & COOKIES

-> Install cookie-parser
-> just send a dummy cookie to user
-> Create GET /profile API and check if you get the cookie back
-> Install JsonWebToken
-> In login API, after email and password validation, create a JWT token and send it to user in cookie
-> read the cookie inside your profile API and find that who is logged user
-> userAuth Middleware
-> Add the userAuth middle ware in profile API and a new sendConnectionRequest API
-> Set the expiry of JWT token and cookies to the 7 days
-> Create userSchema method to getJWT()
-> Create userSchema method to comparePassword(passwordInputByUser)

# DIVING INTO THE API's AND EXPRESS ROUTER

-> Explore tinder APIs
-> Create a list of all API you can think of in Dev Tinder
-> Group multiple routes under repective routers
-> Read documentation for express.Router
-> Create routes folder for managing auth, profile, request routers
-> Create authRouter, profileRouter, requestRouter
-> Import these routers in app.js
-> Create POST /logout API
-> Create PATCH /profile/edit
-> Create PATCH /profile/password API => forgot password API
-> Make uoyr validate all data in every POST, PATCH, APIs

# LOGICAL DB QUERY & COMPOUND INDEXES

-> Create Connection Request Schema
-> Send Connection Request API
-> Proper validation of Data
-> Think about all corner cases
-> $or query and $and query in mongoose
-> Schema.pre("save") function
-> Read more about indexes in MongoDB
-> why do we need index in DB ?
-> What are the advantages and disadvantages of creating indexes ?
-> Read this article about compound indexes - https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/?msockid=31c2a3bcbbde63c6051fb58abad862bf
-> Think About Corner Cases

# REF, POPULATE & THOUGHT PROCESS OF WRITING APIs

-> Write code with proper validation for POST /request/review/:status/:requestId
-> Steps to get this result in postman "Connection Request Accepted"
-> step 1 - singup userA
-> step 2 - singup userB
-> step 3 - loggedIn wih userA
-> step 4 - UserA sends request to UserB (status must be - "ignored" || "interested")
-> step 5 - Copy the id of request which you have sended recently
-> step 6 - userA logout & userB loggedIn
-> step 7 - UserB reviews the request (status must be - "accepted" || "rejected")
-> step 8 - Read about ref and populate
-> step 9 - Create GET /user/requests/recevied with all the checks
-> Created /user/connections API
-> last time 15 min before end

# BUILDING FEED API & PAGINATION

