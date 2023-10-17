import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="relative">
        <p className="relative top-64 text-center font-medium py-2.5 my-5">
          Copyright © {year}
        </p>
      </footer>
    </>
  );
}
