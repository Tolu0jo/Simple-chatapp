import {
    MultiChatSocket, MultiChatWindow,
    useMultiChatLogic,
} from 'react-chat-engine-advanced'

import PropTypes from 'prop-types';

const ChatsPage = (props) => {
  const { user } = props;
  const chatProps = useMultiChatLogic('aec932bd-3b58-4e34-88b8-390e83047975', user.username, user.secret);
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket{...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  )
}

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired
  }).isRequired
};


export default ChatsPage 
/************* */
// import {
//     PrettyChatWindow
// } from 'react-chat-engine-pretty'

// const ChatsPage = (props) => {
//   return (
//     <div style={{height:"100vh"}}>
//         <PrettyChatWindow
//          projectId="aec932bd-3b58-4e34-88b8-390e83047975"
//          username={props.user.username}
//          secret={props.user.secret}
//          style={{height:'100%'}}
//          />

//     </div>
//   )
// }

// export default ChatsPage