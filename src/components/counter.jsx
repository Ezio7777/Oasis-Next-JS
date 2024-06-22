"use client";

import React from "react";

function counter(props) {
  const data = props.data;
  return (
    <div>
      There are
      <button>{data}</button>Users
    </div>
  );
}

export default counter;
