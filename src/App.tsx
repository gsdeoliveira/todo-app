import { ThemeToggle } from "./components/theme-toggle"

function App() {
  return (
    <div className="w-full h-screen font-josefin text-lg bg-background">
      <div className="w-96 h-96 bg-muted">
        <p className="text-teste">Teste todo</p>
        <p className="text-teste2">Teste todo</p>
        <p>Teste todo</p>
      </div>
      <h1 className="text-4xl text-violet-500">Hello World!</h1>
      <ThemeToggle />
    </div>
  )
}

export default App
