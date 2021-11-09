import React from 'react';
import classes from '../styles/Client.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { enableEditMod } from '../redux/actions/housingStock';
import cn from 'classnames';

import userIcon from '../assets/user.png';
import phoneIcon from '../assets/phone.png';
import mailIcon from '../assets/mail.png';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';

const ResidentItem = ({ id, bindId, name, phone, email, onDeleteClient }) => {
  const dispatch = useDispatch();
  const [editModStatus, setEditModStatus] = React.useState(false);
  const editMod = useSelector(({ housingStock }) => housingStock.editMod);
  const editableClient = useSelector(({ housingStock }) => housingStock.editableClient);

  React.useEffect(() => {
    editMod && editableClient.bindId == bindId ? setEditModStatus(true) : setEditModStatus(false);
  }, [editMod]);

  const onClickDelete = () => {
    onDeleteClient(bindId);
  }

  return (
    <div className={cn(classes.clientItem, { [classes.editable]: editModStatus })}>
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
        <div className={cn(classes.btn, { [classes.disable]: editModStatus })}
          onClick={onClickDelete}>
          <img className={classes.btnIcon} src={deleteIcon} alt="delete" />
        </div>
        <div className={cn(classes.btn, { [classes.active]: editModStatus })}
          onClick={() => dispatch(enableEditMod({ id, bindId, name, phone, email }))}>
          <img className={classes.btnIcon} src={editIcon} alt="edit" />
        </div>
      </div>
    </div>
  )
}

export default ResidentItem;