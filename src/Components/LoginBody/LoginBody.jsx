
import t1 from "../../assets/t1.png"
import t2 from "../../assets/t2.png"
import igoogle from "../../assets/igoogle.png"
import iface from "../../assets/iface.png"
import "./LoginBody.css"
function LoginBody() {
  
  return (
    <>
      <section id="LoginBodyContainer">
        <div id="formContainer">
          <div id="LoginTitles">
          <h1> Acesse Sua Conta</h1>
          <p>Novo Cliente? Então registre-se <a href="">Aqui</a></p>
        </div>
        <div id="LoginForm">
          <label htmlFor="">Login*</label>
          <input type="email" name="" id="" placeholder="Digite seu Login ou e-mail"/>

          <label htmlFor="">Senha*</label>
          <input type="password" placeholder="Digite sua Senha"/>
        
          <a href="">Esqueci minha senha</a>
          <button>Acessar Conta</button>
        <div>
          <a href=""> Ou faça login com</a>
          <img class="imggoogle" src={igoogle} alt=""/>
          <img class="imgface" src={iface} alt=""/>
        </div>
        </div>
        </div>
        <div>
          <img class="imgt1" src={t1} alt="" />
          <img class="imgt2" src={t2} alt="" />
        </div>
        </section>
    </>
  )
}

export default LoginBody
