var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'img/harry.png'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'img/lion.png'
    },
    {
        id: 3,
        title: 'Volver',
        desc: 'Film Pedro Almodovara',
        image: 'img/volver.png'
    },
    {
        id: 4,
        title: 'Titanic',
        desc: 'Film katastroficzny',
        image: 'img/titani.png'
    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.image
        }, )

    );
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'lista fimów'),
    React.createElement('ul', {}, moviesElements)

);
ReactDOM.render(element, document.getElementById('app'));