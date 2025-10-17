function Card(props) {
  return (
    <div className="w-full h-full flex flex-col gap-3 text-center border-[.5px] border-secondary rounded-lg p-3 hover:bg-gray-100 cursor-pointer">
      <img src={props.icon} alt="icon" className="m-auto w-12 rounded-xl" />
      <h2 className="text-lg text-black font-semibold">{props.title}</h2>
      <p className="text-sm text-black font-medium">{props.detail}</p>
    </div>
  );
}

export default Card;
