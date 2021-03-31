import { dbService } from 'firebasefile';
import React, { useState } from 'react';

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNeet, setNewNeet] = useState(nweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this text?");
    if (ok) {
      await dbService.doc(`sns_app/${nweetObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`sns_app/${nweetObj.id}`).update({
      text: newNeet,
    })
    setEditing(false);
  };
  const onChange = (event) => {
    const { target: { value },
    } = event;
    setNewNeet(value)
  };
  return (
    <div>
      {
        editing ?
          (
            <>
              <form onSubmit={onSubmit}>
                <input type="text" value={newNeet} required onChange={onChange} />
                <input type="submit" value="update" />
              </form>
              <button onClick={toggleEditing}>Cancel</button>
            </>
          ) : (
            <>      <h4>{nweetObj.text}</h4>
              {isOwner && (
                <>
                  <button onClick={onDeleteClick}>Delete</button>
                  <button onClick={toggleEditing}>Edit</button>
                </>
              )}

            </>
          )

      }
    </div>
  );
};


export default Nweet;