"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";

interface Reading {
  time: string;
  value: number;
}

interface TemperatureAlert {
  message: string;
  temperature: number;
  sensorName: string;
  timestamp: string;
  severity: "critical" | "warning";
}

export default function DashboardTempPage() {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [loading, setLoading] = useState(true);
  const [alerts, setAlerts] = useState<TemperatureAlert[]>([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!apiUrl) return;

    async function fetchData() {
      try {
        const res = await fetch(`${apiUrl}/temperature-sensors`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();

        const sortedData = [...data].reverse();

        const formatted = sortedData.map((item: any) => ({
          time: new Date(item.timestamp || item.createdAt).toLocaleTimeString("uk-UA", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          value: item.value,
        }));

        setReadings(formatted);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [apiUrl]);

  useEffect(() => {
    if (!apiUrl) return;

    const eventSource = new EventSource(`${apiUrl}/temperature-sensors/alerts`);

    eventSource.onmessage = (event) => {
      try {
        const alert: TemperatureAlert = JSON.parse(event.data);
        setAlerts((prev) => [alert, ...prev].slice(0, 5));
      } catch (err) {
        console.error("Error parsing SSE data:", err);
      }
    };

    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [apiUrl]);

  if (loading) return <p className="p-4">Data is loading...</p>;

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      {alerts.length > 0 && (
        <div className="space-y-2">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md"
              role="alert"
            >
              <p className="font-bold">⚠️ {alert.message}</p>
              <p className="text-sm">
                Давач: {alert.sensorName} | Час:{" "}
                {new Date(alert.timestamp).toLocaleTimeString("uk-UA")}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="w-full h-96 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Температурні показники
        </h2>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={readings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}