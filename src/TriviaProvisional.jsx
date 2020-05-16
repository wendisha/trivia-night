import React, { Component } from "react";
import "./App.css";

class TriviaProvisional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewAmigas: false,
      viewMath: false,
      viewCulture: false,
      question: "",
      questionCulture: "",
    };
    this.chooseQuestion = this.chooseQuestion.bind(this);
    this.chooseCulture = this.chooseCulture.bind(this);
    this.catAmigas = this.catAmigas.bind(this);
    this.catCulture = this.catCulture.bind(this);
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

  catAmigas() {
    this.setState({
      viewAmigas: true,
      viewCulture: false,
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
      questionCulture: "",
    });
    this.chooseCulture();
  }

  render() {
    const { viewAmigas, viewCulture, question, questionCulture } = this.state;

    return (
      <div className="Intake">
        Categorias:
        <button className="Blue-button" onClick={this.catAmigas}>
          Amigas
        </button>
        <button className="Blue-button" onClick={this.catMath}>
          Matematicas
        </button>
        <button className="Blue-button" onClick={this.catCulture}>
          Cultura General
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
      </div>
    );
  }
}
export default TriviaProvisional;
