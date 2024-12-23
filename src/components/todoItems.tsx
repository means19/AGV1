import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

interface TodoItemsProps {
  text: string;
  id: number;
  isCompleted: boolean;
  deleteTodo: (id: number) => void;
  toggle: (id: number) => void;
}

const TodoItems = ({
  text,
  id,
  deleteTodo,
  toggle,
  isCompleted,
}: TodoItemsProps) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      {/* Toggle Completion */}
      <div
        onClick={() => toggle(id)}
        className="flex items-center flex-1 cursor-pointer"
      >
        <img
          src={isCompleted ? tick : not_tick}
          alt="Toggle Status"
          className="w-7 h-7"
        />
        <p
          className={`ml-4 text-gray-800 text-lg font-poppins ${
            isCompleted ? "line-through text-gray-400" : ""
          }`}
        >
          {text}
        </p>
      </div>

      {/* Delete Button */}
      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="Delete Task"
        className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200"
      />
    </div>
  );
};

export default TodoItems;
