import { useState } from "react";
import CardUniversity from "../components/CardUniversity";
import umg from "../assets/umg.png";
import upana from "../assets/upana.png";
import usac from "../assets/usac.png";
import meso from "../assets/mesoamericana.png";

function Universidades() {
  const [universidades, setUniversidades] = useState([
    {
      image: umg,
      Tittle: "Universidad Mariano Galvez",
      description:
        "Es una universidad privada en Guatemala. Su nombre hace referencia al prócer y preclaro jurisconsulto Doctor José Mariano Gálvez (Jefe del Estado de Guatemala entre 1831 y 1838), fundador de la Academia de Estudios y reformador de la educación guatemalteca, quien promovió importantes innovaciones en todos los órdenes de la vida del Estado.",
    },
    {
      image: upana,
      Tittle: "Universidad Panamericana",
      description:
        "Es una universidad privada en la Ciudad de México de orientación católica y fundada en 1967 como una escuela de negocios. Sus orígenes se encuentran en el Instituto Panamericano de Alta Dirección de Empresa (IPADE) que se convirtió, poco más tarde, en promotor de lo que hoy es la Universidad Panamericana.",
    },
    {
      image: usac,
      Tittle: "Universidad San Carlos de Guatemala",
      description:
        "Es la universidad más grande y antigua de Guatemala, siendo además la única nacional en ese país centroamericano. Esta es la cuarta universidad fundada en América. Fue establecida en la Capitanía General de Guatemala durante el periodo virreinal y se mantuvo como la única de Guatemala hasta 1954.",
    },
    {
      image: meso,
      Tittle: "Universidad Mesoamericana",
      description:
        "Es una institución de educación superior en Guatemala, privada y laica, miembro de la red de Instituciones Universitarias Salesianas, reconocida y aprobada por el Consejo de la Enseñanza Privada Superior de Guatemala.",
    },
  ]);

  return (
    <div className="Grid">
      {universidades.map((row, index) => (
        <CardUniversity
          key={index}
          image={row.image}
          Titulo={row.Tittle}
          Content={row.description}
        />
      ))}
    </div>
  );
}

export default Universidades;
