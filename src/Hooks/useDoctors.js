import { useEffect, useState } from "react";

const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorsError, setDoctorsError] = useState([]);
  useEffect(() => {
    fetch("/JSON/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => setDoctorsError(err.code));
  }, []);
  return {
    doctors,
    doctorsError,
  };
};
export default useDoctors;
