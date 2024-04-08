import { sign } from "crypto";
import React from "react";

function SignIn() {
  return (
    <>
      <section>
        <aside>
          <img src="/images/signInImage.jpg" alt="A student reading a book" />
        </aside>
        <aside>
          <img src="/images/logo.png" alt="School logo" />
          <div>
            <h1>Welcome to Taraba State University E-Library Portal</h1>
            <p>Kindly fill in the information below to sign in</p>
          </div>
          <form action="">
            <div>
              <label htmlFor="LibraryCardId">Card Number *</label>
              <input
                type="text"
                name="LibraryCardId"
                placeholder="Enter Library Card Id"
              />
            </div>
            <button>Sign In</button>
            <div>
              <label htmlFor="saveDetails">Remember Me</label>
              <input type="checkbox" name="saveDetails" />
            </div>
          </form>
        </aside>
      </section>
    </>
  );
}

export default SignIn;
