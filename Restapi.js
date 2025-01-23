const { createServer } = require("http");
const url = require("url");

const server = createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    if (path === "/api/users" && method === "GET") {
        const users = [
            { id: 1, name: "pasan" },
            { id: 2, name: "saman" },
        ];
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(users));
    }
    // Handle POST request to add a user
    else if (path === "/api/users" && method === "POST") {
        let body = "";

        // Listen for data chunks from the request body
        req.on("data", (chunk) => {
            body += chunk;
        });

        // Once the entire body is received
        req.on("end", () => {
            try {
                const user = JSON.parse(body); // Try to parse the body as JSON

                // Here, you would normally save the user to a database or memory
                console.log("New user added:", user);

                // Respond back with the added user and a 201 status code (created)
                res.writeHead(201, { "content-type": "application/json" });
                res.end(JSON.stringify({ message: "User added", user }));
            } catch (err) {
                // If parsing fails, send a bad request response
                res.writeHead(400, { "content-type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });
    } else {
        // Handle routes that are not defined
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Not Found" }));
    }
});

// Make the server listen on port 3000
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
