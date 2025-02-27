import { useState, useEffect } from 'react';
import UpdateItem from './components/UpdateItem';

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [item, setItem] = useState(null);

  // Fetch the data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URI}/1`); // Fetch a specific door, change `/1` to the desired door ID
        if (response.ok) {
          const data = await response.json();
          setItem(data);
        } else {
          console.error('Failed to fetch door data');
        }
      } catch (error) {
        console.error('Error fetching door data:', error);
      }
    };

    fetchData();
  }, []);

  return <UpdateItem item={item} />;
}

export default App;
