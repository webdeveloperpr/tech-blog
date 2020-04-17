
const Layer1 = (props) => {
  return <div style={{
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'fixed',
    backgroundImage: `repeating-linear-gradient(0, transparent, transparent ${props.pixels - 1}px, ${props.color} ${props.pixels}px)`,
    backgroundPosition: 'top left',
  }} />
}

const Layer2 = (props) => {
  return <div style={{
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'fixed',
    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent ${props.pixels - 1}px, ${props.color} ${props.pixels}px)`,
  }} />
}

const PointGrid = (props) => {
  return (
    <div style={{
      position: 'fixed',
      pointerEvents: 'none',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }}>
      <Layer1 pixels={props.pixels} color={props.color} />
      <Layer2 pixels={props.pixels} color={props.color} />
    </div>
  )
}

PointGrid.defaultProps = {
  color: 'red',
  pixels: 8,
}

export default PointGrid;