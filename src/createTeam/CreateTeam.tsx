import React, { FunctionComponent } from 'react';
import CreateTeamHeader from './CreateTeamHeader';
import FilterSection from './filterSection/FilterSection';
import SearchSection from './SearchSection';
import SelectedMembers from './selectedMembers/SelectedMembers';

const CreateTeam: FunctionComponent = () => {
  return (
    <div>
      <CreateTeamHeader />
      <SelectedMembers />
      <SearchSection />
      <FilterSection />
    </div>
  );
};

export default CreateTeam;
