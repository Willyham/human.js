const dateMessage = '+new Date() is not allowed. Use Date.now() or new Date().getTime()';
const genericMessage = '+new X() is not allowed.';

const noPlusDate = {
  create(context) {
    return {
      UnaryExpression(node) {
        if (node.operator !== '+') {
          return;
        }
        if (node.argument.type !== 'NewExpression') {
          return;
        }
        if (node.argument.callee.name === 'Date') {
          context.report({
            message: dateMessage,
            node: node.argument
          });
          return;
        }
        context.report({
          message: genericMessage,
          node: node.argument
        });
      }
    };
  }
};

export default noPlusDate;
export {
  dateMessage,
  genericMessage
};
