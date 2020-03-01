import React from 'react';

import { Repo, Loader, ErrorMessage } from 'components';
import IRepo from 'types/repo';

import { ReposWrapper } from './ReposInfo.style';

const ReposInfo = ({
  fetching,
  error,
  repos,
}: {
  fetching: boolean;
  error: string | null;
  repos: IRepo[];
}) => {
  if (error) {
    return <ErrorMessage message={`Repos: ${error}`} />;
  }

  return (
    <div>
      <h3>Repositories:</h3>
      {fetching ? (
        <Loader />
      ) : (
        <ReposWrapper>
          {repos.map((r: IRepo) => (
            <Repo key={r.id} {...r} />
          ))}
        </ReposWrapper>
      )}
    </div>
  );
};

export default ReposInfo;
