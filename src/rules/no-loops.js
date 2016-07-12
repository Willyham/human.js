const message = 'No loops allowed. Use forEach, map, reduce, etc';

const noLoops = {
  create(context) {
    const reportProblem = (node) => {
      context.report({
        node,
        message
      });
    };

    return {
      ForStatement: reportProblem,
      ForInStatement: reportProblem,
      ForOfStatement: reportProblem,
      WhileStatement: reportProblem,
      DoWhileStatement: reportProblem
    };
  }
};

export default noLoops;
export {
  message
};
