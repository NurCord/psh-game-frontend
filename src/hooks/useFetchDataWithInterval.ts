import { useEffect, useState } from "react";
import axios from "axios";
import PlayerStats from "types/PlayerStats";

const useFetchDataWithInterval = (url: string, interval: number = 10000) => {
  const [stats, setStats] = useState<PlayerStats[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      const response = await axios.get(url);
      setStats(response.data);
      if (loading) setLoading(false);
    };

    fetchData();

    const intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId);
  }, [url, interval]);

  return { stats, loading };
};

export default useFetchDataWithInterval;
