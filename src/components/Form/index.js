import React from 'react'
import './index.scss'
import { Button } from '../Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import * as formS from '../../redux/modules/formPost/actions'

export default function Form() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isActive] = useState(true);

  const contentData = useSelector(state => state.login)
  const dispatch = useDispatch();

  function addPost() {
    dispatch(formS.formCreate(title, content, contentData.username, isActive));
  }

  return (
    <>
      <form>
        <label>
          Title
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Hello World"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content
          <textarea
            id="content"
            placeholder="Content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <Button type="button" disabled={!title || !content} onClick={addPost} >CREATE</Button>
      </form>
    </>
  )
}
