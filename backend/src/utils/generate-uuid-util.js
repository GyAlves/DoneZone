//dependencies
import crypto from "node:crypto";

const generateUUID = () => {

    const randomBytes = crypto.randomBytes(16);
    const uniqueId = randomBytes.toString('hex');

    return uniqueId;
}

export default generateUUID;