import Navbar from "../src/components/Navbar"
import Body from "../src/components/Body"
import data from "../src/data"

export default function App() {
  const body = data.map(items => <Body 
    key={items.id}
    item={items}
    />
    )
  return (
    <div className="App">
      <Navbar />
      {body}
    </div>
  );
}


