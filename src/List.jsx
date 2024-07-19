
export default function List()
{
    const fruits = [{id: 1, name: "Apple", calories: 90},
                    {id: 2, name: "Banana", calories: 101},
                    {id: 3, name: "Grapes", calories: 64},
                    {id:4, name: "Mango",calories: 82},
                    {id:5, name: "Peach", calories: 52}];

    
    // fruits.sort((a, b)=> a.name.localeCompare(b.name));  ALPHABETICAL ORDER
    // fruits.sort((a, b)=> b.name.localeCompare(a.name));  REVERSE ALPHABETICAL ORDER
    // fruits.sort((a,b)=> a.calories - b.calories);        NUMERIC ORDER
    // fruits.sort((a, b)=> b.calories - a.calories);       REVERSE NUMERIC ORDER

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>)

    return(
        <ol>
            {listItems}
        </ol>
    );

}