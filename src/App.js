import './App.css';
import {useState} from 'react';
function App() {
  const [data,setData]=useState([]);

const func1=async ()=>
{
  try {
    const response = await fetch('http://localhost:3000/posts');
    const jsonData = await response.json();
    setData(jsonData);
    console.log(data);
    console.log(JSON.stringify(data));
  } catch (error) {
    console.error('에러', error);
  }
}

//  const func2 = async (postId, newTitle) => {
//     try {
//       await fetch(`http://localhost:3000/now/${postId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title: newTitle }),
//       });
//       func1();
//     } catch (error) {
//       console.error('Error updating post:', error);
//     }
//   };

  return (
    <div >
      Hello world
      <button onClick={func1}>a</button>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;