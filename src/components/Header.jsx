import reactImg from "../src/assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

export default function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const decription = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {decription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
