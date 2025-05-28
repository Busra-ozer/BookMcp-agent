import { MCPClient } from "@mastra/mcp";
import { Agent } from "@mastra/core";
import { openai } from "@ai-sdk/openai";
import 'dotenv/config';
import { mcps } from "../tools/intex";
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';

export const bookSearchAgent = new Agent({
  name: "BookSearchAgent",
  instructions: `Kullanıcıdan gelen kitap adı ile Open Library API'sini kullanarak kitap araması yap. İlk 5 sonucu döndür. Her kitap için başlık ve yazar bilgilerini ekrana yazdır. İşte format:

Başlık: [Kitap Başlığı]
Yazar: [Kitap Yazarları]

Örnek:
Kullanıcı: "Harry Potter"
Yanıt:
Başlık: Harry Potter and the Sorcerer's Stone
Yazar: J.K. Rowling
Başlık: Harry Potter and the Chamber of Secrets
Yazar: J.K. Rowling
...
`,
  model: openai("gpt-4o-mini"),

  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:../mastra.db', // path is relative to the .mastra/output directory
    }),
  }),
  tools: await mcps.getTools(),
});
