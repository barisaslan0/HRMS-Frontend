import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobPostingService from "../services/jobPostingService";

export default function JobPostingDetail() {

  let { jobPostingId } = useParams();

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getByJobPostingId(jobPostingId)
      .then((result) => setJobPostings([result.data.data]));
  }, []);

  return(
  <div>
      
  </div>
  );
}
