import "./App.css";
import { animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import { useTransition, AnimatedProps, useSpringRef } from "@react-spring/web";
import FormOptions from "./components/form-options/form-options";
import certidao from "./assets/certidao.png";
import { saveAs } from "file-saver";

function App() {
  const [index, set] = useState(0);

  const [showResults, setShowResults] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const onClick = () => {
    set((state) => (state + 1) % 9);
  };

  const downloadImage = () => {
    saveAs(
      "https://i.ibb.co/sbGBTcV/certidao-riqque-erik.png",
      "certidao-erik-rique.jpg"
    );
  };

  const onClickScore = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const transRef = useSpringRef();

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();

  const questions = [
    {
      id: 1,
      question: "Qual foi nosso primeiro date?",
      options: [
        { id: 0, text: "Praia", isCorrect: false },
        { id: 1, text: "Andar sem rumo 😭😭", isCorrect: true },
        { id: 2, text: "Save Point", isCorrect: false },
        { id: 3, text: "Cinema", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "O que você acha que mais gosto em você?",
      options: [
        { id: 0, text: "Personalidade", isCorrect: true },
        { id: 1, text: "Aparência", isCorrect: true },
        { id: 2, text: "Otras cositas 😳", isCorrect: true },
        { id: 3, text: "Todas alternativas", isCorrect: true },
      ],
    },
    {
      id: 3,
      question: "O que eu amo quando vc faz?",
      options: [
        { id: 0, text: "Carinho", isCorrect: true },
        { id: 1, text: "Abraçinhos espontáneos", isCorrect: true },
        { id: 2, text: "Fotinhas", isCorrect: true },
        { id: 3, text: "Tudoooooooooooo ", isCorrect: true },
      ],
    },
    {
      id: 4,
      question: "Quem tem o sorriso mais bonito do mundo?",
      options: [
        { id: 0, text: "Viana", isCorrect: true },
        { id: 1, text: "Jamal", isCorrect: true },
        { id: 2, text: "Henrique", isCorrect: true },
        { id: 3, text: "Rique", isCorrect: true },
      ],
    },
    {
      id: 5,
      question: "Qual desses eh o homem mais gostoso do mundo?",
      options: [
        { id: 0, text: "Viana", isCorrect: true },
        { id: 1, text: "Jamal", isCorrect: true },
        { id: 2, text: "Henrique", isCorrect: true },
        { id: 3, text: "Rique", isCorrect: true },
      ],
    },
    {
      id: 6,
      question: `Por um acaso se lhe pedisse em namoro no dia 13/01/2024 ás ${hours}:${minutes}, vc aceitaria hein 👉👈?`,
      options: [
        { id: 0, text: "Não 😭😭😭😭", isCorrect: false },
        { id: 1, text: "Sim 🥺🥺🥺🥺", isCorrect: true },
      ],
    },
  ];

  function refreshPage() {
    window.location.reload(false);
  }

  const pages: ((
    props: AnimatedProps<{ style: CSSProperties }>
  ) => React.ReactElement)[] = [
    ({ style }) => (
      <animated.div style={{ ...style, height: "100%", overflow: "hidden" }}>
        <section className="wrapper introduction">
          <h1 className="text_shadows">QUIZ</h1>
          <p className="text">
            Este quiz traz perguntas importantes, reponda com atenção!
          </p>
          <button className="btn-iniciar" onClick={onClick}>
            Iniciar
          </button>
        </section>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, height: "100%", overflow: "hidden" }}>
        <section className="wrapper">
          <FormOptions
            questionNumber={questions[0].id}
            options={questions[0].options}
            question={questions[0].question}
            click={onClick}
            onClickScore={onClickScore}
          />
        </section>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, height: "100%", overflow: "hidden" }}>
        <section className="wrapper">
          <FormOptions
            questionNumber={questions[1].id}
            options={questions[1].options}
            question={questions[1].question}
            click={onClick}
            onClickScore={onClickScore}
          />
        </section>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, height: "100%", overflow: "hidden" }}>
        <section className="wrapper">
          <FormOptions
            questionNumber={questions[2].id}
            options={questions[2].options}
            question={questions[2].question}
            click={onClick}
            onClickScore={onClickScore}
          />
        </section>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, height: "100%", overflow: "hidden" }}>
        <section className="wrapper">
          <FormOptions
            questionNumber={questions[3].id}
            options={questions[3].options}
            question={questions[3].question}
            click={onClick}
            onClickScore={onClickScore}
          />
        </section>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, height: "100%", overflow: "hidden" }}>
        <section className="wrapper">
          <FormOptions
            questionNumber={questions[4].id}
            options={questions[4].options}
            question={questions[4].question}
            click={onClick}
            onClickScore={onClickScore}
          />
        </section>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, height: "100%", overflow: "hidden" }}>
        <section className="wrapper final">
          {score === 5 && (
            <div className="card-final">
              <h2 className="text_shadows">FIM</h2>
              <p className="text">Você acertou {score}</p>
              <p className="text">
                Por ter acertado tudo tenho mais uma perguntinha pra você! Clica
                ai embaixo pra descobrir
              </p>
              <button className="btn-next" onClick={onClick}>
                Revelar
              </button>
            </div>
          )}
          {score < 5 && (
            <div className="card-final">
              <h2 className="text_shadows">FIM</h2>
              <p className="text">Você acertou {score} 😭😔</p>
              <p className="text">
                Não acertou tudo 😭😔😭😔, tem algo errado aí, clica no botão
                abaixo pra mais uma chance
              </p>
              <button className="btn-next" onClick={refreshPage}>
                Recomeçar
              </button>
            </div>
          )}
        </section>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, height: "100%", overflow: "hidden" }}>
        <section className="wrapper">
          <FormOptions
            questionNumber={"Extra"}
            options={questions[5].options}
            question={questions[5].question}
            click={onClick}
            onClickScore={onClickScore}
          />
        </section>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, height: "100%", overflow: "hidden" }}>
        <section className="wrapper final">
          {score === 6 && (
            <div className="card-final">
              <h1 className="title">Certidão emitida!</h1>
              <p className="text">Agora é oficial segue sua certidão:</p>
              <img width="200" src={certidao} />
              <button className="btn-next" onClick={downloadImage}>
                Salvar Certidão
              </button>
            </div>
          )}
          {score === 5 && (
            <div className="card-final">
              <h1 className="title">
                😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭 <br />
                Opção errada!
                <br />
                😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭
              </h1>
              <p className="text">Me odeia?</p>
              <button className="btn-next" onClick={refreshPage}>
                Mais uma chance 🥺
              </button>
            </div>
          )}
        </section>
      </animated.div>
    ),
  ];

  return (
    <div className="container" style={{ height: "100%", overflow: "hidden" }}>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
    </div>
  );
}

export default App;
