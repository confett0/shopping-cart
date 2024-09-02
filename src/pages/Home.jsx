import { useOutletContext } from "react-router-dom";

export default function Home() {
  const [cart, setCart] = useOutletContext();
  
  return (
    <>
      <h1>Home page goes here</h1>
    </>
  )
}
