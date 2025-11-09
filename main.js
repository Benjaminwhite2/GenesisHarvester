import axios from "axios";

// 🔥 Main harvester logic
async function runHarvester() {
  console.log("🌌 GenesisHarvester initialized...");

  // Mock tags & URLs — replace with your real ones later
  const sources = [
    { platform: "Instagram", tag: "clientacquisition", url: "https://www.instagram.com/explore/search/keyword/?q=%23clientacquisition" },
    { platform: "Instagram", tag: "nocodeautomation", url: "https://www.instagram.com/explore/search/keyword/?q=%23nocodeautomation" },
    { platform: "LinkedIn", tag: "AI startup founders", url: "https://www.linkedin.com/search/results/all?keywords=Ai+startup+founders" },
    { platform: "LinkedIn", tag: "Growth hacking strategy", url: "https://www.linkedin.com/search/results/all?keywords=Growth+hacking+strategy" }
  ];

  // Simulated scraped results
  const leads = sources.map((src, i) => ({
    platform: src.platform,
    source_url: src.url,
    name: `Lead_${i + 1}`,
    handle: `user${i + 1}`,
    bio: `Bio related to ${src.tag}`,
    tags: src.tag,
    intent: "Automation & Growth",
    follower_reach: Math.floor(Math.random() * 10000),
    country_region: "Global",
    confidence_score: Math.floor(Math.random() * 20) + 80,
    date_added: new Date().toISOString().split("T")[0],
    verification_status: Math.random() > 0.5 ? "Verified" : "Unverified",
    tier: "Mid",
    notes_offer_type: "Prompt buyer",
    status: "Pending",
    source: src.platform,
    engagement_score: Math.floor(Math.random() * 100),
    preferred_stage: "Awareness",
    investment_size: "N/A",
    funding_need: "N/A",
    niche: "Freelance/AI",
    pricing_tier: "Low",
    service_type: "Automation Prompt",
    rating: "",
    social_link: src.url,
    urgency: "Medium",
    requested_service: "AI workflow setup",
    offer_type: "Prompt Pack",
    region: "Global",
    collaboration_budget: "N/A"
  }));

  console.log("✅ Leads harvested:");
  console.table(leads);
}

runHarvester();
