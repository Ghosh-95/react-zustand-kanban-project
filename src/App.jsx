import Column from "./components/Column"

function App() {

  return (
    <div className='app'>
      <Column state={'Ongoing'} />
      <Column state={'Planned'} />
      <Column state={'Done'} />

    </div>
  )
}

export default App
