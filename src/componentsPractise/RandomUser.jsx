// import React, { useEffect, useState } from "react";

// export default function RandomUser() {
//   const [users, setUsers] = useState();

//   useEffect(() => {
//     const getData = async () => {
//       const response = await fetch("https://randomuser.me/api/");
//       const data = await response.json();
//       setUsers(data.results[0]);
//       console.log(users);
//     };
//     getData();
//   }, []);

//   if (!users) {
//     return <div>Loading...</div>;
//   }

//   const { name, picture, phone } = users;
//   return (
//     <div>
//       <img src={picture.large} alt={name.first} />
//       <h2>
//         {name.first} {name.last}
//       </h2>
//       <p>{phone}</p>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

function RandomUser() {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(2);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://randomuser.me/api/?page=${counter}`
      );
      const data = await response.json();
      setUsers([...users, data.results[0]]);
    };
    getData();
  }, []);

  const addUser = async () => {
    const response = await fetch(`https://randomuser.me/api/?page=${counter}`);
    const data = await response.json();
    setUsers([...users, data.results[0]]);
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.login.uuid}>
          <img src={user.picture.large} alt={user.name.first} />
          <h2>
            {user.name.first} {user.name.last}
          </h2>
          <p>{user.phone}</p>
        </div>
      ))}
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default RandomUser;
