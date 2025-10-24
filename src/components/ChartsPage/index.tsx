import { ChartConfig, ChartContainer } from "../ui/chart";
import { Bar, BarChart } from "recharts";

const BarChartHolder = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <div className="w-1/2 border border-white p-4">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

const LineChart = () => {
  return <div className="w-1/2 border border-white p-4"></div>;
};

const ChartsPage = () => {
  // const [userInput, setUserInput] = useState("");

  // const [encryptedInput, setEncryptedInput] = useState("");

  return (
    <div className="w-screen h-screen p-10 flex items-center justify-center bg-gray-200">
      <div className="w-full h-full p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Charts Page</h1>

        <div className="flex w-full space-x-4">
          <BarChartHolder />
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
