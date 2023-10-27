$(function(){
    let estrutura;

    let loadProdutos = () => {
        $.ajax({
            url : "/produtos.json",
            dataType : "JSON",
            success : function(produtos){
                //fazer loop nos produtos
                for(pos in produtos){
                    // estrutura = estrutura + `<div></div>`
                    estrutura += `
                    <div class="col-sm-12 col-md-3">
                    <div class="card">
                        <img src="img/${produtos[pos].img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${produtos[pos].title}</h5>
                            <p class="card-text">${produtos[pos].description}</p>
                            <a href="#" class="btn btn-success">COMPRAR</a>
                            <span class="badge bg-danger fs-6">R$ ${produtos[pos].price}</span>
                        </div>
                    </div>
                    </div>
                    `;
                }
            }
        })
    }

    //carregar produtos
    loadProdutos()
})