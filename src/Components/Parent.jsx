
const Parent = ({Parent = 'div',children,...proxy}) => {
  return (
    <Parent {...proxy}>
   {children}
    </Parent>
  )
}

export default Parent