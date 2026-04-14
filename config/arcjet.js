import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

const aj = arcjet({
    key: ARCJET_KEY,
    // Track budgets per user; replace "userId" with any stable identifier.
    characteristics: ["ip.src"],
    rules: [
        // Shield protects against common web attacks such as SQL injection.
        shield({ mode: "LIVE" }),
        // Allow search engine bots and block other automated clients.
        detectBot({
            mode: "LIVE",
            allow: ["CATEGORY:SEARCH_ENGINE"],
        }),
        // Enforce token budgets per tracked user.
        tokenBucket({
            mode: "LIVE",
            refillRate: 5, // Refill 5 tokens per interval
            interval: 10, // Refill every 10 seconds
            capacity: 10, // Bucket capacity of 10 tokens
        }),
    ],
});

export default aj;
