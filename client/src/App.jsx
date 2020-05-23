import React from 'react';
import Tables from './styles';
import CategoriesTable from './components/CategoriesTable.jsx';
import RewardTable from './components/RewardTable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Categories: [
        {
          className: 1, C: 'C1',
        },
        {
          className: 2, C: 'C2',
        },
        {
          className: 3, C: 'C3',
        },
        {
          className: 4, C: 'C4',
        },
        {
          className: 5, C: 'C5',
        },
      ],
      Rewards: [
        {
          id: 1, R: 'R1',
        },
        {
          id: 2, R: 'R2',
        },
        {
          id: 3, R: 'R3',
        },
        {
          id: 4, R: 'R4',
        },
        {
          id: 5, R: 'R5',
        },
      ],
    };
  }

  render() {
    const { Categories, Rewards } = this.state;
    return (
      <Tables>
        <RewardTable Rewards={Rewards} />
        <CategoriesTable Categories={Categories} />
      </Tables>
    );
  }
}
export default App;
