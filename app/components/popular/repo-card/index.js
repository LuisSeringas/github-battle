import React from "react";

export default function RepoCard({ repo, rating }) {
  const { name, owner, html_url, stargazers_count, forks, open_issues } = repo;
  const { login, avatar_url } = owner;

  return (
    <li key={html_url} className="repo bg-light">
      <h4 className="header-lg center-text">#{rating} </h4>
      <img className="avatar" src={avatar_url} alt={`Image for ${login}`} />
      <h2 className="center-text">
        <a className="link" href={html_url}>
          {login}
        </a>
      </h2>
    </li>
  );
}
