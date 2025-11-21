
import { useEffect, useState } from 'react';
import Axios from 'axios';




const Buttons = ({ categories, setCategory }) => {
  return (
    <div className="text-center">
      {categories.map((category) => (
        <button key={category} className="btn btn-primary mx-2 my-2" onClick={() => setCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  )
}




const App = () => {

  const [excused, setExcused] = useState('');
  const [category, setCategory] = useState('Family');

  const categories = ['Family', 'Office', 'Children', 'Party', 'Funny', 'Unbelievable', "Developers", "Gaming"];

  const getExcuse = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category.toLowerCase()}/`).then((response) => {
      console.log(response.data[0]);
      setExcused(response.data[0]);

    });
  }

  useEffect(() => {
    getExcuse();
  }, [category]);

  return (
    <div>
      <h1 className="text-center my-5">Welcome my excused app</h1>
      <Buttons categories={categories} setCategory={setCategory} />
      {excused && <p className="border p-3 m-2">{excused.excuse}</p>}

    </div>
  )
}

export default App


