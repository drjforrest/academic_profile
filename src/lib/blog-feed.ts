export interface BlogPost {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  categories: string[];
}

export interface BlogFeed {
  title: string;
  description: string;
  posts: BlogPost[];
}

// Simple RSS parser function using regex (server-side compatible)
function parseRSSFeed(xmlString: string): BlogFeed {
  // Extract channel information using regex (compatible with older targets)
  const channelTitleMatch = xmlString.match(/<channel>[\s\S]*?<title>([^<]+)<\/title>/);
  const channelDescMatch = xmlString.match(/<channel>[\s\S]*?<description>([^<]+)<\/description>/);
  
  const channelTitle = channelTitleMatch ? channelTitleMatch[1] : "";
  const channelDescription = channelDescMatch ? channelDescMatch[1] : "";

  // Extract items using regex
  const itemMatches = xmlString.match(/<item>[\s\S]*?<\/item>/g) || [];
  
  const posts: BlogPost[] = itemMatches.slice(0, 3).map(item => {
    const titleMatch = item.match(/<title>([^<]+)<\/title>/);
    const descMatch = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || 
                      item.match(/<description>([^<]+)<\/description>/);
    const linkMatch = item.match(/<link>([^<]+)<\/link>/);
    const pubDateMatch = item.match(/<pubDate>([^<]+)<\/pubDate>/);
    
    // Extract categories
    const categoryMatches = item.match(/<category>([^<]+)<\/category>/g) || [];
    const categories = categoryMatches.map(cat => {
      const match = cat.match(/<category>([^<]+)<\/category>/);
      return match ? match[1] : "";
    }).filter(Boolean);

    const title = titleMatch ? titleMatch[1] : "";
    let description = descMatch ? descMatch[1] : "";
    const link = linkMatch ? linkMatch[1] : "";
    const pubDate = pubDateMatch ? pubDateMatch[1] : "";
    
    // Clean up description and limit length
    if (description.length > 150) {
      description = description.substring(0, 150) + '...';
    }

    return {
      title,
      description,
      link,
      pubDate,
      categories
    };
  });

  return {
    title: channelTitle,
    description: channelDescription,
    posts
  };
}

export async function fetchBlogFeed(): Promise<BlogFeed | null> {
  try {
    const response = await fetch('https://blog.drjforrest.com/feed.xml', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      console.error('Failed to fetch blog feed:', response.status);
      return null;
    }

    const xmlText = await response.text();
    return parseRSSFeed(xmlText);
  } catch (error) {
    console.error('Error fetching blog feed:', error);
    return null;
  }
}

// Fallback data in case the feed is not available
export const fallbackBlogData: BlogFeed = {
  title: "Mind the Gap",
  description: "AI, Health, and Digital Equity",
  posts: [
    {
      title: "From Hydroxychloroquine to AI: What a Failed COVID Treatment Taught Me About Digital Health Misinformation",
      description: "Five years after documenting the rise and fall of hydroxychloroquine, I'm seeing the same dangerous patterns in how AI health innovations spread—and why the stakes for equity have never been higher.",
      link: "https://blog.drjforrest.com/posts/rise-and-fall-of-hcq-and-parallels-to-ai-health",
      pubDate: "2025-09-19",
      categories: ["AI", "Misinformation", "COVID-19", "Research Methods", "Evidence-Based Medicine", "Digital Equity"]
    },
    {
      title: "How Artificial Intelligence Is Reshaping Consulting—and Why Health Equity Is at Risk",
      description: "As AI transforms the consulting industry from pyramid to obelisk model, health equity hangs in the balance. How the race for efficiency could leave the world's most vulnerable populations further behind.",
      link: "https://blog.drjforrest.com/posts/ai-disruption-in-global-consulting",
      pubDate: "2025-09-16", 
      categories: ["AI in Healthcare", "Health Equity", "Global Consulting", "Digital Transformation", "Healthcare Policy", "Technology Ethics"]
    },
    {
      title: "Artificial Intelligence: Both Contagion and Cure",
      description: "AI represents something unprecedented in healthcare: a technology that can simultaneously amplify both healing and harm, often through the exact same mechanisms. Understanding this duality is crucial for ensuring equitable implementation.",
      link: "https://blog.drjforrest.com/posts/ai-in-health-both-contagion-and-cure",
      pubDate: "2025-08-30",
      categories: ["AI", "Healthcare", "Digital Equity", "Bias", "Ethics"]
    }
  ]
};