import { useState } from 'react'
import {NavLink, Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Supports from './components/Supports'
import Help from './components/Help'
import Login from './components/Login'
import { Link} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Routes>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/Supports" element={<>Supports Page</>}></Route>
          <Route path="/Help" element={<>Help Page</>}></Route>

          <Route path="/login" element={<>Login Page</>}></Route>
          <Route path="/Singup" element={<>Singup Page</>}></Route>
          <Route path="*" element={<>Not Found Page</>}></Route>


        </Routes> */}


        {/* <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li><Link to={"/Supports"}>Supports</Link></li>
            <li><Link to={"/Help"}>Help</Link></li>
            <li><Link to={"/login"}>Supports</Link></li>
          </ul>
        </nav> */}


       <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li><NavLink to={"/Supports"}>Supports</NavLink></li>
            <li><NavLink to={"/Help"}>Help </NavLink> </li>
            <li><NavLink to={"/login"}>Supports</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Supports" element={<Supports/>}></Route>
          <Route path="/Help" element={<Help/>}></Route>

          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Singup" element={<>Singup Page</>}></Route>
          <Route path="*" element={<>Not Found Page</>}></Route>
        </Routes>
    </>
  )
}

export default App
