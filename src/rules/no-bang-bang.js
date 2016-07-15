const message = '!! is not allowed. Use Boolean() instead';

const noBangBang = {
  create(context) {
    return {
      UnaryExpression(node) {
        if (node.operator !== '!') {
          return;
        }
        if (node.argument.operator !== '!') {
          return;
        }
        context.report({
          message,
          node
        });
      }
    };
  }
};

export default noBangBang;
export {
  message
};
