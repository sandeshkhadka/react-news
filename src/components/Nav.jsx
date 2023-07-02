import Selector from "./Selector";

const Nav = () => {
  return (
    <div className="flex justify-between gap-5 border-b border-black p-2 ">
      <h1 className="text-3xl text-gray-500">React News</h1>
      <Selector />
    </div>
  );
};

export default Nav;
