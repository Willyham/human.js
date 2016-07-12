'use strict';

var _ = require('underscore');
var Rule = require('./rule');
var traverse = require('traverse');

var ReturnType = Rule.extend({

  initialize: function(){
    this.description = 'Inconsistent return type';
  },

  /**
   * Check for inconsistent return type
   * @param node
   * @returns {Boolean} True if there is only 1 return type, false otherwise
   */
  test: function(node){
    if(node.type !== 'FunctionDeclaration' && node.type !== 'FunctionExpression'){
      return true;
    }

    // TODO: We compact return types because for now we return call expressions as null
    var returnTypes = _.compact(this._findReturnTypes(node.body));

    // If there are no returns, it's consistently undefined
    if(!returnTypes.length){
      return true;
    }
    var uniqueTypes = _.unique(returnTypes);
    return _.size(uniqueTypes) === 1;
  },

  /**
   * Find all return types for a given node.
   * @param {Object} node The function body
   * @returns {Array} An array of types
   * @private
   */
  _findReturnTypes: function(node){
    var returnStatements = [];
    traverse(node).forEach(function(innerNode){
      if(!innerNode){
        return;
      }
      // Don't check return types of inner functions
      if(innerNode.type === 'FunctionDeclaration' || node.type !== 'FunctionExpression'){
        return;
      }
      if(innerNode.type == 'ReturnStatement'){
        returnStatements.push(innerNode);
      }
    });
    return _.map(returnStatements, function(statement){
      if(!statement.argument || statement.argument.type !== 'Literal'){
        return null;
      }
      return typeof statement.argument.value;
    });
  }

});

module.exports = ReturnType;