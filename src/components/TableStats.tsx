/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import PlayerStats from "types/PlayerStats";

const headers = [
  { key: "profile", label: "Profile" },
  { key: "nickname", label: "Nickname" },
  { key: "score", label: "Score" },
  { key: "creationDate", label: "Creation Date" },
];

export const TableStats = () => {
  const [stats, setStats] = useState<PlayerStats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = process.env.REACT_APP_API_URL;
      if (!apiUrl) return;
      const response = await axios.get(apiUrl);
      if (loading) setLoading(false);
      setStats(response.data);
    }

    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Player Statistics</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="bg-white border border-gray-200">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header.key} className="table-cell">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stats.map((player) => (
              <tr key={player.id}>
                <td className="table-cell">
                  <img
                    src={player.profileImage}
                    alt={player.nickname}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="table-cell">{player.nickname}</td>
                <td className="table-cell">{player.score}</td>
                <td className="table-cell">
                  {new Date(player.creationDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableStats;
