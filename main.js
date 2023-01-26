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


    // fetch(endpoint)
    //     .then(function (resposta) {
    //         return resposta.json();
    //     })

    //     .then(function (json) {

    //         const img = json.avatar_url;
    //         const name = json.name;
    //         const username = json.login;
    //         const repositories = json.public_repos;
    //         const seguidores = json.followers;
    //         const seguindo = json.following;

    //         $('#img').attr('src', img);
    //         $('#name').text(name);
    //         $('#username').text(`@${username}`);
    //         $('#repositories').text(repositories);
    //         $('#followers').text(seguidores);
    //         $('#following').text(seguindo);
    //     })

    //     .catch(function (erro) {
    //         alert('Ops')
    //     })

    //     .finally(function(){

    //     })
})