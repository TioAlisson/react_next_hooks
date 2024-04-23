const artigos = [
    { id: 1, titulo: "1º título", subtitulo: "1º subtítulo" },
    { id: 2, titulo: "2º título", subtitulo: "2º subtítulo" },
    { id: 3, titulo: "3º título", subtitulo: "3º subtítulo" },
    { id: 4, titulo: "4º título", subtitulo: "4º subtítulo" },
    { id: 5, titulo: "5º título", subtitulo: "5º subtítulo" },
    { id: 6, titulo: "6º título", subtitulo: "6º subtítulo" },
    { id: 7, titulo: "7º título", subtitulo: "7º subtítulo" },
    { id: 8, titulo: "8º título", subtitulo: "8º subtítulo" },
]

let conteudo = artigos.map(art => <TestProps key={art.id} titulo={art.titulo} subtitulo={art.subtitulo} />)