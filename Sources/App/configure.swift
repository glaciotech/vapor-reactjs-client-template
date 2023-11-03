import Leaf
import Vapor

// configures your application
public func configure(_ app: Application) async throws {
    
    // This serves our compiled JS files from /Public folder
    app.middleware.use(FileMiddleware(publicDirectory: app.directory.publicDirectory))

    app.views.use(.leaf)

    // register routes
    try routes(app)
}
