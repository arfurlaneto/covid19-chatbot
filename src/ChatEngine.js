export default class ChatEngine {
  constructor(dialog, context) {
    this.dialog = dialog;
    this.context = { ...context };
    this.currentNode = dialog.startNode(this.context);
  }

  get currentDialogNode() {
    return this.dialog.nodes[this.currentNode];
  }

  renderDialog() {
    const dialogNode = this.currentDialogNode;
    const data = {
      key: new Date().getTime(),
      user: false,
      date: new Date(),
      text: dialogNode.text(this.context),
      attachment: dialogNode.attachment(this.context),
      options: dialogNode.options(this.context),
    };
    return data;
  }

  async chooseOption(optionId) {
    const dialogNode = this.currentDialogNode;
    const dialogOptions = dialogNode.options(this.context);
    const selectedOption = dialogOptions.find((o) => o.id === optionId);

    if (!selectedOption) {
      return false;
    }

    this.currentNode = await selectedOption.callback(this.context);
    return true;
  }

  // eslint-disable-next-line class-methods-use-this
  renderUserDialog(message) {
    return {
      key: new Date().getTime(),
      user: true,
      date: new Date(),
      text: message,
      attachment: null,
      options: [],
    };
  }
}
