const SessiondataCard = ({ data }) => {
  const Icon = data.icon;
  return (
    <div className="w-full py-8 bg-gray-800 p-4 flex flex-col gap-4 rounded-xl shadow-sm shadow-green-400 hover:shadow-md hover:shadow-green-600">
      <div className="flex gap-2 items-center">
        <span className="p-1 bg-gray-700 rounded-xl text-green-500 text-xl lg:text-2xl">
          {Icon && <Icon />}
        </span>
        <span className="text-lg lg:text-xl font-bold">{data.name}</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.rows.map((items, index) => (
          <div key={index}>
            <div>
              <p className="md:px-2 text-sm sm:text-md lg:text-lg text-gray-300">{items.desc}</p>
              <p
                className="mt-2 py-1 px-3 bg-zinc-700 truncate cursor-help"
                title={items.fullData || items.data}
              >
                {items.data}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessiondataCard;
