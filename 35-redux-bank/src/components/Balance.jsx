import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector(state => state.balance)

  return (
    <div>
      <h1>Iron Bank of Braavos</h1>
      <h2>Balance = {balance}</h2>
    </div>
  )
}

export default Balance