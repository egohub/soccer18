var API = 'http://www.soccerway.mobi/?sport=soccer&page=competition&id=';
var url = 'https://www.sofascore.com/football/livescore/json';
var request = require('request');
const cheerio = require('cheerio');
var express = require('express');
var router = express.Router();

function getCurrentUrl(item) {
  return 'https://www.sofascore.com/u-tournament/'+item.attr('data-uniquetournament-id')+ '/season/'+item.attr('data-season-id');
}
function getCurrentRank(item) {
    request(item, function (err, re, bd) {

      console.log(bd);
    })
}
function getLeagueData(countryId, leagueSlug, leagueId, callback) {
  var url = 'https://www.sofascore.com/tournament/football',
      ext = '?_pjax=%23pjax-container-main';
    request.get(url+'/'+countryId+'/'+leagueSlug+'/'+leagueId+ext, function (error, response, body) {
      var $ = cheerio.load(body), init = $('ul.js-uniqueTournament-page-seasons-select li a');
        // console.log(getCurrentUrl($('ul.js-uniqueTournament-page-seasons-select li.active a')));
        var urlJson = getCurrentUrl($('ul.js-uniqueTournament-page-seasons-select li.active a'))+'/json';
        callback(getCurrentRank(urlJson))

        console.log(getCurrentRank(urlJson));
        var table =$(init).map(function(i, element){
              var a = {
                content : $(this).text(),
                id :getCurrentUrl($(this))
              };
              return a
              console.log('===');
        }).get();
        // callback(table);
        // callback(getCurrentRank(urlJson))
    });
};



router.get('/:countryId/:leagueSlug/:leagueId', (req, res) => {
    getLeagueData( req.params.countryId, req.params.leagueSlug,req.params.leagueId, (rankings) => {
        console.log(rankings);
        res.send(rankings);
    });
});

module.exports = router;
