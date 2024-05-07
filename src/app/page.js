'use client';

import Search from './components/search/search';
import './page.module.css';
import { useEffect } from 'react';


export default function Home() {

useEffect(() => {
  if(window) {
    console.log(window.location.href);
  }
},[]);



  return (
   
     <main className="flex min-h-screen flex-col items-center justify-between">
      <Search/>
    </main>


  )
}
