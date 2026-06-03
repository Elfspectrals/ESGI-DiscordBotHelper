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

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method not allowed');
    }

    const signature = req.headers['x-signature-ed25519'];
    const timestamp = req.headers['x-signature-timestamp'];
    const rawBody = await getRawBody(req);

    const isValid = verifyKey(
        rawBody,
        signature,
        timestamp,
        process.env.DISCORD_PUBLIC_KEY,
    );

    if (!isValid) {
        return res.status(401).send('Invalid signature');
    }

    const interaction = JSON.parse(rawBody.toString());

    if (interaction.type === InteractionType.PING) {
        return res.json({ type: InteractionResponseType.PONG });
    }

    if (
        interaction.type === InteractionType.APPLICATION_COMMAND
        && interaction.data.name === 'batiment'
    ) {
        const lieu = interaction.data.options.find((o) => o.name === 'lieu').value;
        const content = batiments[lieu] ?? '❌ Bâtiment inconnu.';

        return res.json({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: { content },
        });
    }

    return res.status(400).json({ error: 'Unknown command' });
};
