const database = [
  {
    id: "1",
    name: "Vijay Krishnavanshi",
    email: "vijay1@indorse.io"
  },
  {
    id: "2",
    name: "Vijay Krishnavanshi",
    email: "vijay2@indorse.io"
  },
  {
    id: "3",
    name: "Vijay",
    email: "vijay3@indorse.io"
  }
];

const getUserById = async (root, {id}, { req, res }) => {
    return database.filter(elem => elem.id == id)[0];
};

export default getUserById;
