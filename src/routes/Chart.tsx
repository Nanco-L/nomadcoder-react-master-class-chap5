import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
    coinId: string;
    isDark: boolean;
}

interface historyProps {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

function Chart({ coinId, isDark }: ChartProps) {
    const { isLoading, data } = useQuery<historyProps[]>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(coinId)
    );
    return (
        <div>
            {isLoading ? (
                "Loading..."
            ) : (
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: "Price (close)",
                            data: data?.map((obj) => [
                                obj.time_open * 1000,
                                Number(obj.close),
                            ]) as number[][],
                        },
                    ]}
                    options={{
                        chart: {
                            height: 500,
                            width: 500,
                            toolbar: { show: false },
                            background: "transparent",
                        },
                        theme: { mode: isDark ? "dark" : "light" },
                        xaxis: { type: "datetime" },
                        stroke: {
                            width: 2,
                        },
                        tooltip: {
                            y: {
                                formatter: (val) => `$${val.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
