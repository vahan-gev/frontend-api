export default function NewsCards() {
    const NEWS_CARDS = [
        {title: "Lakers Preseason Tickets On Sale Now", description: "Tickets for Lakers preseason matchups in Las Vegas, NV and Palm Desert, CA are on sale now. Click below to find your tickets.", buttonText: "Las Vegas Preseason Tickets", image: "/assets/img/image-6.jpeg"},
        {title: "Lakers Emails", description: "Stay up-to-date with all things Lakers by subscribing to Lakers Emails. Click below to sign up now.", buttonText: "Subscribe Here", image: "/assets/img/image-9.jpeg"},
    ]
    return (
        <div className="flex gap-12 px-8 py-24 cards-container">
            {NEWS_CARDS.map((card) => (
                <div className="flex flex-col gap-4">
                    <img src={card.image} alt={card.title} />
                    <h1 className="text-[25px] font-black">{card.title}</h1>
                    <p>{card.description}</p>
                    <button className="py-2 px-4 w-fit bg-[#232323] text-white rounded-full uppercase font-extrabold">{card.buttonText}</button>
                </div>
            ))}
        </div>
    )
}