const hamBurger = document.getElementById("hamBurger");
const actionLinks = document.querySelector(".actionLinks");

hamBurger.addEventListener("click", () => {
    actionLinks.classList.toggle("show");
})

const profiles = {
    "Interview-Confidence-Student": {
        title: "The Rising Force",
        desc: "Early authority. You walk in like you already belong.",
        collection: "The Interview", silhouette: "Slim Peak Lapel", colour: "Charcoal Slate"
    },
    "Interview-Confidence-Professional": {
        title: "The Commanding Professional",
        desc: "You've earned your seat. Time to claim it.",
        collection: "The Interview", silhouette: "Tailored Single-Breasted", colour: "Midnight Navy"
    },
    "Interview-Trust-Student": {
        title: "The Honest Contender",
        desc: "Genuine, grounded, impossible to distrust.",
        collection: "The Interview", silhouette: "Soft Shoulder Suit", colour: "Soft Charcoal"
    },
    "Interview-Authority-Executive": {
        title: "The Power Presence",
        desc: "Rooms rearrange themselves around you.",
        collection: "The Boardroom", silhouette: "Double-Breasted Power Suit", colour: "Jet Black"
    },
    "Board Meeting-Authority-Executive": {
        title: "The Executive Apex",
        desc: "When you speak, the room leans in.",
        collection: "The Boardroom", silhouette: "Full-Canvas Double-Breasted", colour: "Oxford Charcoal"
    },
    "Board Meeting-Trust-Professional": {
        title: "The Reliable Strategist",
        desc: "The person everyone wants in the room when it matters.",
        collection: "The Boardroom", silhouette: "Single-Breasted Structured", colour: "Deep Navy"
    },
    "Wedding-Elegance-Professional": {
        title: "The Elegant Gentleman",
        desc: "The day she never forgets.",
        collection: "The Wedding", silhouette: "Morning Coat / Slim Tuxedo", colour: "Ivory & Midnight"
    },
    "Wedding-Confidence-Professional": {
        title: "The Composed Groom",
        desc: "Steady, sharp, completely at ease in the spotlight.",
        collection: "The Wedding", silhouette: "Classic Tuxedo", colour: "Midnight Black"
    },
    "Networking Event-Trust-Professional": {
        title: "The Approachable Authority",
        desc: "Warm enough to start conversations. Sharp enough to be remembered.",
        collection: "The Evening", silhouette: "Smart Blazer & Trousers", colour: "Deep Navy"
    },
    "Networking Event-Confidence-Student": {
        title: "The Ambitious Connector",
        desc: "You're not waiting for permission to be in the room.",
        collection: "The Evening", silhouette: "Slim Casual Blazer", colour: "Charcoal Grey"
    },
    "Networking Event-Elegance-Executive": {
        title: "The Refined Networker",
        desc: "Effortless polish. The kind of presence people remember after the room empties.",
        collection: "The Evening", silhouette: "Velvet Dinner Jacket", colour: "Deep Navy Velvet"
    },
    "Board Meeting-Confidence-Professional": {
        title: "The Steady Hand",
        desc: "Calm, prepared, unshaken under pressure.",
        collection: "The Boardroom", silhouette: "Modern Fit Two-Piece", colour: "Charcoal Navy"
    }
};