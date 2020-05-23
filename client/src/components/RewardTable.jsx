import React from 'react';


const RewardTable = (props) => {
  const { Rewards } = props;


  const dragStart = (e) => {
    const { target } = e;
    e.dataTransfer.setData('card_id', target.id);
  };

  const dragOverSpan = (e) => {
    e.stopPropagation();
  };
  const deleteButton = (id) => {
    document.getElementById(id).remove();
  };

  const rednerRedwardCom = () => Rewards.map((item, idx) => {
    const {
      id, R,
    } = item;
    return (
      <tr
        key={idx}
        className="reward"
      >
        <td className={`reward${id}`} id="original">
          <div
            id={id}
            draggable="true"
            className="rewarddiv"
            onDragStart={dragStart}
            onDragOver={dragOverSpan}
          >
            <button style={{ display: 'none' }} className="button" type="button" onClick={() => deleteButton(id)}>X</button>
            {R}
          </div>
        </td>
      </tr>
    );
  });


  return (
    <div className="floatLeft">
      <table className="items">
        <thead>
          <tr>
            <th>Rewards</th>
          </tr>
          <tr>
            <td />
          </tr>
        </thead>
        <tbody>
          {rednerRedwardCom()}
        </tbody>
      </table>
    </div>

  );
};

export default RewardTable;
