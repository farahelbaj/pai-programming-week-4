// user model

// {
//     "name": "Matti Seppänen",
//     "email": "matti@example.com",
//     "password": "M@45mtg$",
//     "phone_number": "+358401234567",
//     "gender": "Male",
//     "date_of_birth": "2000-01-15",
//     "membership_status": "Active"
//   }

let usersArray = [];
let nextId = 1;

const getAll = () => {
  return usersArray;
};

const addOne = (name, email, password, phone_number, gender, date_of_birth, membership_status) => {
  if (!name | !email |!password |!phone_number |!gender |!date_of_birth |!membership_status) {
    return false;
  }
  const newUser = {
    id: nextId++,
    email, 
    password, 
    phone_number, 
    gender, 
    date_of_birth, 
    membership_status
  };
  usersArray.push(newUser);
  // console.log("User Array: ", usersArray)
  return newUser;
};

const findById = (id) => {
  const user = usersArray.find((user) => user.id === Number(id));
  if (user) {
    return user;
  } else return false;
};

const updateOneById = (id, updatedData) => {
  const user = findById(id);
  if (user) {
    if (updatedData.name) {
      user.name = updatedData.name;
    }
    if (updatedData.info) {
      user.info = updatedData.info;
    }
    if (updatedData.image) {
      user.image = updatedData.image;
    }
    if (updatedData.price) {
      user.price = updatedData.price;
    }
    return user;
  }
  return false;
};

const deleteOneById = (id) => {
  const user = findById(id);
  if (user) {
    const initLength = usersArray.length;
    usersArray = usersArray.filter((user) => user.id !== Number(id));
    return usersArray.length < initLength;
  } else return false;
};
if (require.main === module) {
  let result = addOne("Matti Seppänen", "matti@example.com", "M@45mtg$","+358401234567", "Male", "2000-01-15", "Active");
  console.log(result);
  result = addOne("Loc Dang", "test@gmail.com", "123asd", "+35790989098", "Male", "2024-09-09", "Inactive");
  console.log(result);
  console.log(`getAll called: ${getAll()}`);
  console.log(`findById called: ${findById(2)}`);
  console.log(
    `updateById called: ${updateOneById(2, {
      name: "Test",
      email: "test12122@gmail,com",
      gender: "Female",
      membership_status: "Active"
    })}`
  );
  console.log(`findById called after item updated: ${findById(2)}`);
  console.log(`deleteById called: ${deleteOneById(2)}`);
  console.log(`findById called after item deleted: ${findById(2)}`);
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};
