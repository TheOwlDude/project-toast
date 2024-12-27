import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';

export const ToastsContext = React.createContext();

function App() {
  const [toasts, setToasts] = React.useState([]);  
  
  return (
    <ToastsContext.Provider value={{toasts, setToasts}}>
      <ToastPlayground />
      <Footer />
    </ToastsContext.Provider>
  );
}

export default App;
