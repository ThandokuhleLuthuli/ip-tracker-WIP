'use client';
import dynamic from 'next/dynamic';
import './page.module.css';

const Search = dynamic(() => import('./components/search/search'),{ssr:false});
export default function Home() {
return (
   
     <main className="flex min-h-screen flex-col items-center justify-between">
      <Search/>
    </main>


  )
}
