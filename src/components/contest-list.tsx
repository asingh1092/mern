import ContestPreview from "./contest-preview";
import { useEffect, useState } from "react";
import { API_SERVER_URL } from "../public-config";
import axios from "axios";

const ContestList = ({ initialContests }) => {
  const [contests, setContests] = useState(initialContests);
  // fetch or Axios to hit endpoints
  useEffect(() => {
    axios.get(`${API_SERVER_URL}/contests`).then((resp) => {
      // update
      setContests(resp.data.contests);
    });
  }, []);

  return (
    <div className="contest-list">
      {contests.map((contest) => {
        return (
          <ContestPreview key={contest.id} contest={contest} />
        );
      })}
    </div>
  );
};

export default ContestList;
