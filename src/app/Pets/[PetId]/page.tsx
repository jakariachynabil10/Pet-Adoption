/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useParams } from "next/navigation";

const DynamicPage = () => {
    const params = useParams()
    
  return (
    <div>
      <h1>Dynamic Pet Page {params.PetId}</h1>
    </div>
  );
};

export default DynamicPage;
