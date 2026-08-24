import fs from "fs";
import path from "path";

export default async (req) => {
  const auth = req.headers.get("authorization");

  if (auth !== "Basic amNhZG1pbjpKQ3Rlc3QxMjMh") {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="JC TEST"'
      }
    });
  }

  const luaPath = path.join(process.cwd(), "test.lua");
  const lua = fs.readFileSync(luaPath, "utf8");

  return new Response(lua, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
};
