function President(props) {
    return(
        <div className="container">
            <div className="image">
                <img src={props.imgSrc}  />
            </div>
            <div className="name">
                <a href= {props.wikiLink}>{props.name}</a>
            </div>
            <div className="years">
                <span>({props.years})</span>
            </div>
        </div>
    )
}
export default President