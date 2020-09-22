import React from "react";

export default function ProgressCard({ title, finished, all }) {
  return (
    <div className="card__root col-5 col-md-12 mr-auto mb-4 ml-auto py-2 py-md-3 rounded font-weight-bold text-center text-capitalize text-white">
      <p className="roadmap__text roadmap__text--sm mb-0">{title}</p>

      <p className="card__progress mb-0">
        {finished} / {all}
      </p>
    </div>
  );
}
