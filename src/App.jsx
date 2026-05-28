import { useState } from 'react'


function App() {


  return (
    <>
      <header className="container text-center my-3">
        <h1>
          <i className="bi bi-bookshelf mx-3"></i>
          React Blog Form
        </h1>
      </header>
      <main className='container'>
        <form>
          <input type='text' placeholder='Add a new title' />
          <button type='submit'>Add article</button>
        </form>
        <div className="card my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem laborum debitis commodi vitae, eligendi rem, ad blanditiis magnam natus enim tempore dignissimos consequuntur! Facere nostrum suscipit quos possimus dignissimos.
        </div>
      </main>
    </>
  )
}

export default App
