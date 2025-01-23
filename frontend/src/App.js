import logo from "./logo.svg";
import "./App.css";

function App() {
  const teams = [
    {
      name: "1팀❤️",
      members: ["나는 연0", "나는 소0", "나는 수0", "나는 채0"],
    },
    { name: "2팀💛", members: ["나는 정민", "나는 소0", "나는 준0"] },
    { name: "3팀💚", members: ["나는 서0", "나는 다0"] },
    { name: "4팀💖", members: ["나는 현0", "나는 아0"] },
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
                <li key={memberIndex}>{member}</li>
              ))}
            </ul>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
