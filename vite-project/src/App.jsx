// import './App.css'
import "./cardStyle.css";
function App() {
  const date = new Date();
  const todayDate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  // const name = ["cat", "dog"];
  // const [dog, cat] = name;
  // console.log(`Dog is ${dog}`);
  return (
    <div>
      <div>
        <h1 className="cardHeader">Simple Card</h1>
        <div style={{ display: "flex" }}>
          <div>
            <h3 className="card">Today</h3>
          </div>
          <div>
            <h3 className="card">Is</h3>
          </div>
          <div>
            <h3 className="card">
              {todayDate + "/" + month + "/" + year}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
