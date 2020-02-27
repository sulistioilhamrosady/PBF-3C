import React from 'react';
import logo from './tio.jpg';
import './App.css';
import 'bootstrap/dist/css/boststrap.min.css';

function Biodata() {
  return (

    <center>
      <div>
        <h3>Biodata</h3>
        <br></br>
        <img src={logo} alt="logo" className="roundedcircel" width="350" />
      </div>
      <br>
      </br>
      <div>
        <h3>Nama    : Sulistio ilham rosady</h3>
        <br></br>
        <h3>Nim     : 1741720004</h3>
        <br></br>
        <h3>Kelas   :TI-3C </h3>
        <br></br>
        <h3>Alamat : Jln. delima no.28, karangduak, sumenep, madura</h3>
      </div>
    </center>
  )
}

export default Biodata;