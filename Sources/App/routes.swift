import Vapor

func routes(_ app: Application) throws {
    app.get { req async throws in
        try await req.view.render("App", ["title": "React with Chakra UI"])
    }

    app.get("hello") { req async -> String in
        "Hello, world!"
    }
}
