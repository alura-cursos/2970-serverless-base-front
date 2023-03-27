const BASE_URL = "<inserir aqui a URL da API>";

function buildFetchObj(metodo, contentType, body) {
  return ({
    method: metodo,
    headers: {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "PUT,POST,GET",
    },
    body: body,
  });
}

async function criaRegistro(novoRegistro) {
  const fetchObj = buildFetchObj("POST", "application/json", JSON.stringify(novoRegistro))
  try {
    const res = await fetch(`${BASE_URL}/alunos`, fetchObj);
    return res.json();
  } catch (erro) {
    return erro;
  }
}

export { criaRegistro };
