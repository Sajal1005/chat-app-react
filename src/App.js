import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SendMessage from "./components/SendMessage";

const style = {
  appContainer: ` mx-auto text-center `,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={style.appContainer}>
      <section className="{style.sectionContainer}">
        <Navbar />
        {user ? (
          <>
            <Chat />
            <SendMessage />
          </>
        ) : null}
      </section>
    </div>
  );
}

export default App;
