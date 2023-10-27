import React from 'react';
import { createRoot } from 'react-dom/client'; 
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Card from './card';
import Footer from './footer';

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <div className="container p-0" id="jumboCard">
      <Jumbotron />
      <div className="row justify-content-center">
      <Card img="https://www.lukcomunicacion.com/wp-content/uploads/2017/06/5-webs-donde-encontrar-fotografi%CC%81as-de-calidad-gratis-unsplash.jpg" title="Proyecto 1" text="Turtle project. A web site for protecting this animals."/>
      <Card img="https://www.epitech-it.es/wp-content/uploads/2022/06/softwares-de-programacion.jpg" title="Proyecto 2" text="A database for a big company." />
      <Card img="https://www.programaibermedia.com/wp-content/uploads/2019/09/foto.gif" title="Proyecto 3" text="An app for store and share your favourite movies." />
      <Card img="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" title="Proyecto 4" text="A social media app for share your best nature pictures and for meet those people that, like you, love nature. " />
      </div> 
    </div>
    <Footer />
  </div> 
)

