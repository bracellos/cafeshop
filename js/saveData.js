$(function(){
    let storage = (localStorage.produtos) ? JSON.parse(localStorage.produtos) : [];

    //evento de cadastro
    $(document).on('submit', '#cadastraProduto', function(){
        console.log("entrou");
        //pegar valores dos campos
        let title = $('#title').val()
        let description = $('#description').val()
        let img = $('#img').val()
        let price = $('#price').val()

        //criar objeto para gravar
        let item = {
        //  propriedae : variavel
            title : title,
            description : description,
            img : img,
            price : price
        }

        //adicioar o objeto do item no array de produtos
        storage.push(item)

        //transformar os dados em string json e salvar no storage
        localStorage.setItem("produtos", JSON.stringify(storage))

        //direcionar usuario para index
        window.location.href = "index.html"
        return false;
    })

    let add = (storage) => {

    }

    let del = () => {

    }
})