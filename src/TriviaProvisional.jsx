import React, { Component } from "react";
import "./App.css";

class TriviaProvisional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewAmigas: false,
      viewMath: false,
      viewCulture: false,
      viewFarandula: false,
      question: "",
      questionCulture: "",
      questionFarandula: "",
    };
    this.chooseQuestion = this.chooseQuestion.bind(this);
    this.chooseCulture = this.chooseCulture.bind(this);
    this.chooseFarandula = this.chooseFarandula.bind(this);
    this.catAmigas = this.catAmigas.bind(this);
    this.catCulture = this.catCulture.bind(this);
    this.catFarandula = this.catFarandula.bind(this);
  }

  chooseQuestion() {
    const questionsAmigas = [
      "Alguna vez se ha roto un hueso?",
      "A que edad mudo su primer diente?",
      "Como se llaman sus herman@s?",
      "Como ella se describe en tres palabras?",
      "Cual de estas historias le ha sucedido?",
    ];
    this.setState({
      question: questionsAmigas[
        Math.floor(Math.random() * questionsAmigas.length)
      ].toString(),
    });
  }

  chooseCulture() {
    const questions = [
      "¿Cuántos tipos de sabores primarios hay?",
      "¿Cuál es el lugar más frío de la tierra?",
      "¿Quién escribió La Odisea?",
      "¿Cuál es el río más largo del mundo?",
      "¿Dónde originaron los juegos olímpicos?",
      "¿Qué tipo de animal es la ballena?",
      "¿De qué colores es la bandera de México?",
      "¿Qué cantidad de huesos en el cuerpo humano?",
      "¿Cuándo acabó la II Guerra Mundial?",
      "¿Quién es el autor de el Quijote?",
      "¿Quién pintó “la última cena”?",
      "¿En qué país se encuentra la torre de Pisa?",
      "¿Cómo se denomina el resultado de la multiplicación?",
      "¿Cuál es el océano más grande?",
      "¿Qué año llegó Cristóbal Colón a América?",
      "¿Qué significa FIFA?",
      "¿En qué se especializa la cartografía?",
      "¿Cuál es el país más grande del mundo?",
      "¿Cuál es tercer planeta en el sistema solar?",
      "¿Cuál es la moneda del Reino Unido?",
      "¿En qué lugar del cuerpo se produce la insulina?",
      "¿Qué rama de la Biología estudia los animales?",
      "¿De qué estilo arquitectónico es la Catedral de Notre Dame en París?",
      "¿Cuántas patas tiene la araña?",
      "¿Cuál es el nombre de la lengua oficial en china?",
      "¿Quién va a la cárcel: el imputado, el acusado, el condenado?",
      "¿Cuál fue el primer metal que empleó el hombre?",
      "¿Cuál es el primero de la lista de los números primos?",
      "¿Cuál es el único mamífero capaz de volar?",
      "¿Cuál es el libro sagrado del Islam?",
      "¿Qué era el Concorde?",
      "¿Quién escribió “Hamlet”?",
      "¿Cuánto vale el número pi?",
      "El triángulo que tiene sus tres lados iguales ¿Cómo se llama?",
      "¿De qué lengua proviene el español?",
      "¿Cuál es el metal más caro del mundo?",
      "¿Cuántos años tiene un lustro?",
      "¿Dónde se encuentra la capa de ozono?",
      "¿En qué año apareció en el mercado el primer videojuego protagonizado por Super Mario?",
      "¿Cuántos corazones tienen los pulpos?",
      "¿Cuál es el órgano más grande del cuerpo humano?",
      "¿Cuántas naciones conforman el Reino Unido?",
      "¿En qué año llegó el ser humano a la Luna?",
      "¿Cuántos lados tiene un hexágono?",
    ];
    this.setState({
      questionCulture: questions[
        Math.floor(Math.random() * questions.length)
      ].toString(),
    });
  }

  chooseFarandula() {
    const questionsFarandula = [
      "¿Qué jugador de la NBA fue pareja durante un tiempo de la popular Kim Kardashian?",
      "¿Qué popular serie de Netflix nos habla sobre la vida del narcotraficante Pablo Escobar Gaviria?",
      "¿Quién fue la primera voz de Mickey Mouse?",
      "¿Qué conocido actor español protagonizó “La máscara del Zorro” en 1998?",
      "¿Cómo se llamaba el personaje que interpretaba John Travolta en Grease?",
      "¿En qué año se estrenó la película de Disney Pinocho?",
      "¿Cuál es el verdadero nombre de Alejandro Sanz?",
      "¿Quién es Bella en la saga Crepúsculo?",
      "¿Cómo se llamaba el personaje que interpretaba Al Pacino en Scarface?",
      "¿A qué película de Disney pertenece la canción “Un mundo ideal”?",
      "¿De qué nacionalidad es la cantante Fey?",
      "¿Qué actor rechazó el papel de Michael Corleone en la película El Padrino, finalmente interpretado por Al Pacino?",
      "¿Cómo se llama el protagonista de la saga Indiana Jones?",
      "¿Quién interpreta la canción Baby One More Time?",
      "¿A quién se considera el Rey del Pop?",
      "¿Cómo se llama el pájaro símbolo de los Juegos del Hambre?",
      "¿Quién canta Vivir mi vida?",
      "¿Qué personaje de Disney perdió su zapato de cristal?",
      "¿Qué banda de Heavy Metal lanzó un disco de colaboración con el recientemente fallecido Lou Reed?",
      "¿Qué Beatle fue asesinado por un fan?",
      "¿Cómo se llama el personaje que interpreta Mario Casas en la serie El Barco?",
      "¿Qué grupo interpretaba la canción 'Smells like teen spirit?'",
      "¿Cómo se llama el payaso de 'Los Simpson'?",
      "¿Cómo se llama el personaje de 'Hellraiser' que tiene clavos en la cara?",
      "¿Cuál fue el primer festival de rock gratuito en durar más de 3 días en 1969?",
      "¿Cuántos capítulos tiene la serie de televisión 'Friends?",
      "¿Cómo se llama el primer hijo de Goku de Dragon Ball?",
      "¿De donde proviene el reggae?",
      "¿Cómo se llama la bebé de Los Simpsons?",
    ];
    this.setState({
      questionFarandula: questionsFarandula[
        Math.floor(Math.random() * questionsFarandula.length)
      ].toString(),
    });
  }

  catAmigas() {
    this.setState({
      viewAmigas: true,
      viewCulture: false,
      viewFarandula: false,
      question: "",
    });
    console.log(this.state.question);
  }

  catMath() {
    this.setState({
      viewMath: true,
    });
  }

  catCulture() {
    this.setState({
      viewAmigas: false,
      viewCulture: true,
      viewFarandula: false,
      questionCulture: "",
    });
    this.chooseCulture();
  }

  catFarandula() {
    this.setState({
      viewAmigas: false,
      viewCulture: false,
      viewFarandula: true,
      questionFarandula: "",
    });
    this.chooseFarandula();
  }

  render() {
    const {
      viewAmigas,
      viewCulture,
      viewFarandula,
      question,
      questionCulture,
      questionFarandula,
    } = this.state;

    return (
      <div className="Intake">
        Categorias:
        <button className="Blue-button" onClick={this.catAmigas}>
          Tertulia
        </button>
        {/* <button className="Blue-button" onClick={this.catMath}>
          Matematicas
        </button> */}
        <button className="Blue-button" onClick={this.catCulture}>
          Cultura General
        </button>
        <button className="Blue-button" onClick={this.catFarandula}>
          Farándula
        </button>
        {viewAmigas && (
          <div className="flex-amigas">
            <button className="Blue-button" onClick={this.chooseQuestion}>
              Penelope
            </button>
            <button className="Blue-button" onClick={this.chooseQuestion}>
              Eloine
            </button>
            <button className="Blue-button" onClick={this.chooseQuestion}>
              Nelly
            </button>
            <button className="Blue-button" onClick={this.chooseQuestion}>
              Carolina
            </button>
            <button className="Blue-button" onClick={this.chooseQuestion}>
              Jennifer
            </button>
            <button className="Blue-button" onClick={this.chooseQuestion}>
              Elissa
            </button>
            <span className="questions">{question && question}</span>
          </div>
        )}
        {viewCulture && (
          <span className="flex-amigas questions">
            {questionCulture && questionCulture}
          </span>
        )}
        {viewFarandula && (
          <span className="flex-amigas questions">
            {questionFarandula && questionFarandula}
          </span>
        )}
      </div>
    );
  }
}
export default TriviaProvisional;
