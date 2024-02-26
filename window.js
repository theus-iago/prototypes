class Janela {
  static content_header = "Titulo";
  static content_main = "exemplo";
  static content_footer = null;
  static cor = "gray";
  static destino = document.body;
  static divmsg = null;
  
  static config(config) {
    this.content_header = config.header;
    this.content_main = config.main;
    this.cor = config.cor;
    this.destino =  document.body;
  }
  static mostrar() {
    this.divmsg = document.createElement("div");
    const estilo_divmsg = 
     "display: flex;" +
     "justify-content: center;" +
     "align-items: center;" +
     "flex-direction: column;" +
     "position: absolute;" +
     "top: 0px;" +
     "left: 0px;" +
     "width: 100%;" +
     "height: 100vh;" +
     "background-color: rgba(0,0,0,0.7);";
     this.divmsg.setAttribute("id", "divmsg");
     this.divmsg.setAttribute("style", estilo_divmsg);
     this.destino.prepend(this.divmsg);
     
     const estilo_header = 
     "display: flex;" +
     "justify-content: flex-start;" +
     "align-items: flex-start;" +
     "flex-direction: column;" +
     "width: 300px;";
     
     const header = document.createElement("div");
     header.setAttribute("style", estilo_header);
     this.divmsg.appendChild(header);
     
     const estilo_content_header = 
     "display: flex;" +
     "justify-content: flex-start;" +
     "align-items: center;" +
     "text-align: center;" +
     "width: 100%;" +
     "background-color:"+this.cor+";" +
     "color: #fff;" +
     "padding: 5px;" +
     "border-radius: 5px 5px 0px 0px;";
     
     const content_header = document.createElement("div");
     content_header.setAttribute("style", estilo_content_header);
     content_header.innerHTML = this.content_header;
     header.appendChild(content_header);
     
     const estilo_main = 
     "display: flex;" +
     "justify-content: flex-start;" +
     "align-items: flex-start;" +
     "flex-direction: column;" +
     "width: 300px;";
     
     const main = document.createElement("div");
     main.setAttribute("style", estilo_main);
     this.divmsg.appendChild(main);
     
     const estilo_content_main = 
     "display: flex;" +
     "justify-content: center;" +
     "align-items: center;" +
     "text-align: center;" +
     "width: 100%;" +
     "background-color: #fff;" +
     "color: #000;" +
     "padding: 5px;";
     
     const content_main = document.createElement("div");
     content_main.setAttribute("style", estilo_content_main);
     content_main.innerHTML = this.content_main;
     main.appendChild(content_main);
     
     const estilo_footer = 
     "display: flex;" +
     "justify-content: flex-start;" +
     "align-items: flex-start;" +
     "flex-direction: column;" +
     "width: 300px;";
     
     const footer = document.createElement("div");
     footer.setAttribute("style", estilo_footer);
     this.divmsg.appendChild(footer);
     
     const estilo_content_footer = 
     "display: flex;" +
     "justify-content: center;" +
     "align-items: center;" +
     "text-align: center;" +
     "width: 100%;" +
     "background-color: #fff;" +
     "color: #fff;" +
     "padding: 5px;";
     
     const estilo_botao_footer = 
     "background-color:"+this.cor+";" +
     "width: 100%;" +
     "border: none;" +
     "border-radius: 6px;" +
     "color: #fff;" +
     "padding: 5px 0px 5px 0px;";
     
     const content_footer = document.createElement("div");
     const botao_footer = document.createElement("button");
     botao_footer.innerHTML = "Ok";
     content_footer.setAttribute("style", estilo_content_footer);
     botao_footer.setAttribute("style", estilo_botao_footer);
     
     content_footer.appendChild(botao_footer);
     footer.appendChild(content_footer);
     
     botao_footer.addEventListener("click", this.ocultar);
  }
  static ocultar = () => {
    this.destino.removeChild(divmsg);
  }
}
