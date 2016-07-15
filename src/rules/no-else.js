const message = 'Else statement is redundant';

const noElse = {
  create(context) {
    return {
      IfStatement(node) {
        if (!node.alternate) {
          return;
        }
        context.report({
          message,
          node: node.alternate
        });
      }
    };
  }
};

export default noElse;
export {
  message
};
