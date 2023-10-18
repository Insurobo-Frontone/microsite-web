import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplyLayout from "../ApplyHeader";
import Step1 from "./Step1";

const Over = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/insuroboTravel/apply?type=over&step=${page}`);
  }, [page]);

  return (
    <ApplyLayout type='over'>
      {page === 1 ? <Step1 /> : ''}
    </ApplyLayout>
  )
}

export default Over;
