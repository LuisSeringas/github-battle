import React from 'react';
import RepoCard from './repo-card';

export default function ReposGrid({ repos }) {
  return (

    <ul className = 'grid space-around'>
      
      {repos.map((repo, index) => {
          <RepoCard repo={repo} rating={index + 1}/>
      })}

    </ul>
  );
}
