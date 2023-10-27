$(function(){
    let estrutura = '';

    let loadProdutos = () => {
        $.ajax({
            url : "/produtos.json",
            dataType : "JSON",
            success : function(data){
                //fazer loop nos data
                console.log(data.produtos)
                for(pos in data.produtos){
                    // estrutura = estrutura + `<div></div>`
                    estrutura += `
                    <div class="col-sm-12 col-md-3">
                    <div class="card">
                        <img src="img/${data.produtos[pos].img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.produtos[pos].title}</h5>
                            <p class="card-text">${data.produtos[pos].description}</p>
                            <a href="#" class="btn btn-success">COMPRAR</a>
                            <span class="badge bg-danger fs-6">R$ ${data.produtos[pos].price}</span>
                        </div>
                    </div>
                    </div>
                    `;
                    
                }

                //injetar o conteudo no index
                $('#loadProdutos').html(estrutura)
            }
        })
    }

    //carregar produtos
    loadProdutos()
})