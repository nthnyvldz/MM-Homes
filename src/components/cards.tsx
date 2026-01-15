interface CardsProps {
  classId?: string;
  title: string;
  description: string;
}

export default function Cards({ classId, title, description }: CardsProps) {
  return (
    <div
      className={`group relative flex justify-center h-40 md:h-80 w-full items-center overflow-hidden rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 before:absolute before:inset-0 before:bg-black before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-300 ${classId}`}
    >
      {/* Responsive Mode */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 lg:hidden z-20">
        <h5 className="text-xs md:text-xl font-bold mb-2">{title}</h5>
        <p className="text-[10px] md:text-sm">{description}</p>
      </div>

      {/* Non-responsive Mode */}
      <div className="absolute inset-0 flex-col justify-center items-center text-center text-white p-4 group-hover:opacity-0 transition-opacity duration-300 hidden lg:flex z-20">
        <h5 className="text-lg lg:text-2xl font-bold">{title}</h5>
      </div>
      <div className="absolute inset-0 flex-col justify-center items-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex z-20">
        <p className="text-sm lg:text-base font-medium mb-2">{description}</p>
      </div>
    </div>
  );
}
