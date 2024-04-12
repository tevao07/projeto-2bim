import Header from "./components/Header"
import Paulista from "./components/Paulista"
import Paulista2 from "./components/Paulista2"
import Paulista3 from "./components/Paulista3"
import RioSp from "./components/RioSp"

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <Paulista/>
        <Paulista2/>
        <Paulista3/>
        <RioSp/>
      </main>
    </div>
  )
}
