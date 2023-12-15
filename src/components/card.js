function Card (props) {
    const {src  , desc } = props
    return (
        <div>
            <div class="card" style={{width: '18rem'}}>
  <img src={src} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">{desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    )

}

export default Card;