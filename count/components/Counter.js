
const Contador = () => {
    return(
      <div>
      <div>
        {store.getState()}
      </div>
      <button onClick={()=>{
        store.dispatch(caseIncremented)
      }}>Incrementar</button>
      <button onClick={()=>{
        store.dispatch(caseDecremented)
      }}>Decrementar</button>
      <button onClick={()=>{
        store.dispatch(caseReseted)
      }}>Reset</button>
      </div>
    )
  }
  export default Contador