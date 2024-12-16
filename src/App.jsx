import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]); // State to store data

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the fetched data
        setData(data); // Update the state with fetched data
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}> {/* Each row gets a unique key */}
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.ip_address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
