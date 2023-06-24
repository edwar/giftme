import { compare } from "bcryptjs"

export default async function isSame(unHash: string, hash: string): Promise<boolean> {
    return await compare(unHash, hash)
}