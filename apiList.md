# DevTinder APIs

# authRouter

-> POST /signup
-> POST /login
-> POST / logout

# profileRouter

-> GET /profile/view
-> PATCH /profile/edit
-> PATCH /profile/password

# connectionRequestRouter

-> POST /request/send/:status(accepted/rejected)/:userId
-> POST /request/review/:status(accepted/rejected)/:requestId

# userRouter

-> GET /user/requests/recevied - ( It will show that which user has send me the request )
-> GET /user/connections       - ( It will show the users which are accepted by you )
-> GET /feed                   - ( Gets you the profiles of other users on platform who doesn't know u )

Status: ignored, interested accepted, rejected
