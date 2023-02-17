import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
  if (currentPage === 'Home') {
    return  <Home />;
  }
  if (currentPage === 'About Me') {
    return  <AboutMe />;
  }
  if (currentPage === 'Projects') {
    return <Projects />;
  }
};

const handlePageChange = (page) => setCurrentPage(page);
return (
  <div className="container">
    {/* Notice down here NavBar appears on every "page". That's because it is in App.js, the file we 
    are currently inside right now! If you want the Footer or the search box to appear on evey page, you'll have to render them here. IMPORTANT! This might necessitate logic changes on the other 
    components, moving functions that handle change here (and then pass them in via props to those 
    components, or whatever. It isn't always just a simple change!) */}
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    
    {/* This function runs at launch and when teh state changes, so clickick the navbar links 
    will change which component gets rendered right below. */}
    {renderPage()}
    <Footer />
  </div>
)
 
}

export default App;




