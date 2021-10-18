import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [servicesError, setservicesError] = useState([]);
  useEffect(() => {
    fetch("/JSON/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => setservicesError(err.code));
  }, []);
  return {
    services,
    servicesError,
  };
};
export default useServices;
