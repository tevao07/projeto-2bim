import corinthians from "../assets/corinthians.jpg"

export default function Header() {
  return (
    <div>
      <h1 className="text-5xl font-bold underline text-fuchsia-100">TÍTULOS MAIS IMPORTANTES DO TIMÃO</h1>
      <img src={corinthians} alt="" />
    </div>
  )
}
