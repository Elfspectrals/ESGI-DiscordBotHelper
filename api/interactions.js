const {
    InteractionType,
    InteractionResponseType,
    verifyKey,
} = require('discord-interactions');
const { batiments } = require('../batiments');

function getRawBody(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', (chunk) => chunks.push(chunk));
        req.on('end', () => resolve(Buffer.concat(chunks)));
        req.on('error', reject);
    });
}

async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method not allowed');
    }

    const publicKey = process.env.DISCORD_PUBLIC_KEY;
    if (!publicKey) {
        return res.status(500).send('DISCORD_PUBLIC_KEY manquante sur Vercel');
    }

    const signature = req.headers['x-signature-ed25519'];
    const timestamp = req.headers['x-signature-timestamp'];
    const rawBody = await getRawBody(req);

    const isValid = await verifyKey(
        rawBody,
        signature,
        timestamp,
        publicKey,
    );

    if (!isValid) {
        return res.status(401).send('Invalid signature');
    }

    const interaction = JSON.parse(rawBody.toString());

    if (interaction.type === InteractionType.PING) {
        return res.status(200).json({ type: InteractionResponseType.PONG });
    }

    if (
        interaction.type === InteractionType.APPLICATION_COMMAND
        && interaction.data.name === 'batiment'
    ) {
        const lieu = interaction.data.options.find((o) => o.name === 'lieu').value;
        const content = batiments[lieu] ?? '❌ Bâtiment inconnu.';

        return res.status(200).json({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: { content },
        });
    }

    return res.status(400).json({ error: 'Unknown command' });
}

module.exports = handler;
module.exports.config = {
    api: {
        bodyParser: false,
    },
};
