

$(document).ready(function () {
    var make_repo_item = function (repo) {
        return "<li><a href='" + repo.html_url + "'>" + repo.name + "</a></li>";
    }
    var gh = new GitHub({
        token: '46bf392d999b9d9f133b24a2d9e6677aa5ce109b'
    });
    if ($("#gitrepos") || $("#gitforks")) {
        gh.getUser().listRepos().then(function (response) {
            $("#gitforks").html(document.createElement("ul"));
            $("#gitrepos").html(document.createElement("ul"));
            response.data
                .filter(function (repo) {
                    return !repo.archived;
                })
                .forEach(function (repo) {
                    if (repo.fork) {
                        $("#gitforks ul").append(make_repo_item(repo));
                    } else {
                        $("#gitrepos ul").append(make_repo_item(repo));
                    }
                });
        });
    }
});
