import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplyLayout from "../ApplyLayout";
import Step1 from "./Step1";


const Local= () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/insuroboTravel/apply?type=local&step=${page}`);
  }, [page]);

  return (
    <ApplyLayout type='local'>
      {page === 1 ? <Step1 /> : ''}
    </ApplyLayout>
  )
}

export default Local;

