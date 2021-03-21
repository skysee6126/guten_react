import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "firebasefile";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggendIn, setIsLoggendIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggendIn(true);
      } else {
        setIsLoggendIn(false);
      }
      setInit(true);
    });
  }, [])
  return (
    <>
      {init ? <AppRouter isLoggendIn={isLoggendIn} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} SNS app</footer>
    </>
  );
}


export default App;
