import './App.css';


const listCustomers = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Sara',
    },
    {
      id: 3,
      name: 'Jill',
    },
    {
      id: 4,
      name: 'Chris',
    }
];


function App() {

  const renderCustomers = (customer) => {
    return (
      <li key={`Customer - ${customer.id}`}>{customer.name}</li>
    )

  }



  return (
    <div>

      <div><h1>Lista de Clientes</h1></div>
      
      <ul>
         <div>{listCustomers.map(renderCustomers)}</div> {/*map itera o array */}
      </ul>

    </div>
  );
}

export default App;
