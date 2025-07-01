const SessiondataCard = ({ data }) => {
  const Icon = data.icon;
  return (
    <div className="w-full py-8 bg-gray-800 p-4 flex flex-col gap-4 rounded-xl shadow-sm shadow-green-400 hover:shadow-md hover:shadow-green-600">
      <div className="flex gap-2 items-center">
        <span className="p-1 bg-gray-700 rounded-xl text-green-500">
          {Icon && <Icon />}
        </span>
        <span>{data.name}</span>
      </div>

      {data.rows.map((items, index) => (
        <div key={index}>
          <div>
            <p>{items.desc}</p>
            <p className="mt-2 p-1 bg-zinc-700">{items.data}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessiondataCard;
