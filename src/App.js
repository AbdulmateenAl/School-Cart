import './App.css';

export default function App({items, onItemClick}) {
  const handleClick = ({target}) => {
    const item = target.value;
    onItemClick(item);
  }
  return (
    <div className="App">
      {items.map((item, index) => (
        <button value={item} key={index} onClick={handleClick}>{item}</button>
      ))}
    </div>
  );
}
