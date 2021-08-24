import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as formS from '../../redux/modules/formPost/actions'
import { Button } from '../Button'

import './index.scss';

export default function ModalC({
  id,
  showModal,
  setShowModal,
}) {

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const dispatch = useDispatch();

  function Update() {
    dispatch(formS.formUpdate(id, newTitle, newContent));
    setShowModal(prev => !prev);

  }

  return (
    <>
      {
        showModal ? (
          <div className="background">
            <div className="modalWrapper" showModal={showModal}>

              <form>
                <h1>Edit item </h1>
                <label>
                  Title
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={newTitle}
                    placeholder="Hello World"
                    onChange={(e) => setNewTitle(e.target.value)}

                  />
                </label>
                <label>
                  Content
                  <textarea
                    id="content"
                    value={newContent}
                    placeholder="Content here"
                    onChange={(e) => setNewContent(e.target.value)}
                  />
                </label>
                <Button id="save" type="button" onClick={() => Update()} >SAVE</Button>
                <Button type="button" id="close" onClick={() => setShowModal(prev => !prev)} >CLOSE</Button>
              </form>
            </div>
          </div>
        ) : null}

    </>
  )
}
