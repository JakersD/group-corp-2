import React, { memo } from 'react';
import Messege from '../Messege/Messege';
import MessageFormContainer from '../../redux/containers/MessageFormContainer';

const Messenger = memo((props) => {
  if (props.messages !== undefined) {
    return (
      <div className="messanger">
        <div className="Messanger_field">
          {props.messages.map((message) => (
            <Messege
              author={message.author}
              text={message.text}
              user={message.user}
              key={message.id}
            />
          ))}
        </div>
        <MessageFormContainer classN="Messanger_form" />
      </div>
    );
  }
  return (
    <div className="messanger">
      <div className="Messanger_field_full">
        <h2>Выберите чат</h2>
      </div>
      <MessageFormContainer classN="Messanger_form_No" />
    </div>
  );
});

export default Messenger;
