//ajax GET call for electrode-io repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-io.github.io/issues", success: function(returndata){
    var issues = returndata;

    if(issues.length > 2) {
      console.log('yes');

      var issueArray = $.map(issues, function(issue, index) {

          var issue = {
          issueTitle: issue.title,
          issueNumber: issue.number,
          issueUrl: issue.url,
          issueLabel: issue.labels
        };

        return issue;
      })
      console.log("issueArray", issueArray);
    } else {
      console.log('no');
    }
}});

//ajax GET call for jwt repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-csrf-jwt/issues", success: function(returndata){
  var issues = returndata;

  if(issues.length > 2) {
    console.log('yes');

    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.url,
        issueLabel: issue.labels
      };

      return issue;
    })
    console.log("issueArray", issueArray);
  } else {
    console.log('no');
  }
}});

//ajax GET call for electrode-react-ssr-caching repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-react-ssr-caching/issues", success: function(returndata){
  var issues = returndata;

  if(issues.length > 2) {
    console.log('yes');

    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.url,
        issueLabel: issue.labels
      };

      return issue;
    })
    console.log("issueArray", issueArray);
  } else {
    console.log('no');
  }
}});

//ajax GET call for electrode-electrify repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-electrify/issues", success: function(returndata){
  var issues = returndata;

  if(issues.length > 2) {
    console.log('yes');

    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.url,
        issueLabel: issue.labels
      };

      return issue;
    })
    console.log("issueArray", issueArray);
  } else {
    console.log('no');
  }
}});

//ajax GET call for electrode-explorer repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-explorer/issues", success: function(returndata){
  var issues = returndata;

  if(issues.length > 2) {
    console.log('yes');

    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.url,
        issueLabel: issue.labels
      };

      return issue;
    })
    console.log("issueArray", issueArray);
  } else {
    console.log('no');
  }
}});

//ajax GET call for electrode-archetype-react-component repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-archetype-react-component/issues", success: function(returndata){
  var issues = returndata;

  if(issues.length > 2) {
    console.log('yes');

    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.url,
        issueLabel: issue.labels
      };

      return issue;
    })
    console.log("issueArray", issueArray);
  } else {
    console.log('no');
  }
}});

//ajax GET call for electrode-confippet repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-confippet/issues", success: function(returndata){
  var issues = returndata;

  if(issues.length > 2) {
    console.log('yes');

    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.url,
        issueLabel: issue.labels
      };

      return issue;
    })
    console.log("issueArray", issueArray);

    } else {
      console.log('no');
    }
}});

//ajax GET call for above-the-fold repo
$.ajax({url: "https://api.github.com/repos/electrode-io/above-the-fold-only-server-render/issues", success: function(returndata){
  var issues = returndata;

  if(issues.length > 2) {
    console.log('yes');

    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.url,
        issueLabel: issue.labels
      };

      return issue;
    })
    console.log("issueArray", issueArray);
  } else {
    console.log('no');
  }
}});

//ajax GET call for electrode-bundle-analyzer repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-redux-router-engine/issues", success: function(returndata){
  var issues = returndata;

  if(issues.length > 2) {
    console.log('yes');

    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.url,
        issueLabel: issue.labels
      };

      return issue;
    })
    console.log("issueArray", issueArray);
  } else {
    console.log('no');
  }
}});

//ajax GET call for electrode-bundle-analyzer repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-redux-router-engine/issues", success: function(returndata){
  var issues = returndata;

  if(issues.length > 2) {
    console.log('yes');

    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.url,
        issueLabel: issue.labels
      };

      return issue;
    })
    console.log("issueArray", issueArray);
  } else {
    console.log('no');
  }
}});

//ajax GET call for features
// $.ajax({url: "https://api.github.com/repos/electrode-io/electrode-electrify/issues", success: function(returndata){
    // console.log(returndata);
    // console.log('electrify labels');
    // console.log(returndata.labels);
// }});
