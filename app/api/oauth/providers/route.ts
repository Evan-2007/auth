export function GET () {
  return new Response (JSON.stringify({providers: ["google", "github"]}), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}