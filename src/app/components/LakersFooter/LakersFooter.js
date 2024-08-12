import React from 'react'
import {
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaSnapchat,
  FaTiktok,
  FaXTwitter,
  FaYoutube
} from "react-icons/fa6";
function LakersFooter() {
  const GAME_DAY = ["Playoff Central", "Game Notes", "Injury Report", "Laker Girls", "Lakers Ticket Exchange", "Tickets", "Lakers Arcade"]
  const BROADCAST = ["Where to Watch/Listen", "Schedule", "Spectrum SportsNet+", "Audio League Pass", "NBA Leage pass", "Broadcasters"]
  const MEDIA_PARTNERS = ["Spectrum SportsNet", "ESPN LA 710", "Lakers Radio Network", "Tu Liga Radio"]
  const SOCIAL_MEDIA = ["Facebook", "Instagram", "Snapchat", "Twitter", "TikTok", "YouTube", "Lakers Email News", "Weibo"]
  return (
    <div className="bg-[#232323] py-14">
      <div className="px-24 flex flex-col items-center justify-between lg:flex-row lg:items-start">
        <div className="flex flex-col lg:flex-row  justify-between gap-10">
          <div className='flex flex-col gap-3 items-center lg:items-start'>
            <p className='text-white font-black uppercase'>Game Day</p>
            <div className='flex flex-col items-center lg:items-start'>
              {GAME_DAY.map((item) => (
                <p className='text-white text-sm'>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-3 items-center lg:items-start'>
            <p className='text-white font-black uppercase'>Broadcast</p>
            <div className='flex flex-col items-center lg:items-start'>
              {BROADCAST.map((item) => (
                <p className='text-white text-sm'>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-3 items-center lg:items-start'>
            <p className='text-white font-black uppercase'>Media Partners</p>
            <div className='flex flex-col items-center lg:items-start'>
              {MEDIA_PARTNERS.map((item) => (
                <p className='text-white text-sm'>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-3 items-center lg:items-start'>
            <p className='text-white font-black uppercase'>Social Media</p>
            <div className='flex flex-col items-center lg:items-start'>
              {SOCIAL_MEDIA.map((item) => (
                <p className='text-white text-sm'>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className='flex flex-col gap-3 items-center mt-20 lg:mt-0'>
            <p className='text-white font-black'>CONNECT</p>
            <div className='flex flex-row gap-5 lg:flex-col lg:gap-2'>
              <FaInstagram color="white" size={25} />
              <FaEnvelope color="white" size={25} />
              <FaFacebook color="white" size={25} />
              <FaSnapchat color="white" size={25} />
              <FaTiktok color="white" size={25} />
              <FaXTwitter color="white" size={25} />
              <FaYoutube color="white" size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LakersFooter