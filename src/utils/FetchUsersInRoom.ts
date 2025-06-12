import {GetUsersInRoomsUrl} from '~/constants/UrlConstants';

import {CredentialError} from './CredentialValidator';

type ChatUser = {
  username: string;
};


export default async function FetchUsersInRoom(roomId: string) {
  var users: Array<ChatUser> = [];
  const finalUrl: string = `${GetUsersInRoomsUrl}/${roomId}`;
  try {
    const response = await fetch(finalUrl, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
    });

    const data = await response.json();
    console.log("data", data)
    if (response.ok) {
      for (var i = 0; i < data.length; i++) {
        var user: ChatUser = {
          username: data[i].username,
        };
        users.push(user);
      }
      return users;
    } else if (response.status == 401) {
      return CredentialError.unauthenticatedError;
    }
  } catch (err) {
    return CredentialError.catchAllError;
  }
}
