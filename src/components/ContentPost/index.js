import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { BsPencilSquare } from "react-icons/bs";
import ModalC from '../Modal'

import * as formS from '../../redux/modules/formPost/actions'

import './index.scss';

export default function ContentPost(props) {
  const dispatch = useDispatch();
  const contentData = useSelector(state => state.posts)
  const loginData = useSelector(state => state.login.username)


  const [showModal, setShowModal] = useState(false);
  const [idp, setIdp] = useState();

  const openModal = (id) => {
    setShowModal(prev => !prev);
    setIdp(id)

  }

  function Delete(id) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(formS.formDelete(id));
    }
  }

  return (
    contentData.map((data, index) =>

      data.title === '' ? '' :
        <div className="content-post" key={data.id}>
          <div>
            <div className="header-post" >
              <label>{data.title}</label>
              {data.authorPost === loginData &&
                <div className="items">
                  <button onClick={() => Delete(data.id)}>
                    <i>
                      <MdDeleteForever />
                    </i>
                  </button>
                  <div className="modal-content">
                    <button onClick={() => openModal(data.id)}>
                      <i>
                        <BsPencilSquare />
                      </i>
                    </button>
                    <ModalC
                      id={idp}
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                </div>
              }
            </div>
            <p>{data.content}</p>
          </div>

        </div>
    )

  )
}
