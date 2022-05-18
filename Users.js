//FRONT END

import React, { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("postgres://iqggrpim:vg6buKPLOxnpxhp9h1T4dB1ZRQ3tRTmk@dumbo.db.elephantsql.com/iqggrpim")
      .then((res) => res.json())
      .then((results) => setUsers(results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}
