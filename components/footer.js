template.innerHTML = `
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Footer Component</title>
    <link rel="stylesheet" href="../static/output.css" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
    <footer class="m-auto bottom-0 w-11/12 h-auto flex space-x-8 p-4 bg-transparent font-custom3 border-t-8 border-yellow-500 border-dotted py-16 border-opacity-80">
      <div class="flex flex-col w-full">
        <p class="font-bold text-xl text-white pb-2">İletişim</p>
        <hr class="pb-2 w-1/2">
        <p class="pl-2 text-white">afurkankurt@outlook.com</p>
        <p class="pl-2 text-white">+90 552 248 41 38</p>
        <a href="../contacts.html" class="pl-2 text-white hover:scale-110 transition">Diğer sosyal hesaplar</a>
      </div>
      <div class="w-2/3 hidden md:block border-4 border-yellow-500 rounded-xl">
		  <iframe class="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462.96594636788734!2d39.16875036686503!3d38.68447796661449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076c1b84d10e933%3A0x4baf260d8d4850fc!2zw4dheWRhw6fEsXJhLCBBZG5hbiBLYWh2ZWNpIEJsdiwgMjMzNTAgRWzDonrEscSfIE1lcmtlei9FbGF6xLHEnw!5e0!3m2!1str!2str!4v1709930711640!5m2!1str!2str" width="800" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </footer>
  </body>
`;

class customFooter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.append(template.content.cloneNode(true));
	}
}

customElements.define('custom-footer', customFooter);
