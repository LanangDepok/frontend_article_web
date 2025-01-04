import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-3 bg-secondary mb-16">
      <div className="flex items-center gap-5">
        <div className="relative w-16 h-16">
          <Image
            src="/img/logo.png"
            fill={true}
            sizes="100"
            alt="logo"
            className="object-cover rounded-full"
            priority={true}
          />
        </div>
        <p className="text-2xl font-bold text-white">Article</p>
      </div>
      <div>
        <ul className="flex gap-5 items-center text-white">
          <li>Home</li>
          <li>My Article</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
