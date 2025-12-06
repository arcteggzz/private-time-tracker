import { Link } from "react-router-dom";

function NavMenu() {
  const links = [
    {
      title: "Simpleton",
      route: "/v2/app_1",
    },
    {
      title: "Walks Tracker",
      route: "/v2/app_2",
    },
    {
      title: "Imposter Game",
      route: "/v2/app_3",
    },
    {
      title: "Video Shorts",
      route: "/v2/app_4",
    },
    {
      title: "Fusion Reels Demo",
      route: "/v2/app_5/a1",
    },
    {
      title: "Listen Up!",
      route: "/v2/app_6",
    },
    {
      title: "Tangle Text",
      route: "/v2/app_7",
    },
    {
      title: "Wallet Creation Flow",
      route: "/v2/app_8",
    },
    {
      title: "Wallet Management",
      route: "/v2/app_9",
    },
    {
      title: "QR Code Viewer",
      route: "/v2/app_10",
    },
    {
      title: "Encryption Demo",
      route: "/v2/app_11",
    },
    {
      title: "PostingHelper",
      route: "/v2/app_12",
    },
    {
      title: "Charts Page",
      route: "/v2/app_13",
    },
    {
      title: "Liquidation Calculator",
      route: "/v2/app_17",
    },
    {
      title: "Merchant QrCode",
      route: "/v2/app_18",
    },
    {
      title: "Customer Payment",
      route: "/v2/customer-payment",
    },
  ];

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center font-[Inter]">
        <div className="sm:max-w-xl grid grid-cols-2 items-center justify-center font-[Inter] gap-2">
          {links.map((link) => (
            <Link
              key={link.route}
              to={link.route}
              className="bg-[#6e56b6] text-white px-4 py-2 rounded-lg mt-6 cursor-pointer text-center"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavMenu;
