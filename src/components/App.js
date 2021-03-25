import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "firebasefile";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggendIn, setIsLoggendIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggendIn(true);
        setUserObj(user);
      } else {
        setIsLoggendIn(false);
      }
      setInit(true);
    });
  }, [])
  return (
    <>
      {init ? <AppRouter isLoggendIn={isLoggendIn} userObj={userObj} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} SNS app</footer>
    </>
  );
}


export default App;
