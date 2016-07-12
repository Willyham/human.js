import R from 'ramda';

const isNumber = R.is(Number);
const isEmptyString = R.both(R.is(String), R.isEmpty);
const hasAnyNumber = R.any(isNumber);
const hasAnyEmptyString = R.any(isEmptyString);
const getLeftValue = R.path(['left', 'value']);
const getRightValue = R.path(['right', 'value']);

const message = 'Numeric literal calls are not allowed.';

const validateMemberExpression = R.curry((context, node) => {
  if (node.object.type !== 'Literal') {
    return;
  }
  if (!isNumber(node.object.value)) {
    return;
  }
  return context.report({
    node,
    message
  });
});

const validateBinaryExpression = R.curry((context, node) => {
  if (node.operator !== '+') {
    // As far as I know, + is the only operator which can be used to exploit things like toString
    return;
  }
  const values = [getLeftValue(node), getRightValue(node)];
  const isInvalidExpression = R.both(hasAnyNumber, hasAnyEmptyString);
  if (!isInvalidExpression(values)) {
    return;
  }
  return context.report({
    node,
    message
  });
});

const noNumericLiteralCalls = {
  create(context) {
    return {
      MemberExpression: validateMemberExpression(context),
      BinaryExpression: validateBinaryExpression(context)
    };
  }
};

export default noNumericLiteralCalls;
export {
  message
};
