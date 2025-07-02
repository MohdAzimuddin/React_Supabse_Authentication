const UserdataCard = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 transition delay-500">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full p-1 xs:p-3 md:p-4 lg:p-6 bg-gray-800 rounded-xl flex flex-col gap-2 shadow-sm shadow-green-400 hover:shadow-md hover:shadow-green-600"
        >
          <div className="flex items-center gap-2 ">
            <span className="p-1 bg-gray-700 rounded-xl text-green-500">
              <item.icon />
            </span>
            <span className="text-md">{item.name}</span>
          </div>
          <p
            className="text-lg truncate cursor-help"
            title={item.fullData || item.data}
          >
            {item.data}
          </p>
          <p className="text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default UserdataCard;
