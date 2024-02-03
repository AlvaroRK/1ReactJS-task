const Task = ({ready}) => {
  return (
    <div className={ready ? "completada" : "proceso"}>
        <h1>Mi tarea</h1>
        
        <p>{ready ? "Tarea completada" : "Tarea en proceso"}</p>
    </div>
  )
}
export default Task