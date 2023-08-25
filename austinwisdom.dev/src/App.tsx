import './App.css'

function App() {
  const background:any = document.querySelector('#module')
  const root = document.documentElement;

  root.addEventListener('mousemove', (e) => {
    const x = e.clientX,
    y = e.clientY;
    background.style.transform = `translate(${-x / 40}px,${-y / 40}px)`;
  });

  return (
  c
  )
}

export default App
