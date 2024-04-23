import Column from "./components/Column"

function App() {

  return (
    <div className='app'>
      <Column state={'ongoing'} />
      <Column state={'planned'} />
      <Column state={'done'} />

    </div>
  )
}

export default App
