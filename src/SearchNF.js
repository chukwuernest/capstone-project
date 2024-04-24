import React from 'react'
import Nav1 from './nav1'
import Footer from './footer'
import SearchStyle from './SearchNF.module.css'
function SearchNF() {
  return (
    <div className={SearchStyle.Home}>
      <Nav1 />
      <div className={SearchStyle.main}>
        <div className={SearchStyle.section}>
          <h1>Search Result For ‘Hospital’</h1>
          <h2></h2>
          <h1>oops! Search not found</h1>
          <p>
            Nothing matched your search criteria. Please try again with
            different keywords.
          </p>
        </div>
        <div className={SearchStyle.search_container}>
          <input type='search' name='' id='' placeholder='Type key word' />

          <button class='search-button'>Search</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SearchNF
