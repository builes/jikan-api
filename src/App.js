import React from "react";
import AppRouter from "./routers/AppRouter";

const breakPoints = [
  { width: 350, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 },
];

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
