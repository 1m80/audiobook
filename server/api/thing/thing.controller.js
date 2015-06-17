/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Thing = require('./thing.model');

// Get list of things
/*

    limit:5，每页限制5条记录
    num:1，查询的页面
    pageCount，一共有多少页
    size，当前页面有多少条记录
    numberOf，分页用几个标签显示
*/
exports.index = function(req, res) {
  var search = {};
  var page = {limit: 15, num:1};
  page['num'] = req.params.page;

  var model = {
    search: search,
    columns: 'appid date name classify audio content cover upload matter repair type',
    page: page
  };

  findPagination(model, function(err, pageCount, list) {
    page['pageCount'] = pageCount;
    page['size'] = list.length;
    page['numberOf'] = pageCount>5? 5:pageCount;
    return res.send({books:list, page:page});
  });
  
};

// Get a single language thing
exports.show = function(req, res) {
  var search = {};
  search = {type:req.params.lang};
  var page = {limit: 15, num:1};
  page['num'] = req.params.page;

  var model = {
    search: search,
    columns: 'appid date name classify audio content cover upload matter repair',
    page: page
  };

  findPagination(model, function(err, pageCount, list) {
    page['pageCount'] = pageCount;
    page['size'] = list.length;
    page['numberOf'] = pageCount>5? 5:pageCount;
    return res.send({books:list, page:page});
  });
  /*
  Thing.findByLang(req.params.lang, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    return res.json(thing);
  });
*/
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Thing.create(req.body, function(err, thing) {
    if(err) { return handleError(res, err); }
    return res.json(201, thing);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Thing.findById(req.params.id, function (err, thing) {
    if (err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    var updated = _.merge(thing, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, thing);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Thing.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    thing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.getTopAppid = function(req, res) {
 Thing.find().sort('-appid').limit(1).exec(function (err, thing) {
    if (err) {return handleError(res, err);}
    return res.json(thing[0].appid);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

function findPagination(obj, callback) {
  var q = obj.search || {};
  var col = obj.columns;

  var pageNumber = obj.page.num || 1;
  var resultsPerPage = obj.page.limit || 10;

  var skipFrom = (pageNumber * resultsPerPage) - resultsPerPage;
  var query = Thing.find(q, col).sort('-appid').skip(skipFrom).limit(resultsPerPage);
  query.exec(function(error, results) {
    if (error) {
      callback(error, null, null);
    } else {
      Thing.count(q, function(error, count) {
        if (error) {
          callback(error, null, null);
        } else {
          var pageCount = Math.ceil(count / resultsPerPage);
          callback(null, pageCount, results);
        }
      });
    }
  });
}