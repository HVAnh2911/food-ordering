/* eslint-disable @next/next/no-img-element */

export default function MenuItem() {
  return (
    <div className="bg-gray-300 p-4 gap-4 rounded-lg hover:bg-white trasition-all hover:shadow-md hover:shadow-black/25 text-center">
      <div>
        <img
          src={"/pizza.png"}
          alt="pizza"
          className="max-h-auto mx-auto block max-w-13 "
        />
      </div>
      <h4 className="font-semibold">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit ament , comsectuadbjs adiposocing elit
      </p>
      <button className="bg-primary text-white rounded-full mt-4">
        Add to cart $12
      </button>
    </div>
  );
}
