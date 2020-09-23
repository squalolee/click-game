import React from "react";


function FriendCard(props) {
  return (
    <div className="card item" onClick={() => props.clickedImage(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.position}
          </li>
          <li>
            <strong>Location:</strong> {props.team}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;