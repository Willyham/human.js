const message = '~~ is not allowed. Use Math.floor';

const noTildeFloor = {
  create(context) {
    return {
      UnaryExpression(node) {
        if (node.operator !== '~') {
          return;
        }
        if (node.argument.type !== 'UnaryExpression') {
          return;
        }
        if (node.argument.operator !== '~') {
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

export default noTildeFloor;
export {
  message
};
