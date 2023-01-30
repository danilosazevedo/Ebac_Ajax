$(document).ready(function () {
    const endpoint = `https://api.github.com/users/danilosazevedo`;

        $.ajax(endpoint).done(function (resposta) {

            const img = resposta.avatar_url;
            const name = resposta.name;
            const username = resposta.login;
            const repositories = resposta.public_repos;
            const seguidores = resposta.followers;
            const seguindo = resposta.following;

            $('#img').attr('src', img);
            $('#name').text(name);
            $('#username').text(`@${username}`);
            $('#repositories').text(repositories);
            $('#followers').text(seguidores);
            $('#following').text(seguindo);

        })
