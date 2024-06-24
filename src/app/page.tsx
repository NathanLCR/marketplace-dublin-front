// 'use client';

import { redirect } from 'next/navigation';
import React from 'react';

function App() {
  redirect("/home");
  return (<div>Item</div>);
}

export default App;
