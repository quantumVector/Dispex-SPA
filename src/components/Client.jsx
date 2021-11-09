import React from 'react';
import classes from '../styles/Client.module.css';

import userIcon from '../assets/user.png';
import phoneIcon from '../assets/phone.png';
import mailIcon from '../assets/mail.png';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';



const ResidentItem = ({ id, name, phone, email, onDeleteClient }) => {
  const onClickDelete = () => {
    onDeleteClient(id);
  }

  return (
    <div className={classes.clientItem}>
      <div className={classes.infoWrap}>
        <img className={classes.icon} src={userIcon} alt="resident" />
        <div className={classes.info}>
          <div className={classes.name}>{name}</div>
          <div className={classes.phoneWrap}>
            <img className={classes.phoneIcon} src={phoneIcon} alt="phone" />
            <div>{phone}</div>
          </div>
          {email &&
            <div className={classes.mailWrap}>
              <img className={classes.mailIcon} src={mailIcon} alt="mail" />
              <div>{email}</div>
            </div>
          }
        </div>
      </div>
      <div className={classes.btnWrap}>
        <div className={classes.btn} onClick={onClickDelete}>
          <img className={classes.btnIcon} src={deleteIcon} alt="delete" />
        </div>
        <div className={classes.btn}>
          <img className={classes.btnIcon} src={editIcon} alt="edit" />
        </div>
      </div>
    </div>
  )
}

export default ResidentItem;