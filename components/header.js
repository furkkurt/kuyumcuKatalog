const template = document.createElement('template');
template.innerHTML = `
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="../static/output.css" />
    <title>Header Component</title>
  </head>
  <body>
    <header class="flex items-center justify-between bg-transparent h-16">
      <!-- Logo -->
	  <img src="assets/logo.jpg" class="pl-2 h-16" />
      <div class="font-custom1 text-amber-300 overflow-hidden mx-16 hidden jusitfy-items-right lg:block [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <p class="animate-infinite-scroll w-screen whitespace-nowrap pl-128 text-xl animate-fade">
          TÜRKİYE'DE KUYUMCULUĞUN BİR NUMARALI ADRESİ !!!
        </p>
      </div>
      <!-- Menu Items -->
      <div class="justify-around space-x-4 pr-8 whitespace-nowrap text-xl font-bold hover:scale-110 transition">
        <a href="index.html" class="text-white font-custom3 hover:text-yellow-500 hover:scale-110 transition">Anasayfa</a>
        <a href="about.html" class="text-white font-custom3 hover:text-yellow-500 hover:scale-110 transition">Hakkımızda</a>
        <a href="hizmetler.html" class="text-white font-custom3 hover:text-yellow-500 hover:scale-110 transition">Hizmetler</a>
        <a href="blog.html" class="text-white font-custom3 hover:text-yellow-500 hover:scale-110 transition">Blog</a>
      </div>
    
    </header>
  </body>
`;

class customHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.append(template.content.cloneNode(true));
	}
}

customElements.define('custom-header', customHeader);
