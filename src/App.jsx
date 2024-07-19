import List from './List.jsx'

export default function App()
{

  const fruits = [{id: 1, name: "Apple", calories: 90},
                  {id: 2, name: "Banana", calories: 101},
                  {id: 3, name: "Grapes", calories: 64},
                  {id: 4, name: "Mango",calories: 82},
                  {id: 5, name: "Peach", calories: 52}];

  const vegetables = [{id: 6, name: "Potatoes", calories: 132},
                      {id: 7, name: "Carrots", calories: 65},
                      {id: 8, name: "Broccoli", calories: 51},
                      {id: 9, name: "Celery",calories: 15},
                      {id: 10, name: "Tomato", calories: 32}];

  return(
    <>
    <List items={fruits} category="Fruits"/>
    <List items={vegetables} category="Vegetables"/>
    </>
  );
}