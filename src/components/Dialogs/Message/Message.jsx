import React from 'react';
import s from './Message.module.css';


let Message = (props) => (
<div className={s.dialog}>{props.message}</div>
)

export default Message;