import * as React from "react";
import Contest from "../models/contest";

const ContestPreview: React.FC<{ contest: Contest }> = ({
  contest,
}) => {
  return (
    <div className="contest-preview">
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContestPreview;
