
import { MCPClient } from "@mastra/mcp";
import { createSmitheryUrl } from "@smithery/sdk/shared/config.js";


const config = {};
export const mcps = await new MCPClient({
  servers: {
    gameTrend: {
      url: createSmitheryUrl("https://server.smithery.ai/@Busra-ozer/book-search-mcp/mcp", { config, apiKey: process.env.SMITHERY_API_KEY ,profile:"skinny-clam-p5YUwk"}) ,
      
    }
  }
});