import React from 'react';
import {
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaSnapchat,
  FaTiktok,
  FaXTwitter,
  FaYoutube
} from "react-icons/fa6";

const FOOTER_SECTIONS = {
  "Game Day": ["Playoff Central", "Game Notes", "Injury Report", "Laker Girls", "Lakers Ticket Exchange", "Tickets", "Lakers Arcade"],
  "Broadcast": ["Where to Watch/Listen", "Schedule", "Spectrum SportsNet+", "Audio League Pass", "NBA Leage pass", "Broadcasters"],
  "Media Partners": ["Spectrum SportsNet", "ESPN LA 710", "Lakers Radio Network", "Tu Liga Radio"],
  "Social Media": ["Facebook", "Instagram", "Snapchat", "Twitter", "TikTok", "YouTube", "Lakers Email News", "Weibo"]
};

const SOCIAL_ICONS = [
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaEnvelope, label: "Email" },
  { Icon: FaFacebook, label: "Facebook" },
  { Icon: FaSnapchat, label: "Snapchat" },
  { Icon: FaTiktok, label: "TikTok" },
  { Icon: FaXTwitter, label: "Twitter" },
  { Icon: FaYoutube, label: "YouTube" }
];

function FooterSection({ title, items }) {
  return (
    <div className='flex flex-col gap-3 items-center lg:items-start'>
      <p className='text-white font-black uppercase'>{title}</p>
      <div className='flex flex-col items-center lg:items-start'>
        {items.map((item, index) => (
          <p key={index} className='text-white text-sm'>{item}</p>
        ))}
      </div>
    </div>
  );
}

function LakersFooter() {
  return (
    <div className="bg-[#232323] py-14">
      <div className="px-24 flex flex-col items-center justify-between lg:flex-row lg:items-start">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {Object.entries(FOOTER_SECTIONS).map(([title, items]) => (
            <FooterSection key={title} title={title} items={items} />
          ))}
        </div>
        <div className='flex flex-col gap-3 items-center mt-20 lg:mt-0'>
          <p className='text-white font-black'>CONNECT</p>
          <div className='flex flex-row gap-5 lg:flex-col lg:gap-2'>
            {SOCIAL_ICONS.map(({ Icon, label }) => (
              <Icon key={label} color="white" size={25} aria-label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LakersFooter;