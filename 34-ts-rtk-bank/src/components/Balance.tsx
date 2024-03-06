import { useAppSelector } from "../app/hooks"

const Balance = () => {
  const balance = useAppSelector(state => state.balance);

  return (
    <div className="text-center text-uppercase">
      <h1>Iron Bank of Braavos</h1>
      <h2>Balance = {balance}</h2>
    </div>
  )
}

export default Balance