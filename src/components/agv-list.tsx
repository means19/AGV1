import { useState } from "react";
import { agvData } from "@/data/agvs";
import { Button } from "./ui/button";
import AgvCard from "./agv-cardu";
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AgvList = () => {
  const [agvs, setAgvs] = useState(agvData);
  const [showForm, setShowForm] = useState(false);
  const [newAgv, setNewAgv] = useState({
    name: "",
    status: "Idle",
    location: "",
    lastUsed: "Just now",
  });

  // Create new AGV from form
  const handleAdd = () => {
    const newId = (agvs.length + 1).toString();
    const agvToAdd = { id: newId, ...newAgv };
    setAgvs((prev) => [...prev, agvToAdd]);
    setNewAgv({
      name: "",
      status: "Idle",
      location: "",
      lastUsed: "Just now",
    });
    setShowForm(false);
  };

  // Handle form input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewAgv((prev) => ({ ...prev, [name]: value }));
  };

  // Delete AGV
  const handleDelete = (id: string) => {
    setAgvs((prev) => prev.filter((agv) => agv.id !== id));
  };

  // Toast
  const { toast } = useToast()

  return (
    <div className="p-4">
      {/* Form */}
      <AlertDialog>
        {/* Add Button */}
        <AlertDialogTrigger>
          <div className="mb-4">
            <Button
              className="absolute bottom-4 right-56 h-12 w-12 rounded-full font-bold text-2xl items-center"
              onClick={() => setShowForm((prev) => !prev)}
            >
              {showForm ? "+" : "+"}
            </Button>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg font-bold mb-2">
              Adding AGV
            </AlertDialogTitle>
            <div className="mb-2">
              <label className="block mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={newAgv.name}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Status:</label>
              <select
                name="status"
                value={newAgv.status}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded"
              >
                <option value="Idle">Idle</option>
                <option value="Charging">Charging</option>
                <option value="Ongoing">Ongoing</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block mb-1">Location:</label>
              <input
                type="text"
                name="location"
                value={newAgv.location}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded"
                required
              />
            </div>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>
              <div className="flex justify-end">
                <button onClick={() => {
                  handleAdd()
                  toast({
                    description: "AGV added successfully",
                    variant: "green",
                  })
                }}>Add</button>
              </div>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* AGV List*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agvs.map((agv) => (
          <AgvCard
            key={agv.id}
            id={agv.id}
            name={agv.name}
            status={agv.status}
            location={agv.location}
            lastUsed={agv.lastUsed}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
{
  AgvCard;
}
export default AgvList;
