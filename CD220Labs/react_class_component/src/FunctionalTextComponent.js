function FunctionalTextComponent(props) {
  var style = {fontSize:props.size+"px", color:props.color}
  console.log("gggggggg");
  return <div>

        <span style={style}>{props.textvalue}</span>
        </div>;
}
export default FunctionalTextComponent;
