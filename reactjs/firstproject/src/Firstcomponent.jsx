const Firstcomponent=()=>{
    let mystyle={
        color:'brown',
        fontsize:'40px',
        backgroundColor:'pink',
        textalign:'center'
    }
    return(
        <>
        <div style={{color:'red',backgroundColor:'yellowgreen'}}>
            <h3>First Component created by me</h3>
            <h4 style={mystyle}>hello css example</h4>
        </div>
        </>
    )
}       
export default Firstcomponent;