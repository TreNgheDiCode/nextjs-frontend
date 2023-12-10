const Button = ({ text }: { text: string }) => {
  return (
    <button className="w-full mt-4 rounded-md bg-[#36384D] hover:bg-gradient-to-r from-[#FF5476] via-[#FF5E59] to-[#FF5D4D] text-white p-3 text-sm">
      {text}
    </button>
  );
};

export default Button;
