import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "firebasefile";

function App() {
  const [isLoggendIn, setIsLoggendIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggendIn={isLoggendIn} />
      <footer>&copy; {new Date().getFullYear()} SNS app</footer>
    </>
  );
}


export default App;
