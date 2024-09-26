for (let i = 1; i<=parseInt(localStorage.getItem("productCount")); i++) {
  let link1 = localStorage.getItem("product"+i+"pic")
  let price1 = localStorage.getItem("product"+i+"price")
  let price2 = localStorage.getItem("product"+i+"prePrice")
  let name1 = localStorage.getItem("product"+i+"name")
  console.log(i)
  console.log(price1)
  console.log(price2)
  template.innerHTML = `
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <link rel="stylesheet" href="../static/output.css" />
      <title>Header Component</title>
    </head>
    <body>
      <div class="w-92 h-128 p-4 bg-jewWhite">
        <div class="w-full h-2/3 bg-red-500">
          <img class="w-full h-full border-4 border-jewYellow" src="`+link1+`"/>
        </div>
        <div class="h-1/3 text-2xl font-custom3 text-center pt-4">
          <a class="">`+name1+"asdas"+`</a>
          <div class="w-2/3 mt-4 mx-auto h-1/3 grid grid-cols-2 gap-2">
            <div class="text-white grid place-items-end">
              <div class="bg-black h-full w-2/3 grid place-items-center rounded">
                %20
              </div>
            </div>
            <div class="grid place-items-start">
              <a class="line-through text-gray-500">₺6000</a>
              <a class="scale-110">₺aa`+price1+`</a>
            </div>
          </div>
        </div>
      </div>
    </body>
  `;

  class product extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.append(template.content.cloneNode(true));
    }
  }

  customElements.define('product-' + i, product);
}
