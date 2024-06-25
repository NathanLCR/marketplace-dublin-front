import { redirect } from 'next/navigation';
import React from 'react';

function App() {
  redirect("/home");
  return (<></>);
}

export default App;
