import React from 'react';
import { useState } from 'react'
import inbox from './assets/inbox.svg'
import calendar from './assets/calendar.svg'
import layers from './assets/layers.svg'
import grid from './assets/grid.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="header-wrapper">
        <header>
          <div>ocktodo</div>
          <div >
            <nav>
              <a href="http://google.com">google</a>
            </nav>
          </div>
        </header>
      </div>
      <div className="application-main">
        
        <aside>
          <div className="dashboard-sidebar">
            <p>
            igorcarvalhh

            </p>
            <ul>
              <li>
                <div>
                  <img src={inbox} />
                  <span>Entrada</span>
                </div>
              </li>
              <li>
                <div>
                  <img src={calendar} />
                  <span>Hoje</span>
                </div>
              </li>
              <li>
                <div>
                  <img src={layers} />
                  <span>Em breve</span>
                </div>
              </li>
              <li>
                <div>
                  <img src={grid} />
                  <span>Filtros e Etiquetas</span>
                </div>
              </li>
            </ul>
            <h2>Top Projects <a>New</a></h2>
            <div>
              <input type="text" placeholder='Find a project...'/>
            </div>
            <ul className='project-list'>
              <li>igorcarvalhh/project01</li>
              <li>igorcarvalhh/project01</li>
              <li>igorcarvalhh/project01</li>
              <li>igorcarvalhh/project01</li>
              <li>igorcarvalhh/project01</li>
            </ul>
          </div>
        </aside>
        <main>
          <div className="tasks">
            <div className="task">Task</div>
            <div className="task">Task</div>
            <div className="task">Task</div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
