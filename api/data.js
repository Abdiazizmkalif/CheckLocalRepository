// api/data.js
export default function handler(req, res) {
    const data = [
      {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        gender: "Male",
        ip_address: "192.168.1.1",
      },
      {
        id: 2,
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@example.com",
        gender: "Female",
        ip_address: "192.168.1.2",
      },
    ];
  
    res.status(200).json(data);
  }
  