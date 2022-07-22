//Hooks useState
//
//

import { useState, useEffect } from 'react';
import './App.css';
import { Button, Spinner, Image, Skeleton, Input } from '@chakra-ui/react'
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import SignIn from './Components/Signin';
import SignUp from './Components/SignUp';
import ListaCasas from './Components/ListaCasas';
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Detalle from './Components/Detalle';

function App() {
  const [show, setShow] = useState(true)
  const [data, setData] = useState([])
  const [dataCp, setDataCp] = useState([])
  const[search, setSearch] = useState("")

  useEffect(() => {
    console.log("Datos")
    fetch("https://ironbnb-m3.herokuapp.com/apartments")
    .then(datos => {
      datos.json()
      .then(casas => {
        console.log("Datos de las casas", casas)
        setData(casas);
        setDataCp(casas);
        setShow(false);
      })
    })
    .catch(console.log)
  }, []);

  const toggleShow = () => {
    setShow(!show)
  };

//Funcion para controlar lo que sucede con el input

const actualizarInput = (e) => {
  setSearch(e.target.value)
}

useEffect(() => {
  console.log("Se esta actualizando")
  const dataFiltrada = dataCp.filter((casa) =>{
    return casa.title.toLowerCase().includes(search.toLocaleLowerCase())
  })
  setData(dataFiltrada)
},[search])

  return (
  <Router>
    <Navbar/>
    <Input 
    placeholder='Buscar propiedad...'
     value={search}
      onChange={actualizarInput}/>

    <Routes>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/casas/:id' element={<Detalle/>} />
      <Route path='/' element={<ListaCasas data={data} />} />
    </Routes>

  </Router>
  );
}

export default App;
