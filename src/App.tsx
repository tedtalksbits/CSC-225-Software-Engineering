import './App.css';

function App() {
  const handleClick = () => {
    alert('You clicked the button');
  };
  return (
    <>
      <h1>Let's go boiz</h1>
      <button onClick={handleClick}>Click the button for a suprise</button>
    </>
  );
}

export default App;
