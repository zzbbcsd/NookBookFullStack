export default function Card(props) {
  return (
    <div className="col-span-1">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a
          href="#!"
          className="flex justify-center"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img className="rounded-t-lg w-48 h-64" src={props.img} alt="" />
        </a>
        <div className="p-6 text-left">
          <h5 className="text-gray-900 text-xl font-bold mb-2 h-16">
            {props.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Author: <div className="underline">{props.author}</div>
          </p>
          <p className="text-gray-700 text-base mb-4">
            Publication:<div className="underline"> {props.publication}</div>
          </p>
        </div>
      </div>
    </div>
  );
}
