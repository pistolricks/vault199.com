import {CreateRoomUrl, GetRoomsUrl} from '../constants/UrlConstants';
import {CredentialError} from './CredentialValidator';
import FetchRandomAvatarImage from './RandomAvatar';

export type RoomResponse = {
  id: string;
  name: string;
  imgSrc: string;
};

export async function FetchRooms() {
  var rooms: Array<RoomResponse> = [];
  try {
    const response = await fetch(GetRoomsUrl, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
    });

    const data = await response.json();
    if (response.ok) {
      for (var i = 0; i < data.length; i++) {
        var room: RoomResponse = {
          id: data[i].id,
          name: data[i].name,
          imgSrc: FetchRandomAvatarImage(data[i].name as string),
        };
        rooms.push(room);
      }
      return rooms;
    } else if (response.status == 401) {
      return CredentialError.unauthenticatedError;
    }
  } catch (err) {
    return CredentialError.catchAllError;
  }
}

export async function CreateRoom(id: string, roomName: string) {
  var room: RoomResponse = {
    id: '',
    name: '',
    imgSrc: '',
  };
  try {
    const response = await fetch(CreateRoomUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        id: id,
        name: roomName,
      }),
    });

    const data = await response.json();
    console.log("data", data?.data)
    if (response.ok) {
      room.id = data?.data.id as string;
      room.name = data?.data.name as string;
      room.imgSrc = FetchRandomAvatarImage(data?.data?.name as string);
      return room;
    } else if (response.status === 401) {
      return CredentialError.unauthenticatedError;
    }
  } catch (err) {
    console.log(err);
    return CredentialError.catchAllError;
  }
}
