const message = '~foo.indexOf() is not allowed. Use String.includes or Array.find';

const noUnaryIndexOf = {
  create(context) {
    return {
      UnaryExpression(node) {
        debugger;
        if (node.operator !== '~') {
          return;
        }
        if(!node.argument || node.argument.type !== 'CallExpression'){
          return;
        }
        // Handle expressions like '!Boolean(42)'
        if(node.argument.callee.type !== 'MemberExpression'){
          return;
        }
        if(node.argument.callee.property.name !== 'indexOf'){
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

export default noUnaryIndexOf;
export {
  message
};
