function Card(props) {
  return (
    <div className="w-full h-full flex flex-col gap-4 text-center bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 cursor-pointer group">
      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <img src={props.icon} alt="icon" className="w-10 h-10 object-contain" />
      </div>
      <h2 className="text-lg sm:text-xl font-bold text-gray-900">{props.title}</h2>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{props.detail}</p>
    </div>
  );
}

export default Card;
