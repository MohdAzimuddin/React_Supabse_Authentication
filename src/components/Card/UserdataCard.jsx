const UserdataCard = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 transition delay-500 items-center">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full py-4 md:py-6 px-3 md:px-4 lg:px-8 bg-gray-800 rounded-xl flex flex-col gap-2 shadow-sm shadow-green-400 hover:shadow-md hover:shadow-green-600 "
        >
          <div className="flex items-center gap-2 ">
            <span className="p-1 bg-gray-700 rounded-xl text-green-500 text-xl lg:text-2xl">
              <item.icon />
            </span>
            <span className="text-lg lg:text-xl font-bold">{item.name}</span>
          </div>
          <p
            className="text-md sm:text-lg font-semibold truncate cursor-help"
            title={item.fullData || item.data}
          >
            {item.data}
          </p>
          <p className="text-sm sm:text-md lg:text-lg text-gray-300">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default UserdataCard;
