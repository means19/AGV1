import { useState } from "react";
import { useParams } from "react-router-dom"; // Replace with your routing library
import { agvData } from "@/data/agvs"; // Assuming the AGV data is stored here
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const AgvDetails = () => {
  const { id } = useParams<{ id: string }>(); // Get AGV id from route params
  const agv = agvData.find((agv) => agv.id === id); // Find the AGV by ID

  if (!agv) {
    return <p>AGV not found</p>;
  }

  // State for logs, battery, and orders
  const [logs, setLogs] = useState<string[]>([
    "Started task at A1",
    "Moved to B2",
    "Charging started",
  ]);
  const [battery, setBattery] = useState(80); // Example battery percentage
  const [orders, setOrders] = useState([
    { id: "1", description: "Deliver package to C3", status: "In Progress" },
    { id: "2", description: "Pick up from D2", status: "Completed" },
  ]);

  // State for new order
  const [newOrder, setNewOrder] = useState({
    description: "",
    status: "Pending",
  });

  // Handle order form input change
  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewOrder((prev) => ({ ...prev, [name]: value }));
  };

  // Handle adding a new order
  const handleAddOrder = () => {
    const newId = (orders.length + 1).toString();
    setOrders((prev) => [...prev, { id: newId, ...newOrder }]);
    setNewOrder({ description: "", status: "Pending" });
  };

  return (
    <div className="p-4">
      {/* AGV Details */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">AGV Details: {agv.name}</h1>
        <p>
          <strong>Status:</strong> {agv.status}
        </p>
        <p>
          <strong>Battery:</strong> {battery}%
        </p>
        <p>
          <strong>Location:</strong> {agv.location}
        </p>
        <p>
          <strong>Last Used:</strong> {agv.lastUsed}
        </p>
      </div>

      {/* Logs Section */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Logs</h2>
        <ul className="list-disc ml-5">
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>

      {/* Orders Section */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Orders</h2>
        <ul className="list-disc ml-5">
          {orders.map((order) => (
            <li key={order.id}>
              <strong>{order.description}</strong> - {order.status}
            </li>
          ))}
        </ul>
      </div>

      {/* Create Order Form */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Create Order</h2>
        <div className="mb-2">
          <label className="block mb-1">Description:</label>
          <input
            type="text"
            name="description"
            value={newOrder.description}
            onChange={handleOrderChange}
            className="w-full px-2 py-1 border rounded-sm pr-6"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Status:</label>
          <select
            name="status"
            value={newOrder.status}
            onChange={handleOrderChange}
            className="w-full px-2 py-1 border rounded-sm pr-6"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
        <Button className="mt-4" onClick={handleAddOrder}>Add Order</Button>
        <Link to={`/`}><Button className="absolute mt-4 right-72">Back</Button></Link>
      </div>
    </div>
  );
};

export default AgvDetails;