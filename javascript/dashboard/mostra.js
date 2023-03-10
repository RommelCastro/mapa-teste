function numeroDePatentes(dataSnapshot) {
  var num = dataSnapshot.numChildren();

  numeroPatentes.innerHTML = num + (num > 1 ? "" : "");
  dataSnapshot.forEach(function (item) {
    //percorre todos os elementos
    var value = item.val();
  });
}

function numeroEntidade(dataSnapshot) {
  var num = dataSnapshot.numChildren();

  numeroEntidades.innerHTML = num + (num > 1 ? "" : "");
  dataSnapshot.forEach(function (item) {
    //percorre todos os elementos
    var value = item.val();
  });
}

function numeroComunidade(dataSnapshot) {
  var num = dataSnapshot.numChildren();

  let contador = 0;
  dataSnapshot.forEach(function (item) {
    //percorre todos os elementos
    var value = item.val();
    if (value.Tipo == "Eventos") {
      contador++;
      numeroComunidades.innerHTML = contador;
    }
  });
}
function usuarios(dataSnapshot) {
  var num = dataSnapshot.numChildren();
  numeroUsuarios.innerHTML = num + (num > 1 ? "" : "");
  dataSnapshot.forEach(function (item) {
    //percorre todos os elementos
    var value = item.val();
  });
}
function marcadores(dataSnapshot) {
  var num = dataSnapshot.numChildren();
  let contador = 0;

  dataSnapshot.forEach(function (item) {
    //percorre todos os elementos
    var value = item.val();
    if (value.Validacao == false) {
      contador++;
      //numeroMarcadores.innerHTML = contador;
    }
  });
}

function carregaCategorias(dataSnapshot) {
  //var num = dataSnapshot.numChildren();
  let aceleradora = 0;
  let catalisadores = 0;
  let comunicacao = 0;
  let coworking = 0;

  let vetorEntidades = [];
  dataSnapshot.forEach(function (item) {
    //percorre todos os elementos
    var value = item.val();

    if (value.Tipo === "Aceleradora") {
      aceleradora++;
      if (aceleradora == 1) {
        vetorEntidades.push({
          nome: "Aceleradora",
          imagem: "img/img-bl/01-aceleradora.png",
          quantidade: 0,
        });
      }
    }

    if (value.Tipo === "Catalisadores Locais") {
      catalisadores++;
      if (catalisadores == 1) {
        vetorEntidades.push({
          nome: "Catalisadores Locais",
          imagem: "img/img-bl/23-catalisadores-locais.png",
          quantidade: 0,
        });
      }
    }
    if (value.Tipo === "Comunica????o e M??dia") {
      comunicacao++;
      if (comunicacao == 1) {
        vetorEntidades.push({
          nome: "Comunica????o e M??dia",
          imagem: "img/img-bl/03-comunicacao-e-midia.png",
          quantidade: 0,
        });
      }
    }
    if (value.Tipo === "Coworking") {
      coworking++;
      if (coworking == 1) {
        vetorEntidades.push({
          nome: "Coworking",
          imagem: "img/img-bl/06-coworking.png",
          quantidade: 0,
        });
      }
    }
  });

  vetorEntidades[0].quantidade = aceleradora;
  vetorEntidades[1].quantidade = catalisadores;
  vetorEntidades[2].quantidade = comunicacao;
  vetorEntidades[3].quantidade = coworking;
  //ordenar o vetor

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (vetorEntidades[i].quantidade > vetorEntidades[j].quantidade) {
        let aux = vetorEntidades[i];
        vetorEntidades[i] = vetorEntidades[j];
        vetorEntidades[j] = aux;
      }
    }
  }

  for (let index = 0; index < 4; index++) {
    let tabela = document.getElementById("tabela");

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    let div1 = document.createElement("div");
    div1.className = "d-flex align-items-center";
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    img.src = vetorEntidades[index].imagem;
    img.className = "avatar-md avatar rounded-circle";

    td.append(div1);
    div1.append(div2);
    div2.append(img);
    tr.append(td);

    let tdNome = document.createElement("td");
    tdNome.innerHTML = vetorEntidades[index].nome;
    tdNome.className = "align-middle";
    tr.append(tdNome);

    let tdQuanti = document.createElement("td");
    tdQuanti.innerHTML = vetorEntidades[index].quantidade;
    tdQuanti.className = "align-middle";
    tr.append(tdQuanti);
    tabela.append(tr);
  }

  //document.getElementById("totalAcele").innerHTML = aceleradora;

  //document.getElementById("totalCata").innerHTML = catalisadores;
  //document.getElementById("totalComunica").innerHTML = comunicacao;
  //document.getElementById("totalCowo").innerHTML = coworking;
}

function comunidades(dataSnapshot) {
  var num = dataSnapshot.numChildren();
  //document.getElementById("totalComu").innerHTML = num + (num > 1 ? "" : "");
}

//$(window).on('modal', function(){ ...});

let conta = 0;
function carregaTodasCategorias(dataSnapshot) {
  var num = dataSnapshot.numChildren();

  let aceleradora = 0;
  let catalisadores = 0;
  let comunicacao = 0;
  let coworking = 0;
  let escolas = 0;
  let markers = 0;
  let fabrica = 0;
  let grandesEmpresas = 0;
  let incubadoras = 0;
  let iniciativas = 0;
  let investidores = 0;
  let nucleos = 0;
  let parques = 0;
  let preAceleradora = 0;
  let propriedadeIntelectual = 0;
  let mentoria = 0;
  let startup = 0;

  let vetorEntidades = [];
  dataSnapshot.forEach(function (item) {
    //percorre todos os elementos
    var value = item.val();
    if (value.Validacao == true) {
      if (value.Tipo === "Aceleradora") {
        aceleradora++;
      }

      if (value.Tipo === "Catalisadores Locais") {
        catalisadores++;
      }
      if (value.Tipo === "Comunica????o e M??dia") {
        comunicacao++;
      }
      if (value.Tipo === "Coworking") {
        coworking++;
      }

      if (value.Tipo === "Escolas") {
        escolas++;
      }
      //adff
      if (value.Tipo === "Espa??os Makers") {
        markers++;
      }
      if (value.Tipo === "F??brica de Aplicativos") {
        fabrica++;
      }
      if (value.Tipo === "Grandes Empresas") {
        grandesEmpresas++;
      }
      if (value.Tipo === "Incubadoras") {
        incubadoras++;
      }
      if (value.Tipo === "Iniciativas Universit??rias") {
        iniciativas++;
      }
      if (value.Tipo === "Investidores") {
        investidores++;
      }
      if (value.Tipo === "N??cleos de Inova????o") {
        nucleos++;
      }
      if (value.Tipo === "Pr?? Aceleradoras") {
        preAceleradora++;
      }
      if (value.Tipo === "Parques Tecnol??gicos") {
        parques++;
      }
      if (value.Tipo === "Propriedade Intelectual") {
        propriedadeIntelectual++;
      }
      if (value.Tipo === "Mentoria") {
        mentoria++;
      }
      if (value.Tipo === "Startup") {
        startup++;
      }
    }
  });

  vetorEntidades.push({
    nome: "Startup",
    imagem: "img/img-bl/26-startup.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Mentoria",
    imagem: "img/img-bl/22-rede-de-mentoria.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Propriedade Intelectual",
    imagem: "img/img-bl/20-propriedade-intelectual.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Pr?? Aceleradora",
    imagem: "img/img-bl/19-pre-aceleradoras.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Parques Tecnol??gicos",
    imagem: "img/img-bl/18-parques-tecnologicos.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "N??cleos de Inova????o",
    imagem: "img/img-bl/17-nucleo-de-inovacoes.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Investidores",
    imagem: "img/img-bl/15-investidores.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Iniciativas Universit??rias",
    imagem: "img/img-bl/25-iniciativa-universitaria.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Incubadoras",
    imagem: "img/img-bl/14-incubadora.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Grandes Empresas",
    imagem: "img/img-bl/13-grandes-empresas.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Fabrica de Aplicativos",
    imagem: "img/img-bl/11-fabrica-de-aplicativos.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Espa??os Markers",
    imagem: "img/img-bl/09-espaco-maker.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Escolas",
    imagem: "img/img-bl/24-escola.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Coworking",
    imagem: "img/img-bl/06-coworking.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Comunica????o e M??dia",
    imagem: "img/img-bl/03-comunicacao-e-midia.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Catalisadores Locais",
    imagem: "img/img-bl/23-catalisadores-locais.png",
    quantidade: 0,
  });
  vetorEntidades.push({
    nome: "Aceleradora",
    imagem: "img/img-bl/01-aceleradora.png",
    quantidade: 0,
  });
  let index = vetorEntidades.findIndex((object) => {
    return object.nome === "Aceleradora";
  });
  vetorEntidades[index].quantidade = aceleradora;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Grandes Empresas";
  });
  vetorEntidades[index].quantidade = grandesEmpresas;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Coworking";
  });

  vetorEntidades[index].quantidade = coworking;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Investidores";
  });

  vetorEntidades[index].quantidade = investidores;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Incubadoras";
  });

  vetorEntidades[index].quantidade = incubadoras;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Escolas";
  });

  vetorEntidades[index].quantidade = escolas;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Catalisadores Locais";
  });

  vetorEntidades[index].quantidade = catalisadores;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Comunica????o e M??dia";
  });

  vetorEntidades[index].quantidade = comunicacao;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Fabrica de Aplicativos";
  });

  vetorEntidades[index].quantidade = fabrica;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Iniciativas Universit??rias";
  });

  vetorEntidades[index].quantidade = iniciativas;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "N??cleos de Inova????o";
  });

  vetorEntidades[index].quantidade = nucleos;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Parques Tecnol??gicos";
  });

  vetorEntidades[index].quantidade = parques;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Propriedade Intelectual";
  });

  vetorEntidades[index].quantidade = propriedadeIntelectual;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Startup";
  });

  vetorEntidades[index].quantidade = startup;

  index = vetorEntidades.findIndex((object) => {
    return object.nome === "Espa??os Markers";
  });

  vetorEntidades[index].quantidade = markers;

  //ordenar o vetor

  //document.getElementById("totalAcele").innerHTML = aceleradora;

  //document.getElementById("totalCata").innerHTML = catalisadores;
  //document.getElementById("totalComunica").innerHTML = comunicacao;
  //document.getElementById("totalCowo").innerHTML = coworking;
  return vetorEntidades;
}
