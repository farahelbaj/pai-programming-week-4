const express = require("express");
const app = express();
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
const morgan = require('morgan');
const auth = require('./middleware/auth')

// Middleware to parse JSON
app.use(express.json());


// Use the tourRouter for all /tours routes
app.use("/api/tours", tourRouter);
app.use(auth)

// Use the userRouter for all /users routes
app.use("/api/users", userRouter);
app.use(auth)


app.use(morgan('tiny'));

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});