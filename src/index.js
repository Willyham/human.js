import noLoops from './rules/no-loops';
import noElse from './rules/no-loops';
import noNumericLiteralCalls from './rules/no-numeric-literal-calls';

const rules = {
  'human/no-loops': noLoops,
  'human/no-else': noElse,
  'human/no-numeric-literal-calls': noNumericLiteralCalls,
};

export default rules;
