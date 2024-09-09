const auth = require('../middleware/auth');
const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers"); 



// GET /users
router.get("/", getAllUsers);

// POST /users
router.post("/", createUser);
router.use(auth);


// GET /users/:userId
router.get("/:userId", getUserById);
router.use(auth);


// PUT /users/:userId
router.put("/:userId", updateUser);
router.use(auth);


// DELETE /users/:userId
router.delete("/:userId", deleteUser);
router.use(auth);


module.exports = router;