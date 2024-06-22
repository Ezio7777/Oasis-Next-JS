import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <div>
      <div>
        <Link href="/">home</Link>
      </div>
      <div>
        <Link href="/cabins">cabin</Link>
      </div>
      <div>
        <Link href="/account">account</Link>
      </div>
      <div>
        <Link href="/about">about</Link>
      </div>
    </div>
  );
}

export default Navigation;
