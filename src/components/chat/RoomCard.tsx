import {useNavigate} from '@solidjs/router';
import {createSignal, JSXElement, useContext} from 'solid-js';
import FetchUserProfile from '~/utils/FetchUserProfile';
import {JoinRoomsUrl} from '~/constants/UrlConstants';
import {WebsocketContext} from '~/context/WebsocketContextProvider';

type RoomCardProps = {
  id: string;
  imgSrc: string;
  name: string;
};

export default function RoomCard({
  id,
  imgSrc,
  name,
}: RoomCardProps): JSXElement {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = createSignal<boolean>(false);
  const { conn, setConn } = useContext(WebsocketContext);

  const joinRoomClickHandler = async (e) => {
    e.preventDefault();
    const userProfile = await FetchUserProfile();
    if (userProfile.error != '') {
      navigate('/login', { replace: true, state: { err: userProfile.error } });
    }

    if (conn() != null) {
      const wsRoomId: string = conn().url.split('/')[5].split('?')[0];
      if (wsRoomId === id) {
        navigate(`/chat/${name}`, {
          state: { username: userProfile.username },
        });
        return;
      }
    }

    const ws = new WebSocket(
      `${JoinRoomsUrl}/${id}?username=${userProfile.username}`
    );

    if (ws.OPEN) {
      setConn(ws);
      navigate(`/chat/${name}`, { state: { username: userProfile.username } });
    }
  };

  return (
    <div style={{ display: imageLoaded() ? 'block' : 'none' }}>
      <div class='min-w-32 min-h-52 flex flex-col items-center border bg-white px-6 py-6 shadow-md rounded-3xl'>
        <img src={imgSrc} alt='avatar' onLoad={() => setImageLoaded(true)} />
        <p class='self-center py-4 text-2xl font-semibold whitespace-nowrap dark:text-white'>
          {name}
        </p>
        <button
          class='border justify-center p-2 items-center content-center bg-indigo-700 text-white rounded-[4px]'
          onClick={joinRoomClickHandler}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
