
export default function List(props)
{


    const listItems = props.items.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)

    return(
        <>
            <h2 className="list-category">
                {props.category}
            </h2>
            <ol className="list-items">
                {listItems}
            </ol>
        </>
    );

}