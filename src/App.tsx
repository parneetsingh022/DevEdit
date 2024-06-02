import './App.css'
import MenuBar from './components/menubar/MenuBar';

function App() {
  function quitApp(){
    window.ipcRenderer.send('quit-app');
  }

  return (
    <>
      <MenuBar />
      <button onClick={quitApp}>Quit</button>
    </>
  )
}

export default App
