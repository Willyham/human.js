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
    var returnTypes = this._findReturnTypes(node.body);
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
      if(innerNode && innerNode.type == 'ReturnStatement'){
        returnStatements.push(innerNode);
      }
    });
    return _.map(returnStatements, function(statement){
      if(!statement.argument){
        return typeof undefined;
      }
      return typeof statement.argument.value;
    });
  }

});

module.exports = ReturnType;