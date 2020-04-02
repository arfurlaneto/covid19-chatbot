export default class ChatEngine {
  constructor(dialog, initialContext) {
    this.dialog = dialog;
    this.context = { ...initialContext, ...dialog.initialContext() };
  }

  start() {
    this.currentNodeKey = this.dialog.startNodeKey(this.context);
    return [this.renderMessage()];
  }

  get currentNode() {
    return this.dialog.nodes[this.currentNodeKey];
  }

  renderMessage() {
    const node = this.currentNode;
    const data = {
      key: new Date().getTime(),
      user: false,
      date: new Date(),
      text: node.text(this.context),
      attachment: node.attachment(this.context),
      options: node.options(this.context),
    };
    return data;
  }

  // eslint-disable-next-line class-methods-use-this
  createUserMessage(message) {
    return {
      key: new Date().getTime(),
      user: true,
      date: new Date(),
      text: message,
      attachment: null,
      options: [],
    };
  }

  async handleUserText(text) {
    const userMessage = this.createUserMessage(text);

    const nodeOptions = this.currentNode.options(this.context);

    if (nodeOptions.length === 0) {
      this.currentNodeKey = this.dialog.restartNodeKey(this.context);
    } else {
      const foundOption = nodeOptions
        .map((option) => ({
          id: ChatEngine.normalizeText(option.label),
          option,
        }))
        .find((o) => o.id === ChatEngine.normalizeText(text));

      if (foundOption) {
        this.currentNodeKey = await foundOption.option.callback(this.context);
      }
    }

    return [userMessage, this.renderMessage()];
  }

  static normalizeText(text) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace('-', '')
      .replace(/\s/g, '')
      .toLowerCase();
  }
}
