/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useParams, useSearchParams } from "next/navigation";

const DynamicPage = () => {
  
    const params = useParams()
    const searchParams = useSearchParams()
    console.log(searchParams)
    
  return (
    <div>
      <h1>Dynamic Pet Page {params.petId}</h1>
    </div>
  );
};

export default DynamicPage;
