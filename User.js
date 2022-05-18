// FRONT-END

import React from "react";

export default function User({ name, email }) {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}
