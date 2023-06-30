import { Bird, Cloud, Skyblock, Sun, Ocean, Wave, Sand, Tree } from "./components"

function App() {
  return (
    <>

      <Bird />
      <Bird option={"bird_2"} />
      <Bird option={"bird_3"} />
      
      <Skyblock />
      <Sun />
      <Ocean />
      <Cloud />
      <Cloud option={"cloud_2"} />
      <Cloud option={"cloud_3"} />
      <Wave />
      <Sand />
      <Tree />
    </>
  )
}

export default App
