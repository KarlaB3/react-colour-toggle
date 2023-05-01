import './App.css';

export default function ToggleColour() {
  function handleClick() {
    let bground = document.body.style;
    if (bground.backgroundColor === "teal") {
      bground.backgroundColor = "white";
    } else {
      bground.backgroundColor = "teal";
    }
  }

  return (
    <div class="App">
      <h3>Toggle the background colour by clicking the button</h3>
      <button class="button" onClick={handleClick}>
        Toggle
      </button>
    </div>
  )
}