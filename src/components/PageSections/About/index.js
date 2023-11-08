import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';

import { ImgDataMe } from '../../../data/dataUser';

// import ContactUs from './components/ContactUs';
// import Alliances from './components/Alliances';

const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center mx-2 xl:ml-24">
        <h2 className="text-6xl xl:text-5xl text-center  text-primary font-bold">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className="col-span-2 xl:col-span-1 flex flex-col">
              {ImgDataMe?.length > 0 ? ImgDataMe.map((item)=>
                <div key={item.id}>
                  <img
                  src={item.img}
                  alt="about-img"
                  className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[400px] xl:h-[400px] xl:mt-20 xl:mx-2"
                />
              </div>)
            :null}
          </div>
        <div className="col-span-2 xl:col-span-1 flex flex-col">
          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center  xl:text-left">
            Soy María Lorena, una experimentada agente inmobiliaria que opera en La Serena, Coquimbo y sus alrededores. A lo largo de 14 años, he desempeñado mi oficio con éxito, colaborando estrechamente con otros destacados corredores de propiedades a nivel nacional. Mi enfoque se centra en la gestión de compras y ventas de propiedades, así como en los servicios de arriendo tanto para propiedades habitacionales como comerciales. Además, ofrezco servicios de administración de propiedades.
            <br />
            <br />
            Mi compromiso radica en brindar un servicio integral y de alta calidad, respaldado por mi vasta experiencia en el mercado inmobiliario, con el objetivo de satisfacer las necesidades y expectativas de mis clientes en todas las etapas del proceso inmobiliario.  
            <br />
            <br />
            {/* Unne es un acelerador inmobiliario que ofrece una amplia gama de productos y servicios innovadores, esto junto con una gestión comercial proactiva, impulsarán los resultados de nuestros clientes.
            <br />
            <br /> */}
          </p>

          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center xl:text-left">
            Maria Leon Morapasten.
          </p>
          <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-5 md:text-center xl:text-left">
            Fundador y Gerente General.
          </p>
        </div>
    
        </div>
       
  
      </div>
      <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
      </div>

      {/* 
        <div className="pt-10">
          <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
            “Un largo camino
            <br />
            se inicia con un solo paso...”
          </h2>
        </div> */}
    </div>
    {/* </Fade>  */}
  </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;
