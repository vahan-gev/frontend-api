import React from 'react'
import PlayerCard from '../PlayerCard/PlayerCard';
import { IoClose } from "react-icons/io5";

function Modal({ players, closeAction, stat }) {
  return (
    <div className='fixed z-[100] w-[100%] h-[100%] modal-background m-auto left-0 px-10 bottom-0 flex justify-center items-center'>
      <div className='absolute right-5 top-5 p-2 bg-white rounded-full cursor-pointer transition hover:bg-[#FCB724] hover:text-white' onClick={closeAction}>
        <IoClose size={35} />
      </div>
      <div className='modal-container rounded-2xl w-[800px] max-h-[600px] overflow-auto py-8 flex flex-col gap-5 px-10 md:px-20' style={{ scrollbarWidth: 'none' }}>
        <h1 className='text-2xl font-bold text-center uppercase'>{stat}</h1>
        {players?.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </div>
  )
}

export default Modal
