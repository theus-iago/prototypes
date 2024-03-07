class Janela {
  static header_content = "Caixa de Mensagem";
  static main_content = "Protótipo Padrão (Alert)";
  static footer_content = null;
  static color = "#1e1e1e";
  static destino = document.body;
  static area_msg = null;
  static type = "alert";

  // types: confirm, prompt, alert;


  static config(config) {
    this.header_content = config.header_content;
    this.main_content = config.main_content;
    this.color = config.color;
    this.type = config.type;

    if (config.header_content == undefined) {
      this.header_content = "Caixa de Mensagem";
    }
    if (config.main_content == undefined) {
      this.main_content = "Protótipo Padrão (Alert)";
    }
    if (config.color == undefined) {
      this.color = "#1e1e1e";
    }
    if (config.type == undefined) {
      this.type = "alert";
    }
  }
  static exibir() {
    this.area_msg = document.createElement("div");
    this.area_msg.setAttribute("id", "area_msg");
    const style_area =
    "background-color: rgba(0,0,0,0.7);" +
    "height: 100%;" +
    "width: 100%;" +
    "position: absolute;" +
    "top: 0px;" +
    "left: 0px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-direction: column;";

    this.area_msg.setAttribute("style", style_area);
    this.destino.appendChild(this.area_msg);
    this.destino.style.overflowY = "hidden";

    const box_msg = document.createElement("div");
    box_msg.setAttribute("id", "box_msg");
    const style_box_msg =
    "background-color: #fff;" +
    "border-radius: 8px;" +
    "overflow: hidden;" +
    "height: 350px;" +
    "width: 450px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-direction: column;";
    box_msg.setAttribute("style", style_box_msg);
    this.area_msg.prepend(box_msg);

    const header = document.createElement("div");
    header.setAttribute("id", "box_header");
    const titulo = document.createElement("h3");
    const style_header =
    "background-color:"+this.color+";" +
    "color: #fff;" +
    "border-radius: 0px;" +
    "padding: 6px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: space-between;" +
    "flex-direction: row;";
    titulo.innerHTML = this.header_content;
    header.appendChild(titulo);
    header.setAttribute("style", style_header);
    box_msg.prepend(header);

    const main = document.createElement("div");
    main.setAttribute("id", "box_main");
    const paragrafo = document.createElement("p");
    const style_main =
    "background-color: #fff;" +
    "border-radius: 0px;" +
    "padding: 6px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: start;" +
    "text-align: start;" +
    "flex-wrap: wrap;" +
    "flex-direction: column;";
    paragrafo.innerHTML = this.main_content;
    main.appendChild(paragrafo);
    main.setAttribute("style", style_main);
    box_msg.appendChild(main);

    const footer = document.createElement("div");
    footer.setAttribute("id", "box_footer");
    const style_footer =
    "background-color: #fff;" +
    "color: #fff;" +
    "padding: 6px;" +
    "border-radius: 0px;" +
    "width: 100%;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: start;" +
    "text-align: center;" +
    "flex-direction: row;";

    const style_botao_footer =
    "background-color:"+this.color+";" +
    "border: none;" +
    "border-radius: 4px;" +
    "color: #fff;" +
    "margin: 3px;" +
    "padding: 5px 0px 5px 0px;" +
    "width: 100%;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: start;" +
    "text-align: center;" +
    "flex-direction: column;";

    const style_botao_cancel =
    "background-color: #c8c8c8;" +
    "color: #1e1e1e;" +
    "border: none;" +
    "border-radius: 4px;" +
    "margin: 3px;" +
    "padding: 5px 0px 5px 0px;" +
    "width: 100%;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: start;" +
    "text-align: center;" +
    "flex-direction: column;";
    
    const style_botao_close =
    "background-color: #ff3030;" +
    "color: #ffffff;" +
    "border: none;" +
    "border-radius: 4px;" +
    "width: 80px;" +
    "margin: 3px;" +
    "padding: 5px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: start;" +
    "text-align: center;" +
    "flex-direction: column;";
    
    const style_botao_send =
    "background-color:"+this.color+";" +
    "color: #ffffff;" +
    "border: none;" +
    "border-radius: 4px;" +
    "margin: 3px;" +
    "padding: 5px;" +
    "width: 100%;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: start;" +
    "text-align: center;" +
    "flex-direction: column;";

    const style_msg = `
     font-family:'Arial, Helvetica, sans-serif';
     border:2px solid ${this.color};
     border-radius: 6px;
     margin: 3px;
     padding: 3px;
    `;

    if (this.type == "alert") {
      const botao_footer = document.createElement("button");
      botao_footer.setAttribute("id", "botao_footer");
      botao_footer.innerHTML = "OK";
      botao_footer.setAttribute("style", style_botao_footer);
      footer.appendChild(botao_footer);
      botao_footer.addEventListener("click", () => {
        this.ocultar();
      });
    } else if (this.type == "confirm") {
      const botao_cancel = document.createElement("button");
      botao_cancel.setAttribute("id", "botao_cancel");
      const botao_ok = document.createElement("button");
      botao_ok.setAttribute("id", "botao_ok");
      
      botao_cancel.innerHTML = "Cancel";
      botao_cancel.setAttribute("style", style_botao_cancel);
      footer.appendChild(botao_cancel);
      botao_cancel.addEventListener("click", () => {
        this.ocultar();
      });

      botao_ok.innerHTML = "Ok";
      botao_ok.setAttribute("style", style_botao_footer);
      footer.appendChild(botao_ok);
      botao_ok.addEventListener("click", () => {
        this.ocultar();
      });
    }else if(this.type == "prompt") {
      this.header_content = "Lista";
      this.main_content = " ";
      const msg = document.createElement("input");
      msg.setAttribute("style", style_msg);
      msg.setAttribute("type", "text");
      msg.setAttribute("name", "msg");
      msg.setAttribute("class", "msg");
      msg.setAttribute("id", "msg");
      msg.setAttribute("required", "true");
      
      const botao_close = document.createElement("button");
      botao_close.setAttribute("id", "botao_close");
      
      botao_close.innerHTML = "close";
      botao_close.setAttribute("style", style_botao_close);
      header.appendChild(botao_close);
      botao_close.addEventListener("click", () => {
        this.ocultar();
      });
      
      msg.addEventListener("mouseover", (evt) => {
        msg.style.outline = "";
      });
      msg.addEventListener("mouseout", (evt) => {
        msg.style.outline = "";
      });
      
      footer.appendChild(msg);
      
      const botao_send = document.createElement("button");
      botao_send.setAttribute("id", "botao_send");
      botao_send.innerHTML = "enviar";
      botao_send.setAttribute("style", style_botao_send);
      footer.appendChild(botao_send);
      botao_send.addEventListener("click", () => {
        const msg_value = msg.value;
        const bloco = document.createElement("div");
        bloco.innerHTML = msg_value;
        const style_bloco = `
         background-color: ${this.color};
         color: #fff;
         border-radius: 6px;
         margin: 5px;
         padding: 4px;
         display: flex;
         flex-wrap: wrap;
        `;
        bloco.setAttribute("style", style_bloco);
        main.style.alignItems = "end";
        main.appendChild(bloco);
        msg.value = "";
      });
    }
    footer.setAttribute("style", style_footer);
    box_msg.appendChild(footer);
  }
  static ocultar() {
    this.destino.style.overflowY = "";
    this.destino.removeChild(this.area_msg);
  }
}
export default Janela;