import noLoops from './rules/no-loops';
import noElse from './rules/no-loops';
import noNumericLiteralCalls from './rules/no-numeric-literal-calls';
import noPlusNew from './rules/no-plus-new';
import noBangBang from './rules/no-bang-bang';

const rules = {
  'human/no-loops': noLoops,
  'human/no-else': noElse,
  'human/no-numeric-literal-calls': noNumericLiteralCalls,
  'human/no-plus-new': noPlusNew,
  'human/no-bang-bang': noBangBang
};

export default rules;
