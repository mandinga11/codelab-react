import React from 'react'
import ReactDOM from 'react-dom/client'
import Icon from './IconLike.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <body>
    <h1>Grilla de iconos</h1>
    <section className='grilla'>
      
    {[...Array(5)].map((x, i1) =>
      <div className='columna' key={i1}>
        {"C" + i1}
        <br></br>
        <br></br>
        {[...Array(5)].map((x, i2) => <Icon key={i1 + i2 + 1} />)}
      </div>
    )}

</section>
  </body>
)
