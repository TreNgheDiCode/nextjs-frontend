import { Check } from "lucide-react";

const ListItem = ({ text }: { text: string }) => {
  return (
    <li className="mb-2 flex items-center">
      <div>
        <Check className="mr-3 h-5 w-5 rounded-full bg-orange-500 p-1 text-white font-semibold" />
      </div>
      <span>{text}</span>
    </li>
  );
};

export default ListItem;
