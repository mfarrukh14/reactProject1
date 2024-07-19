
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

    const lowCalFruits = fruits.filter(fruit=> fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit=> fruit.calories >= 100);

    const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b></li>)

    return(
        <ol>
            {listItems}
        </ol>
    );

}