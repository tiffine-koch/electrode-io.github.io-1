// //ajax GET call for electrode-io repo
// $.ajax({url: "https://api.github.com/repos/electrode-io/electrode-io.github.io/issues", success: function(returndata){
//     var issues = returndata;
//     console.log("issue:" + issues);
//
//     if(issues.length > 2) {
//       var issueArray = $.map(issues, function(issue, index) {
//
//           var issue = {
//           issueTitle: issue.title,
//           issueNumber: issue.number,
//           issueUrl: issue.url,
//           issueLabel: issue.labels
//         };
//         console.log(issue);
//         return issue;
//       });
//
//       $('.contribute-subheading-site').text('Electrode-io');
//       $('.contribute-repo-link').attr('href', 'https://github.com/electrode-io/electrode-io.github.io');
//
//       var $ol = $('<ol>').addClass('issue-item');
//       $('#issue-site').append($ol);
//       var $div = $('<div>').addClass('site-row site-div contributor-row row');
//       $('.issue-item').append($div);
//
//       var $number = $('<div>').text('#' + issueArray[0].issueNumber).addClass('issue-number col-xs-2 col-md-2');
//       console.log("number:" + issueArray[0].issueNumber);
//       $('.site-div').append($number);
//
//       var $url = $('<a>').attr("href", issueArray[0].issueUrl);
//       console.log("url:" + issueArray[0].issueUrl);
//       $('.issue-number').append($url);
//
//       var $title = $('<div>').text(issueArray[0].issueTitle).addClass('issue-title col-xs-10 col-md-10');
//       console.log("title:" + issueArray[0].issueTitle);
//       $('.site-div').append($title);

      // var $ol = $('<ol>').text("hey").addClass('issue-item');
      // $('#issue-site').append($ol);
      // var $div = $('<div>').text("what").addClass('row', 'contributor-row', 'site-row');
      // $('.issue-item').append($div);
      // var $title = $('<p>').text(issueArray[1].issueTitle).addClass('issue-title', 'col-xs-10', 'col-md-10');
      // $('.site-row').append($title);
      // var $number = $('<div>').text('#' + issueArray[1].issueNumber).addClass('issue-number', 'col-xs-2', 'col-md-2');
      // $('.issue-title').append($number);
      // var $url = $('<a>').attr("href", issueArray[1].issueUrl);
      // $('.issue-number').append($url);
      //
      // var $ol = $('<ol>').text("hey").addClass('issue-item');
      // $('#issue-site').append($ol);
      // var $div = $('<div>').text("what").addClass('row', 'contributor-row', 'site-row');
      // $('.issue-item').append($div);
      // var $title = $('<p>').text(issueArray[2].issueTitle).addClass('issue-title', 'col-xs-10', 'col-md-10');
      // $('.site-row').append($title);
      // var $number = $('<div>').text('#' + issueArray[2].issueNumber).addClass('issue-number', 'col-xs-2', 'col-md-2');
      // $('.issue-title').append($number);
      // var $url = $('<a>').attr("href", issueArray[2].issueUrl);
      // $('.issue-number').append($url);
//     };
// }});
var issueArray;
// //ajax GET call for electrode-io repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-io.github.io/issues",
    async: false,
    success: function(returndata){
    console.log("returndata:", returndata);

    var issues = returndata;
    console.log("issues:" + issues);

    if(issues.length > 2) {
      issueArray = $.map(issues, function(issue, index) {

          var issue = {
          issueTitle: issue.title,
          issueNumber: issue.number,
          issueUrl: issue.url,
          issueLabel: issue.labels
        };
        console.log("single issue:", issue);
        return issue;
      });
      console.log("issueArray:", issueArray);

      $('.contribute-subheading-site').text('Electrode-io');
      $('.contribute-repo-link').attr('href', 'https://github.com/electrode-io/electrode-io.github.io');

      var test = "";

      var conString = "";

      for (j = 0; j < 3; j++ ) {

          var $ol = $('<ol>').addClass('issue-item');
          $('.issue-site').append($ol);

          var $div = $('<div>').addClass('site-row site-div contributor-row row');
          $('.issue-item').append($div);

          var $number = $('<div>').text('#' + issueArray[j].issueNumber).addClass('issue-number col-xs-2 col-md-2');
          console.log("number:" + issueArray[j].issueNumber);
          $('.site-div').append($number);

          // var $url = $('<a>').attr("href", issueArray[i].issueUrl);
          // console.log("url:" + issueArray[i].issueUrl);
          // $('.issue-number').append($url);
          //
          // var $title = $('<div>').text(issueArray[i].issueTitle).addClass('issue-title col-xs-10 col-md-10');
          // console.log("title:" + issueArray[i].issueTitle);
          // $('.site-div').append($title);

          console.log("j:", j);
//         var $ol = $('<ol>').text("hey").addClass('issue-item');
//         $('#issue-site').append($ol);
//         var $div = $('<div>').text("what").addClass('row', 'contributor-row', 'site-row');
//         $('.issue-item').append($div);
//         var $title = $('<p>').text(issueArray[i].issueTitle).addClass('issue-title', 'col-xs-10', 'col-md-10');
//         $('.site-row').append($title);
//         var $number = $('<div>').text('#' + issueArray[i].issueNumber).addClass('issue-number', 'col-xs-2', 'col-md-2');
//         $('.issue-title').append($number);
//         var $url = $('<a>').attr("href", issueArray[i].issueUrl);
//         $('.issue-number').append($url);
//         console.log(i);
      };
      console.log(i);
      // console.log(issueArray[1].issueTitle);
      // console.log(issueArray[1].issueNumber);
      // console.log(issueArray[1].issueUrl);
    }
    console.log(i);
  }
});

// //ajax GET call for jwt repo
// $.ajax({url: "https://api.github.com/repos/electrode-io/electrode-csrf-jwt/issues", success: function(returndata){
//   var issues = returndata;
//
//   if(issues.length > 2) {
//     console.log('yes');
//
//     var issueArray = $.map(issues, function(issue, index) {
//
//         var issue = {
//         issueTitle: issue.title,
//         issueNumber: issue.number,
//         issueUrl: issue.url,
//         issueLabel: issue.labels
//       };
//
//       return issue;
//     })
//     console.log("issueArray", issueArray);
//
//
//   } else {
//     console.log('no');
//   }
// }});
//
// //ajax GET call for electrode-react-ssr-caching repo
// $.ajax({url: "https://api.github.com/repos/electrode-io/electrode-react-ssr-caching/issues", success: function(returndata){
//   var issues = returndata;
//
//   if(issues.length > 2) {
//     console.log('yes');
//
//     var issueArray = $.map(issues, function(issue, index) {
//
//         var issue = {
//         issueTitle: issue.title,
//         issueNumber: issue.number,
//         issueUrl: issue.url,
//         issueLabel: issue.labels
//       };
//
//       return issue;
//     })
//     console.log("issueArray", issueArray);
//   } else {
//     console.log('no');
//   }
// }});
//
// //ajax GET call for electrode-electrify repo
// $.ajax({url: "https://api.github.com/repos/electrode-io/electrode-electrify/issues", success: function(returndata){
//   var issues = returndata;
//
//   if(issues.length > 2) {
//     console.log('yes');
//
//     var issueArray = $.map(issues, function(issue, index) {
//
//         var issue = {
//         issueTitle: issue.title,
//         issueNumber: issue.number,
//         issueUrl: issue.url,
//         issueLabel: issue.labels
//       };
//
//       return issue;
//     })
//     console.log("issueArray", issueArray);
//
//     $('.contribute-subheading-electrify').text('Electrode Electrify');
//     $('.contribute-repo-link').attr('href', 'https://github.com/electrode-io/electrode-electrify');
//   } else {
//     console.log('no');
//   }
// }});
//
// //ajax GET call for electrode-explorer repo
// $.ajax({url: "https://api.github.com/repos/electrode-io/electrode-explorer/issues", success: function(returndata){
//   var issues = returndata;
//
//   if(issues.length > 2) {
//     console.log('yes');
//
//     var issueArray = $.map(issues, function(issue, index) {
//
//         var issue = {
//         issueTitle: issue.title,
//         issueNumber: issue.number,
//         issueUrl: issue.url,
//         issueLabel: issue.labels
//       };
//
//       return issue;
//     })
//     console.log("issueArray", issueArray);
//   } else {
//     console.log('no');
//   }
// }});
//
// //ajax GET call for electrode-archetype-react-component repo
// $.ajax({url: "https://api.github.com/repos/electrode-io/electrode-archetype-react-component/issues", success: function(returndata){
//   var issues = returndata;
//
//   if(issues.length > 2) {
//     console.log('yes');
//
//     var issueArray = $.map(issues, function(issue, index) {
//
//         var issue = {
//         issueTitle: issue.title,
//         issueNumber: issue.number,
//         issueUrl: issue.url,
//         issueLabel: issue.labels
//       };
//
//       return issue;
//     })
//     console.log("issueArray", issueArray);
//   } else {
//     console.log('no');
//   }
// }});
//
// //ajax GET call for electrode-confippet repo
// $.ajax({url: "https://api.github.com/repos/electrode-io/electrode-confippet/issues", success: function(returndata){
//   var issues = returndata;
//
//   if(issues.length > 2) {
//     console.log('yes');
//
//     var issueArray = $.map(issues, function(issue, index) {
//
//         var issue = {
//         issueTitle: issue.title,
//         issueNumber: issue.number,
//         issueUrl: issue.url,
//         issueLabel: issue.labels
//       };
//
//       return issue;
//     })
//     console.log("issueArray", issueArray);
//
//     } else {
//       console.log('no');
//     }
// }});
//
// //ajax GET call for above-the-fold repo
// $.ajax({url: "https://api.github.com/repos/electrode-io/above-the-fold-only-server-render/issues", success: function(returndata){
//   var issues = returndata;
//
//   if(issues.length > 2) {
//     console.log('yes');
//
//     var issueArray = $.map(issues, function(issue, index) {
//
//         var issue = {
//         issueTitle: issue.title,
//         issueNumber: issue.number,
//         issueUrl: issue.url,
//         issueLabel: issue.labels
//       };
//
//       return issue;
//     })
//     console.log("issueArray", issueArray);
//   } else {
//     console.log('no');
//   }
// }});
//
// //ajax GET call for electrode-bundle-analyzer repo
// $.ajax({url: "https://api.github.com/repos/electrode-io/electrode-redux-router-engine/issues", success: function(returndata){
//   var issues = returndata;
//
//   if(issues.length > 2) {
//     console.log('yes');
//
//     var issueArray = $.map(issues, function(issue, index) {
//
//         var issue = {
//         issueTitle: issue.title,
//         issueNumber: issue.number,
//         issueUrl: issue.url,
//         issueLabel: issue.labels
//       };
//
//       return issue;
//     })
//     console.log("issueArray", issueArray);
//   } else {
//     console.log('no');
//   }
// }});
//
// //ajax GET call for electrode-bundle-analyzer repo
// $.ajax({url: "https://api.github.com/repos/electrode-io/electrode-redux-router-engine/issues", success: function(returndata){
//   var issues = returndata;
//
//   if(issues.length > 2) {
//     console.log('yes');
//
//     var issueArray = $.map(issues, function(issue, index) {
//
//         var issue = {
//         issueTitle: issue.title,
//         issueNumber: issue.number,
//         issueUrl: issue.url,
//         issueLabel: issue.labels
//       };
//
//       return issue;
//     })
//     console.log("issueArray", issueArray);
//
//     var displayArr = issueArray.pop()
//   } else {
//     console.log('no');
//   }
// }});
//
// //ajax GET call for features
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-electrify/issues", success: function(returndata){
    console.log("electrify:" + returndata);
    console.log('electrify labels');
    console.log(returndata.labels);
}});
