import "./App.css";
import { animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import { useTransition, AnimatedProps, useSpringRef } from "@react-spring/web";
import FormOptions from "./components/form-options/form-options";
import certidao from "./assets/certidao.png";
function App() {
  const [index, set] = useState(0);

  const [showResults, setShowResults] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const onClick = () => {
    set((state) => (state + 1) % 9);
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
      question: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Rique", isCorrect: true },
      ],
    },
    {
      id: 2,
      question: "What is the sscapital of America?",
      options: [
        { id: 0, text: "New Yorkdasd City", isCorrect: false },
        { id: 1, text: "Bostodn", isCorrect: false },
        { id: 2, text: "Santa dFe", isCorrect: false },
        { id: 3, text: "Henrique", isCorrect: true },
      ],
    },
    {
      id: 3,
      question: "What is the dasdcapital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Bostoasdn", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Viana", isCorrect: true },
      ],
    },
    {
      id: 4,
      question: "What dasdis the capital of America?",
      options: [
        { id: 0, text: "New Ydwwwork City", isCorrect: false },
        { id: 1, text: "Bosdaston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Jamal", isCorrect: true },
      ],
    },
    {
      id: 5,
      question: "What dasdis the capital of America?",
      options: [
        { id: 0, text: "New Ydwwwork City", isCorrect: false },
        { id: 1, text: "Bosdaston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washindgton DC", isCorrect: true },
      ],
    },
    {
      id: 6,
      question: `Por um acaso se lhe pedisse em namoro no dia 13/01/2024 ás ${hours}:${minutes}, vc aceitaria hein?`,
      options: [
        { id: 0, text: "Não 😭😭😭😭", isCorrect: false },
        { id: 1, text: "Sim 🥺🥺🥺🥺", isCorrect: true },
      ],
    },
  ];

  const pages: ((
    props: AnimatedProps<{ style: CSSProperties }>
  ) => React.ReactElement)[] = [
    ({ style }) => (
      <animated.div style={{ ...style, height: "100%", overflow: "hidden" }}>
        <section className="wrapper introduction">
          <h1 className="text_shadows">QUIZ</h1>
          <p>Este quiz traz perguntas importantes, reponda com atenção!</p>
          <button onClick={onClick}>Iniciar</button>
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
          <div className="card-final">
            <h2 className="text_shadows">FIM</h2>
            <p>Vc acertou {score}</p>
            <p>
              Por ter acertado tudo tenho mais uma perguntinha pra vc! Clica ai
              embaixo pra descobrir
            </p>
            <button onClick={onClick}>Revelar</button>
          </div>
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
          <div className="card-final">
            <h1>Certificado emitido!</h1>
            <p>Agora é oficial segue seu certificado:</p>
            <img src={certidao} />
          </div>
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
