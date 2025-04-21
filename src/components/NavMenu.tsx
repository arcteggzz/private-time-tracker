import { Link } from "react-router-dom";

function NavMenu() {
  const links = [
    {
      title: "Simpleton",
      route: "/v2/app_1",
    },
    {
      title: "Walks",
      route: "/v2/app_2",
    },
    {
      title: "Imposter Game",
      route: "/v2/app_3",
    },
  ];

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center font-[Inter] gap-2">
        {links.map((link) => (
          <Link
            key={link.route}
            to={link.route}
            className="bg-[#6e56b6] text-white px-4 py-2 rounded-lg mt-6 cursor-pointer"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
}

export default NavMenu;
