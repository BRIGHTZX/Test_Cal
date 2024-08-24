import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [result, setResult] = useState([]);
  const [message, setMessage] = useState(null);

  const calculate = (e) => {
    setResult([]);
    setMessage(null);
    e.preventDefault();

    const targetSum = parseInt(data);
    const numbers = [1, 5, 13, 2, 7, 6];
    const result = [];

    const findCombine = (index, sum, combine) => {
      if (sum === targetSum) {
        result.push([...combine]);
        setMessage("True");
        return;
      }
      if (sum > targetSum || index >= numbers.length) {
        return;
      }
      //รวมตัวเลข
      findCombine(index + 1, sum + numbers[index], [
        ...combine,
        numbers[index],
      ]);
      //ไม่รวมตัวเลข
      findCombine(index + 1, sum, combine);
    };
    // Call Function
    findCombine(0, 0, []);

    //แสดงผล
    if (result.length === 0) {
      setMessage("No combination found");
    } else {
      setResult(result);
    }
  };

  return (
    <div>
      <form onSubmit={calculate}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <div>
          <button type="submit">Calculate</button>
        </div>
      </form>
      {message && <div>{message}</div>}
      {result.length > 0 && (
        <div>
          {result.map((result, index) => (
            <div key={index}>{result.join(",")}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
