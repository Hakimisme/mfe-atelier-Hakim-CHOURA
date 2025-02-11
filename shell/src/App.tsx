import React from "react";

const Header = React.lazy(() => import("headerMfe/Header"));

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Header />
      <h1>Bienvenue dans le Shell</h1>
    </React.Suspense>
  );
};

export default App;
