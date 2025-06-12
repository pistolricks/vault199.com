import {A, useNavigate} from '@solidjs/router';
import {JSXElement, useContext} from 'solid-js';
import {LogoutUrl} from '~/constants/UrlConstants';
import {WebsocketContext} from '~/context/WebsocketContextProvider';
import {AuthContext} from '~/context/AuthContextProvider';

const fetchLogout = async () => {
  try {
    const response = await fetch(LogoutUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
    });
    await response.json();
  } catch (err) {
    console.log(err);
  }
};

export default function Navbar(): JSXElement {
  const { conn, setConn } = useContext(WebsocketContext);
  const { storage } = useContext(AuthContext);
  const navigate = useNavigate();

  const connCloseHandler = () => {
    if (conn() != null) {
      conn().close();
      setConn(null);
    }
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    connCloseHandler();
    fetchLogout().then(() => {
      navigate('/login', { replace: true });
      return;
    });
  };

  return (
    <nav class=' border-gray-200 dark:bg-gray-900'>
      <div class='mt-20 flex justify-center items-center w-full'>
        <div class='block px-2' id='navbar-default'>
          <ul class='font-medium flex p-0 mt-4 rounded-lg  space-x-8 dark:bg-gray-800 dark:border-gray-700'>
            <li>
              <A
                href='/'
                onClick={connCloseHandler}
                class='block rounded text-black dark:text-white md:dark:text-blue-500'
              >
                Home
              </A>
            </li>
            <li>
              <A
                href='/profile'
                onClick={connCloseHandler}
                class='block rounded text-black dark:text-white md:dark:text-blue-500'
              >
                My Profile
              </A>
            </li>
            <li>
              <a
                href='/login'
                class='block rounded text-black dark:text-white md:dark:text-blue-500'
                onClick={logoutHandler}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
