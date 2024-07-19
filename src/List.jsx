import PropTypes from 'prop-types';

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


List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number})),
}
List.defaultProps = {
    category: "Category",
    items: []
}