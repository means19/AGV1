import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BatteryCharging, PlayCircle, CheckCircle2 } from "lucide-react";
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
import { Link } from "react-router-dom";

const AgvCard = ({
  id,
  name,
  status,
  location,
  lastUsed,
  onDelete,
}: {
  id: string;
  name: string;
  status: string;
  location: string;
  lastUsed: string;
  onDelete: (id: string) => void;
}) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Charging":
        return <BatteryCharging className="flex mr-2" />;
      case "Idle":
        return <CheckCircle2 className="flex mr-2" />;
      case "Ongoing":
        return <PlayCircle className="flex mr-2" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Charging":
        return "text-blue-400";
      case "Idle":
        return "text-green-400";
      case "Ongoing":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  return (
      <Card className="cursor-pointer hover:bg-slate-100 active:bg-slate-200">
        <Link to={`/agv/${id}`}>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription className={`flex ${getStatusColor(status)}`}>
            {getStatusIcon(status)}
            {status}
          </CardDescription>
        </CardHeader>
        </Link>
        <CardContent>
          <p>Location: {location}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="italic text-gray-400">Last used: {lastUsed}</p>
          <AlertDialog>
            <AlertDialogTrigger>
              <button className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure to delete this AGV?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete{" "}
                  {name}'s information and remove its data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
  );
};

export default AgvCard;
