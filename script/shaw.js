const {
  Shaw
} = require('shaw');
const herc = new Shaw();
module.exports.config = {
  name: 'shaw',
  version: '1.0.0',
  role: 0,
  hasPrefix: true,
  description: "An AI command powered by shaw",
  usage: "shaw [prompt]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`Please provide a question or statement after 'shaw'. For example: 'shaw app link [shaw-don.replit.app]?'`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`🔍 "${input}"`, event.threadID, event.messageID);
  try {
    const response = await herc.question({
      model: "v3",
      content: input
    });
    api.sendMessage(response.reply, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
