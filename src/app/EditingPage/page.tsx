import React from 'react';
import Sidebar from '../components/Sidebar';
import {
  Search,
} from "lucide-react";

const EditingPage = () => {
  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <header className="flex items-center justify-between px-10 py-4 shadow-sm bg-white bg-cover bg-center">
        <img src="/logo.png" alt="ASU Logo" className="h-20" />
        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">Resources</a>
          <a href="#" className="hover:text-yellow-500">Tutors</a>
          <a href="#" className="hover:text-yellow-500">About</a>
          <a href="#" className="hover:text-yellow-500">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-black text-lg">Sign in</button>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">Get Started</button>
        </div>
      </header>

      <div className="flex w-full mx-auto px-10 mt-12 gap-8">
        <div className="w-80 sticky top-24 self-start">
          <Sidebar />
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-lg p-8 min-h-screen">
          {/*Content from here*/}

          <form className="flex w-full mx-auto w-full mb-6">
            <div className="relative w-full">
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>

              <input
                type="text"
                id="simple-search"
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                placeholder="Writing"
              />
            </div>
          </form>

          <h1 className="text-4xl font-bold mb-4">6 Editing</h1>
          <p className="mb-6 text-lg">
            Time to put on your Editor’s hat, Let’s turn those drafts from Meh to
            <span className="font-bold text-yellow-600"> Magnificent!</span>
          </p>
          <div className="bg-yellow-400 rounded-lg p-6">
            Editing Stage Banner
          </div>
        </div>
      </div>


    </div>
  );
};

export default EditingPage;