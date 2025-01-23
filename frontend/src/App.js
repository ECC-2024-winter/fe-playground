import logo from "./logo.svg";
import "./App.css";

function App() {
  const teams = [
    {
      name: "1팀❤️",
      members: ["연형", "소영", "수안", "채은"],
    },
    {
      name: "2팀💛",
      members: ["정민", "소라", "준희"],
    },
    {
      name: "3팀💚",
      members: ["서연", "다0"],
    },
    {
      name: "4팀💖",
      members: ["현0", "아0"],
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>FE Playground에 오신 걸 환영합니다!</h1>
        <div>
          {teams.map((team, index) => (
            <ul key={index}>
              {team.name}
              {team.members.map((member, memberIndex) => (
                <li key={memberIndex}>나는 {member}</li>
              ))}
            </ul>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
