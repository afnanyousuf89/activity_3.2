import './itemcss.css'

function SingleItem(props) {
    return <div className='items'>
        <h3>Name: {props.namez.name}</h3>
        <img src={props.namez.sprites.back_default} />
        <img src={props.namez.sprites.front_default} />
        <img src={props.namez.sprites.back_shiny} />
        <h3>Height: {props.namez.height}</h3>
    </div>


}
export default SingleItem;