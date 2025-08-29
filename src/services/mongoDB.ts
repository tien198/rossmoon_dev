import { MongoClient } from "mongodb";

const MONGODB_URI = import.meta.env.MONGODB_URI
const NODE_ENV = import.meta.env.NODE_ENV

if (!MONGODB_URI)
    throw new Error(".env is missing 'Mongo URI' field");

let client: MongoClient = new MongoClient(MONGODB_URI)



declare global {
    var _mongoClient: MongoClient | undefined
}

switch (NODE_ENV) {
    case 'development': {
        if (!window._mongoClient) {
            client = new MongoClient(MONGODB_URI)
            window._mongoClient = await client.connect()
        }
        break
    }
    default: {
        client = await new MongoClient(MONGODB_URI).connect()
        break
    }
}

export function getDb() {
    return client.db('rossmoon')
}