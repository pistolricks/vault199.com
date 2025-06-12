import {Accessor, JSXElement, Show} from 'solid-js';

type CreateRoomCardProps = {
  onChangeHandler: any;
  onClickHandler: any;
  errorMsg: Accessor<string>;
};

export default function CreateRoomCard({
  onChangeHandler,
  onClickHandler,
  errorMsg,
}: CreateRoomCardProps): JSXElement {
  return (
    <div class='flex items-center py-14 justify-center h-1/3'>
      <div class='min-w-96 flex flex-col items-center border bg-white px-6 py-6 shadow-md rounded-3xl'>
        <input
          class='min-w-80 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-cyan-500 '
          type='text'
          placeholder='Enter room name'
          onChange={onChangeHandler}
        />
        <Show when={errorMsg() !== ''}>
          <div class='rounded-md flex mt-5 max-w-lg'>
            <svg viewBox='0 0 24 24' class='text-red-600 w-4 h-4 mr-1'>
              <path
                fill='currentColor'
                d='M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z'
              ></path>
            </svg>
            <span class='text-red-800 text-sm'>{errorMsg()}</span>
          </div>
        </Show>
        <button
          class='border mt-3 justify-center w-32 p-2 items-center content-center bg-indigo-700 text-white rounded-[4px]'
          type='button'
          onClick={onClickHandler}
        >
          Create Room
        </button>
      </div>
    </div>
  );
}
