import React from 'react';
import EmptyRows from './emptyRows.jsx';

const CategoriesTable = (props) => {
  const { Categories } = props;

  const dragStart = (e) => {
    const { target } = e;
    e.dataTransfer.setData('card_id', target.id);
  };

  const drop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('card_id');

    const card = document.getElementById(cardId);
    if (e.target.parentNode.className !== cardId[cardId.length - 1]) {
      return;
    }

    if (card.parentNode.id === 'original' && e.target.parentNode.parentNode !== 'notoriginal') {
      const clone = card.cloneNode(true);
      clone.id = `clone${cardId}`;
      clone.childNodes[0].style.display = 'block';
      const deleteButton = () => {
        document.getElementById(clone.id).remove();
      };
      clone.childNodes[0].onclick = deleteButton;
      e.target.innerHTML = '';
      e.target.appendChild(clone);
    } else {
      e.target.innerHTML = '';
      card.id = `clone${cardId}`;
      const deleteButton = () => {
        document.getElementById(card.id).remove();
      };
      card.childNodes[0].onclick = deleteButton;
      e.target.appendChild(card);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };


  const renderColumHeader = () => Categories.map((item, idx) => {
    const {
      C,
    } = item;
    return (
      <td key={idx} className="Cheader">
        {C}
      </td>
    );
  });


  return (
    <div className="floatRight">
      <table
        className="items"
      >
        <thead>
          <tr>
            <th colSpan="5">Categories</th>
          </tr>
          <tr>
            {renderColumHeader()}
          </tr>
        </thead>
        <tbody
          onDragStart={dragStart}
          onDrop={drop}
          onDragOver={dragOver}
          id="notoriginal"
        >
          <EmptyRows Categories={Categories} />
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
