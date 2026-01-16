interface DynamicCardsProps {
  image: string;
  title: string;
  description: string;
}

export default function DynamicCards({
  image,
  title,
  description,
}: DynamicCardsProps) {
  return (
    <div className="max-w-sm w-full md:max-w-full lg:flex p-4 lg:p-8">
      <div
        className="h-64 lg:h-auto lg:w-xl xl:w-lg flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="border-r border-b border-l border-gray-100 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-sm lg:text-xl mb-2">
            {title}
          </div>
          <p className="text-gray-700 text-sm lg:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}
