import Link from "next/link";

export default function ChatCTA() {
    return (
        <div className="chat-cta">
            <img src="/assets/images/chat-cta.jpg" className="chat-cta-image" alt="John | Sitechs" />
            <p className="chat-cta-text">Hey, I’m John from Sitechs. Let’s find the right solution to make your team work smarter.</p>
            <Link href="/chat-with-us" className="chat-cta-button">Chat Now</Link>
        </div>
    )
}