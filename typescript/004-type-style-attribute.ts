type Props = {
  text: string,
  height: number,
  style?: React.CSSProperties

}


function Item(prop: Props) {

  return (
    <div style={{
      height: prop.height.toString() + 'px',
      border: '1px solid gray',
      backgroundColor: 'lightgray',
      ...prop.style
      }}>
      {prop.text}
    </div>
  )
}