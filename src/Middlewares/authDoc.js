async function authDocProducao(req, res, next){
    const { senhaDigitada } = req.body;

    if(req.Headers.host.includes('localhost') || req.originalUrl !== "/doc/"){
        // Usuario esta no local host
        return next();
    }

    if ( senhaDigitada === process.env.SWAGGER_SENHA_DOC){
        // Usuario Digitou a senha certa
        return next();
    }

    if (senhaDigitada){
        // Usuario Digitou a senha errada
        res.status(401).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
        <form method='POST'>
    <p style='color:red'>Senha Errada</p>
    <label for="senhaDigitada">Senha da Documentação:</label>
    <input type="password" name="senhaDigitada" id="senhaDigitada"></input>
    <button type="submit">Entrar</button>
       </form>
        `))
    }else{
        // Usuario ainda não digitou a senha e esta em modo produção
        res.status(200).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
        <form method='POST'>
    <label for="senhaDigitada">Senha da Documentação:</label>
    <input type="password" name="senhaDigitada" id="senhaDigitada"></input>
    <button type="submit">Entrar</button>
       </form>
        `))
    }
}


module.exports.authDocProducao;