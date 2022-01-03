const Item = (props) => {

    const { c, lap, pos } = props; 

    if(!lap)
        return null;

    let date = new Date(parseInt(lap.laptime));

    // console.log(lap)

    return (
        <div className={c}>
            <div className="pos">{pos}</div>
            <div className="pic" style={{backgroundImage: `url(${lap.steamProfile.avatar.large})`}}></div>
            <div className="name">{lap.steamProfile.nickname}</div>
            <div className="score vehicle">{lap.vehiclename}</div>
            <div className="score">{`${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`}</div>
        </div>
    )
}
export default Item;
