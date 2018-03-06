var express = require('express');
var app = express();
var cheerio = require('cheerio');
var Promise = require('bluebird');
var countries = require('./data/country.json');
var countryJson = require('./results.json');
var leagueJson = require('./data/categories.json');
var sofaCountry = require('./data/sofaCountry.json');
var request = require('request');
var  football = require('./football');
app.use(express.static(__dirname + '/public'));
// app.use(function (req, res, next) {
//
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
//
//     // Pass to next layer of middleware
//     next();
// });
app.use('/football', football);

// app.get('/livescore', function (req, res) {
//   livescore(function (data) {
//             var article = data;
//
//           res.send(article);
//     });
// });

app.get('/countries', function (req, res) {
  console.log(countries);
  res.send(countries);
});

app.get('/country', function (req, res) {
  console.log(countryJson);
  res.send(countryJson);
});
app.get('/sofaCountry', function (req, res) {
  console.log(countryJson);
  res.send(sofaCountry);
});

app.get('/leagues', function (req, res) {
  console.log(leagueJson);
  res.send(leagueJson);
});

app.get('/leagues/:id', function (req, res) {
  var id = req.params.id;
  var data= [];

  var tour = 'https://www.sofascore.com/list/category/football/';
  request(tour+id+'/tournaments/json?_=',function(err, resq, body){
    console.log(body);
    // var json = body.tournaments;
    // data.push(body.tournaments);
    res.send(body);

  });
});

app.get('/tournament/:category/:slug/:id', function (req, res) {
  var id = req.params.id, category = req.params.category ,slug = req.params.slug;
  var urls = 'https://www.sofascore.com/tournament/football/'+category+'/'+slug+'/'+id+'?_pjax=%23pjax-container-main';
  request(urls, function (err,resq, body) {
    var data = { info : '', years : [] , topscore: [] ,facts : []};
    var $ = cheerio.load(body);
    data.info = {
      leagueName :$('h2.page-title').text().trim(),
      countryName : $('span.category-title').text().trim(),
      thisSeason : 'https://www.sofascore.com/u-tournament/'+$('ul.js-uniqueTournament-page-seasons-select li.active a').attr('data-uniquetournament-id')+'/season/'+
                    $('ul.js-uniqueTournament-page-seasons-select li.active a').attr('data-season-id')+'/json'
    };
    $('ul.js-uniqueTournament-page-seasons-select li').each(function(i, element){
          var a = {
            year : $(this).find('a').text().trim(),
            seasonId : $(this).find('a').attr('data-season-id'),
            leagueId : $(this).find('a').attr('data-uniquetournament-id')
          };
          data.years.push(a)
          console.log(a);
    });
    $('a.js-show-player-details').each(function(i, element){
       var a = {
               playerName : $(this).find('div.u-mL8').children().eq(0).text().trim(),
               photo : 'https://www.sofascore.com'+$(this).find('img').attr('src'),
               team : $(this).find('div.u-mL8').children().eq(1).text().trim(),
               scores : $(this).children().eq(3).text().trim(),
               played : $(this).children().eq(4).text().trim()

       };
       data.topscore.push(a)
    });
    $('table.table tbody').each(function(i, element){
          var a = {
            numberOfRounds : $(this).find('tr').eq(1).find('td.ff-medium').text().trim(),
            averageGoals : $(this).find('tr').eq(2).find('td.ff-medium').text().trim(),
            hometeamWins : $(this).find('tr').eq(3).find('td.ff-medium').text().trim(),
            draws : $(this).find('tr').eq(4).find('td.ff-medium').text().trim(),
            awayTeamWins : $(this).find('tr').eq(5).find('td.ff-medium').text().trim(),
            yellowCards : $(this).find('tr').eq(6).find('td.ff-medium').text().trim(),
            redCards : $(this).find('tr').eq(7).find('td.ff-medium').text().trim()
          };
          data.facts.push(a)
          console.log(a);
    });
    res.send(data);

  })

});
app.listen(3000);
