import fs from "fs";

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

  const lua = fs.readFileSync("test.lua", "utf8");

  return new Response(lua, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
};
