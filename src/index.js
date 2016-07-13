import noLoops from './rules/no-loops';
import noElse from './rules/no-loops';
import noNumericLiteralCalls from './rules/no-numeric-literal-calls';
import noPlusNew from './rules/no-plus-new';

const rules = {
  'human/no-loops': noLoops,
  'human/no-else': noElse,
  'human/no-numeric-literal-calls': noNumericLiteralCalls,
  'human/no-plus-new': noPlusNew
};

export default rules;
