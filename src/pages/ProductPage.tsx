import { ChevronRight, Share, MapPin, Lock, Info, Star, StarHalf, ChevronDown } from 'lucide-react';

export default function ProductPage() {
  return (
    <div className="bg-white min-h-screen text-[#0f1111] pb-20">
      
      {/* Breadcrumb */}
      <div className="px-4 py-2 text-[#565959] text-[12px] flex items-center gap-1">
        <a href="#" className="hover:underline">Computadores e Informática</a>
        <ChevronRight size={12} className="text-[#565959]" />
        <a href="#" className="hover:underline">Acessórios</a>
        <ChevronRight size={12} className="text-[#565959]" />
        <a href="#" className="hover:underline">Teclados, Mouses e Periféricos</a>
        <ChevronRight size={12} className="text-[#565959]" />
        <a href="#" className="hover:underline text-[#0f1111] font-bold">Teclados</a>
      </div>

      {/* Hero Ad banner */}
      <div className="px-5 mb-4">
        <div className="w-full h-[60px] bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center justify-center font-bold text-lg rounded overflow-hidden relative cursor-pointer">
           <div className="absolute left-10 italic font-serif text-2xl opacity-50">Logitech</div>
           Viva o setup perfeito. <span className="underline ml-2 text-blue-200">Encontre o seu aqui.</span>
        </div>
      </div>

      {/* Main Product Layout */}
      <div className="max-w-[1500px] mx-auto px-5 flex items-start gap-6 relative">
          
          {/* Left Column: Images */}
          <div className="w-[450px] flex gap-3 sticky top-4 shrink-0">
             {/* Thumbnails */}
             <div className="w-[40px] flex flex-col gap-2 shrink-0">
                 {[1,2,3,4,5].map((i) => (
                    <div key={i} className={`w-[40px] h-[40px] border ${i===1 ? 'border-blue-500 shadow-[0_0_3px_rgba(59,130,246,0.8)]' : 'border-gray-300'} rounded p-1 cursor-pointer hover:border-blue-500 flex items-center justify-center`}>
                        <img src={`https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=40&h=40`} className="object-contain w-full h-full" alt="thumb"/>
                    </div>
                 ))}
             </div>
             {/* Main Image */}
             <div className="w-[400px] flex-grow flex flex-col relative shrink-0">
                 <div className="absolute top-0 right-0 p-2 cursor-pointer text-gray-500 hover:text-black">
                     <Share size={20} />
                 </div>
                 <div className="w-full h-[400px] flex items-center justify-center p-4">
                     <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=400&h=400" className="max-w-full max-h-full object-contain" alt="Main product" />
                 </div>
                 <div className="text-center mt-2 text-[12px] text-gray-600">
                     Role sobre a imagem para ampliar
                 </div>
             </div>
          </div>

          {/* Center Column: Product Details */}
          <div className="flex-grow min-w-0 pr-4">
             <h1 className="text-[24px] font-medium leading-[32px] mb-1">
                Teclado Mecânico Gamer Sem Fio Logitech G715, Teclas Tactile, LIGHTSYNC RGB, Bluetooth, LIGHTSPEED - Branco - Padrão US
             </h1>
             <a href="#" className="text-[#007185] hover:text-[#c60] hover:underline text-[14px]">
                Visite a loja da LOGITECH G
             </a>
             
             {/* Ratings */}
             <div className="flex items-center gap-4 mt-2">
                 <div className="flex items-center gap-1 cursor-pointer group">
                     <span className="font-bold text-[14px]">4,8</span>
                     <div className="flex -space-x-1 text-[#de7921]">
                         <Star size={18} fill="currentColor" />
                         <Star size={18} fill="currentColor" />
                         <Star size={18} fill="currentColor" />
                         <Star size={18} fill="currentColor" />
                         <StarHalf size={18} fill="currentColor" />
                     </div>
                     <ChevronDown size={14} className="text-gray-500 group-hover:text-black" />
                     <a href="#" className="text-[#007185] hover:text-[#c60] hover:underline text-[14px] ml-1">10.370 avaliações de clientes</a>
                 </div>
             </div>

             {/* Amazon's Choice & Purchases */}
             <div className="flex items-center gap-3 mt-3">
                 <div className="bg-[#232f3e] text-white text-[12px] px-2 py-1 flex items-center relative overflow-hidden group cursor-pointer">
                    <span className="font-medium mr-1 relative z-10">Escolha da Amazon</span>
                    <div className="absolute right-[-10px] top-0 bottom-0 w-[20px] bg-[#f90] skew-x-[-20deg]"></div>
                 </div>
                 <span className="text-[14px] text-gray-700">Mais de <span className="font-bold">2 mil</span> compras no mês passado</span>
             </div>

             <hr className="my-3 border-gray-300" />

             {/* Price */}
             <div className="flex items-start gap-1">
                 <span className="text-[14px] mt-2">R$</span>
                 <span className="text-[28px] font-medium leading-none mt-2">499</span>
                 <span className="text-[14px] mt-2">,90</span>
             </div>
             <div className="text-[14px] mt-1 space-y-1">
                 <div>Em até <span className="font-bold">9x R$ 55,58 sem juros</span> <a href="#" className="text-[#007185] hover:text-[#c60] hover:underline">Ver parcelas disponíveis</a></div>
                 <div>Pagamentos e Segurança: <a href="#" className="text-[#007185] hover:text-[#c60] hover:underline">Transação Segura</a></div>
                 <div>Política de Devolução: <a href="#" className="text-[#007185] hover:text-[#c60] hover:underline">Elegível para Devolução, Reembolso ou Troca</a></div>
             </div>

             {/* Forms / Colors */}
             <div className="mt-4">
                 <div className="text-[14px] font-bold text-gray-600 mb-2">
                     Cor: <span className="font-bold text-black border shadow-sm px-2 py-0.5 ml-2 bg-white">Branco - G715</span>
                 </div>
                 <div className="flex gap-2">
                     <div className="w-[50px] h-[50px] border border-blue-500 rounded p-1 cursor-pointer shadow-[0_0_3px_rgba(59,130,246,0.5)]">
                         <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=50&h=50" className="w-full h-full object-cover" alt="White"/>
                     </div>
                     <div className="w-[50px] h-[50px] border border-gray-300 rounded p-1 cursor-pointer hover:border-gray-400">
                         <img src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=50&h=50" className="w-full h-full object-cover grayscale" alt="Dark"/>
                     </div>
                 </div>
             </div>

             {/* Specs Table */}
             <div className="mt-6 text-[14px]">
                 <table className="w-full text-left" style={{ borderSpacing: "0 8px", borderCollapse: "separate" }}>
                     <tbody>
                         <tr>
                             <td className="w-1/3 text-[#0f1111] font-bold align-top">Marca</td>
                             <td className="w-2/3 text-[#444] align-top">LOGITECH G</td>
                         </tr>
                         <tr>
                             <td className="w-1/3 text-[#0f1111] font-bold align-top">Dispositivos compatíveis</td>
                             <td className="w-2/3 text-[#444] align-top">PC</td>
                         </tr>
                         <tr>
                             <td className="w-1/3 text-[#0f1111] font-bold align-top">Tecnologia de conectividade</td>
                             <td className="w-2/3 text-[#444] align-top">Bluetooth</td>
                         </tr>
                         <tr>
                             <td className="w-1/3 text-[#0f1111] font-bold align-top">Descrição do teclado</td>
                             <td className="w-2/3 text-[#444] align-top">Conexão em três modos</td>
                         </tr>
                         <tr>
                             <td className="w-1/3 text-[#0f1111] font-bold align-top">Usos recomendados</td>
                             <td className="w-2/3 text-[#444] align-top">Jogos</td>
                         </tr>
                     </tbody>
                 </table>
             </div>

             <hr className="my-5 border-gray-300" />

             {/* About this item */}
             <div>
                 <h2 className="font-bold text-[16px] mb-2">Sobre este item</h2>
                 <ul className="list-disc pl-5 space-y-1 text-[14px]">
                     <li>Design de tamanho tenkeyless (TKL) de 87 teclas para economizar espaço e proporcionar conforto.</li>
                     <li>Conectividade LIGHTSPEED sem fio de nível profissional ou Bluetooth, com duração de bateria de até 25 horas.</li>
                     <li>Iluminação RGB LIGHTSYNC personalizável com 16,8 milhões de cores por tecla com animações padrão divertidas G HUB.</li>
                     <li>Teclas mecânicas (Tactile) desenvolvidas especificamente para o desempenho em jogos, oferecendo sensação tátil suave e precisa.</li>
                     <li>Estojo superior removível com opção para customizar sua configuração de teclado (acessórios não inclusos no pacote padrão).</li>
                 </ul>
                 <div className="mt-3">
                     <a href="#" className="text-[#007185] hover:text-[#c60] hover:underline text-[14px] flex items-center">
                        <ChevronDown size={14} className="mr-1" />
                        Mostrar mais
                     </a>
                 </div>
             </div>

          </div>

          {/* Right Column: Buy Box */}
          <div className="w-[280px] shrink-0 space-y-4">
              
              {/* Main Box */}
              <div className="border border-gray-300 rounded-lg p-4">
                  <div className="flex items-start gap-1">
                      <span className="text-[12px] mt-1">R$</span>
                      <span className="text-[24px] font-bold leading-none">499</span>
                      <span className="text-[12px] mt-1">,90</span>
                  </div>
                  
                  <div className="mt-3 text-[14px] text-[#0f1111]">
                      Entrega <span className="font-bold">GRÁTIS: <span className="text-[#007185] font-bold hover:underline cursor-pointer">Sexta-feira, 3 de Maio</span></span> no primeiro pedido.
                  </div>
                  <div className="mt-2 text-[14px] text-[#0f1111]">
                      Ou entrega mais rápida: <span className="font-bold text-[#007185] hover:underline cursor-pointer">Amanhã, 25 de Abril</span>. Se pedir dentro de <span className="text-[#007600]">12 hrs 11 mins</span>
                  </div>

                  <div className="mt-3 flex items-start gap-1 text-[12px] text-[#007185] cursor-pointer hover:text-[#c60] hover:underline">
                      <MapPin size={16} className="text-[#0f1111]" />
                      <span>Enviar para Santarém 68000000</span>
                  </div>

                  <div className="mt-4 text-[#007600] text-[18px] font-bold">
                      Em estoque
                  </div>

                  {/* Quantity selector */}
                  <div className="mt-3 relative w-max mb-4">
                      <select className="appearance-none bg-[#f0f2f2] hover:bg-[#e3e6e6] border border-[#d5d9d9] rounded-md py-1.5 pl-3 pr-8 text-[13px] outline-none focus:ring-2 focus:ring-[#008296] focus:border-transparent cursor-pointer shadow-sm">
                          <option>Quantidade: 1</option>
                          <option>Quantidade: 2</option>
                          <option>Quantidade: 3</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-600" />
                  </div>

                  {/* Buttons */}
                  <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 rounded-full shadow-sm text-[13px] border border-[#fcd200] cursor-pointer mb-2">
                      Adicionar ao carrinho
                  </button>
                  <button className="w-full bg-[#ffa41c] hover:bg-[#fa8900] py-2 rounded-full shadow-sm text-[13px] border border-[#ff8f00] cursor-pointer mb-3">
                      Comprar agora
                  </button>

                  <div className="flex items-center gap-2 text-[14px] text-[#007185] hover:text-[#c60] hover:underline cursor-pointer mb-3">
                      <Lock size={14} className="text-[#999]" />
                      <span>Transação segura</span>
                  </div>

                  <div className="text-[12px] text-[#565959] space-y-1">
                      <div className="flex justify-between">
                          <span>Enviado por</span>
                          <span className="text-[#0f1111]">Amazon.com.br</span>
                      </div>
                      <div className="flex justify-between">
                          <span>Vendido por</span>
                          <span className="text-[#0f1111]">Amazon.com.br</span>
                      </div>
                      <div className="flex items-start justify-between">
                          <span>Devoluções</span>
                          <span className="text-[#007185] text-right max-w-[120px] hover:underline cursor-pointer">Elegível para Devolução, Reembolso ou Troca...</span>
                      </div>
                      <div className="flex justify-between">
                          <span>Pagamento</span>
                          <span className="text-[#007185] hover:underline cursor-pointer">Transação segura</span>
                      </div>
                  </div>

                  <hr className="my-3 border-gray-200" />

                  {/* Add protection */}
                  <div className="text-[14px]">
                      <div className="font-bold flex items-center justify-between mb-2">
                          Adicionar proteção <Info size={14} className="text-gray-400 cursor-pointer" />
                      </div>
                      <label className="flex items-start gap-2 cursor-pointer mb-1">
                          <input type="checkbox" className="mt-1 accent-blue-600" />
                          <span className="text-[#0f1111] leading-tight">
                              2 Anos Proteção contra Danos Acidentais <br/>
                              <span className="text-[#b12704] font-bold text-[12px]">R$ 72,00</span>
                          </span>
                      </label>
                      <label className="flex items-start gap-2 cursor-pointer">
                          <input type="checkbox" className="mt-1 accent-blue-600" />
                          <span className="text-[#0f1111] leading-tight">
                              Proteção Garantida Estendida de ... <br/>
                              <span className="text-[#b12704] font-bold text-[12px]">R$ 84,00</span>
                          </span>
                      </label>
                  </div>

                  <hr className="my-4 border-gray-200" />

                  <button className="w-full bg-[#f3f3f3] hover:bg-[#d4d4d4] py-1.5 rounded text-[13px] border border-gray-300 shadow-sm cursor-pointer font-medium mb-4">
                      Adicionar à Lista
                  </button>
              </div>

              {/* Other Sellers */}
              <div className="border border-gray-300 rounded p-4 text-[14px]">
                 <h3 className="font-bold mb-2">Outros vendedores na Amazon</h3>
                 
                 <div className="mb-3">
                     <div className="text-[#b12704] font-bold text-[15px]">R$ 510,00</div>
                     <div className="text-[12px] text-[#0f1111] mb-1">Frete <span className="font-bold">GRÁTIS</span>.</div>
                     <button className="bg-white border border-gray-300 shadow-sm rounded-full px-4 py-0.5 text-[12px] hover:bg-gray-50 flex-shrink-0 mb-1">
                         Adicionar ao carrinho
                     </button>
                     <div className="text-[12px] flex justify-between">
                         <span className="text-[#565959]">Vendido por:</span>
                         <span className="text-[#007185] hover:underline cursor-pointer">Pichau Informatica</span>
                     </div>
                 </div>
                 <hr className="border-gray-200 my-2" />
                 <div>
                     <div className="text-[#b12704] font-bold text-[15px]">R$ 549,99</div>
                     <div className="text-[12px] text-[#0f1111] mb-1">Frete <span className="font-bold">GRÁTIS</span>.</div>
                     <button className="bg-white border border-gray-300 shadow-sm rounded-full px-4 py-0.5 text-[12px] hover:bg-gray-50 flex-shrink-0 mb-1">
                         Adicionar ao carrinho
                     </button>
                     <div className="text-[12px] flex justify-between">
                         <span className="text-[#565959]">Vendido por:</span>
                         <span className="text-[#007185] hover:underline cursor-pointer">Kabum! Brasil</span>
                     </div>
                 </div>
              </div>

          </div>
      </div>

      <hr className="mt-8 border-gray-300" />

      {/* Sticky Tab Bar */}
      <div className="sticky top-0 bg-white z-40 border-b border-gray-300">
         <div className="max-w-[1500px] mx-auto px-5 overflow-x-auto flex whitespace-nowrap text-[14px]">
             {['topo', 'Sobre este produto', 'Semelhante', 'Da marca', 'Especificações', 'Perguntas', 'Avaliações'].map((tab, idx) => (
                <div key={idx} className={`p-3 cursor-pointer select-none border-b-[3px] ${idx === 1 ? 'border-amber-600 font-bold text-black' : 'border-transparent text-gray-600 hover:text-black hover:border-gray-400'}`}>
                    {tab}
                </div>
             ))}
         </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-5 mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 text-[14px]">
          
          <div className="md:col-span-8">
              {/* Product Description */}
              <h2 className="text-[#c60] font-bold text-[18px] mb-3">Descrição do produto</h2>
              <div className="text-gray-800 space-y-4">
                  <p>
                      Mergulhe no universo dos jogos com o Teclado Mecânico Gamer Sem Fio Logitech G715. Projetado com estética única e desempenho avançado da família Aurora Collection, ele oferece switches mecânicos Tactile que garantem cada pressionar de botão com precisão absoluta, tudo em um layout TKL (Tenkeyless) compacto que deixa mais espaço livre para o seu mouse e a sua movimentação no jogo.
                  </p>
                  <p>
                      Com conectividade LIGHTSPEED sem fio de última geração e opção de Bluetooth, você estará preparado para longas maratonas com até 25 horas de duração de bateria sob iluminação total, seja no PC ou em dispositivos móveis compatíveis. Expresse seu estilo com iluminação RGB LIGHTSYNC de 16 milhões de cores, ajustável via software G HUB. 
                  </p>
                  <p>
                      Apoio de pulso incrivelmente macio em formato de nuvem acompanha o produto, garantindo horas extras de conforto durante suas sessões.
                  </p>
              </div>

              {/* Characteristics and Specs */}
              <div className="mt-8">
                  <h2 className="text-black font-bold text-[18px] mb-4 pb-1 border-b border-gray-200">Características e Especificações</h2>
                  
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 mb-4 border-b border-gray-100 pb-4">
                      <div className="font-bold text-gray-700">Dimensões do produto</div>
                      <div className="text-gray-600">37 x 15,7 x 3,7 cm; 976 g</div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 mb-4 border-b border-gray-100 pb-4 bg-gray-50 p-2 -mx-2">
                      <div className="font-bold text-gray-700 pl-2">Pilhas ou baterias</div>
                      <div className="text-gray-600">1 Íon de lítio baterias ou pilhas necessárias (inclusas).</div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 mb-4 border-b border-gray-100 pb-4">
                      <div className="font-bold text-gray-700">Número do modelo</div>
                      <div className="text-gray-600">920-010464</div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 mb-4 border-b border-gray-100 pb-4 bg-gray-50 p-2 -mx-2">
                      <div className="font-bold text-gray-700 pl-2">Cor</div>
                      <div className="text-gray-600">Branco</div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 mb-4 pb-4">
                      <div className="font-bold text-gray-700">Fabricante</div>
                      <div className="text-gray-600">Logitech</div>
                  </div>
              </div>
          </div>

          <div className="md:col-span-4 pl-4 border-l border-gray-200">
             <div className="bg-white border shadow-sm border-gray-200 p-4 sticky top-[70px]">
                 <h3 className="font-bold text-[15px] mb-2 uppercase text-gray-500 tracking-wider">Compre junto com frequência</h3>
                 <div className="flex items-center gap-3 mt-4">
                     <div className="w-[80px] h-[80px] shrink-0 border border-gray-200 flex items-center justify-center p-1">
                        <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=80&h=80" className="object-cover max-w-full max-h-full" alt="Item 1"/>
                     </div>
                     <span className="text-gray-400 text-xl font-light">+</span>
                     <div className="w-[80px] h-[80px] shrink-0 border border-gray-200 flex items-center justify-center p-1 cursor-pointer hover:shadow">
                        <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=80&h=80" className="object-cover max-w-full max-h-full" alt="Item 2"/>
                     </div>
                 </div>
                 
                 <div className="font-bold text-[16px] mt-4 mb-2">Preço total: <span className="text-[#b12704]">R$ 889,80</span></div>
                 <button className="bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] w-full py-1.5 rounded-full shadow-sm border border-[#fcd200] font-medium text-[13px] hover:border-[#f2c200] cursor-pointer">
                    Adicionar os dois ao carrinho
                 </button>
             </div>
          </div>

      </div>

      <hr className="mt-12 border-gray-300" />

      {/* Customer Reviews Section */}
       <div className="max-w-[1500px] mx-auto px-5 mt-6 grid grid-cols-1 md:grid-cols-12 gap-10 text-[14px]">
          
          {/* Left Column: Review Summary */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
              <h2 className="font-bold text-[24px]">Avaliações de clientes</h2>
              <div className="flex items-center gap-3">
                  <div className="flex text-[#de7921]">
                     <Star size={20} fill="currentColor" />
                     <Star size={20} fill="currentColor" />
                     <Star size={20} fill="currentColor" />
                     <Star size={20} fill="currentColor" />
                     <StarHalf size={20} fill="currentColor" />
                  </div>
                  <span className="font-bold text-[18px]">4,8 de 5</span>
              </div>
              <div className="text-[14px] text-gray-500">10.370 avaliações globais</div>

              {/* Progress bars */}
              <div className="space-y-2 mt-4 text-[13px]">
                  {[
                    { stars: "5 estrela", pct: "87%" },
                    { stars: "4 estrela", pct: "8%" },
                    { stars: "3 estrela", pct: "2%" },
                    { stars: "2 estrela", pct: "1%" },
                    { stars: "1 estrela", pct: "2%" }
                  ].map((row, idx) => (
                      <div key={idx} className="flex items-center gap-3 group cursor-pointer text-[#007185] hover:text-[#c60] hover:underline">
                          <span className="w-16 whitespace-nowrap">{row.stars}</span>
                          <div className="flex-grow h-5 border border-gray-300 bg-gray-100 rounded-sm overflow-hidden box-border">
                              <div className="h-full bg-[#de7921]" style={{ width: row.pct }}></div>
                          </div>
                          <span className="w-10 text-right">{row.pct}</span>
                      </div>
                  ))}
              </div>

              <hr className="my-6 border-gray-300" />
              
              <h3 className="font-bold text-[18px]">Avalie este produto</h3>
              <p className="text-[14px]">Compartilhe seus pensamentos com outros clientes</p>
              <button className="w-full mt-4 bg-white hover:bg-gray-50 py-1.5 rounded-full shadow-sm text-[13px] border border-gray-300 cursor-pointer text-black border-collapse">
                  Escreva uma avaliação de cliente
              </button>
          </div>

          {/* Right Column: Individual Reviews */}
          <div className="md:col-span-8 lg:col-span-9">
              <h3 className="font-bold text-[18px] mb-4">Avaliações com imagens</h3>
              <div className="flex gap-2 overflow-x-auto pb-4">
                  {[1,2,3,4].map((i) => (
                      <img key={i} src={`https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=120&h=120`} className="w-[120px] h-[120px] object-cover cursor-pointer rounded" alt={`Review image ${i}`} />
                  ))}
              </div>
              <a href="#" className="text-[#007185] hover:text-[#c60] hover:underline text-[14px] font-medium block mb-8">
                  Ver todas as imagens
              </a>

              <h3 className="font-bold text-[18px] mb-4">Principais avaliações do Brasil</h3>
              
              {/* Individual Review */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          <Star size={16} fill="currentColor" />
                      </div>
                      <span className="font-medium text-[13px]">Cliente Amazon</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                      <div className="flex text-[#de7921]">
                         <Star size={14} fill="currentColor" />
                         <Star size={14} fill="currentColor" />
                         <Star size={14} fill="currentColor" />
                         <Star size={14} fill="currentColor" />
                         <Star size={14} fill="currentColor" />
                      </div>
                      <span className="font-bold text-[13px] ml-1">Teclado Excepcional para Jogos e Digitação</span>
                  </div>
                  <div className="text-[13px] text-gray-500 mb-2">Avaliado no Brasil em 12 de Abril de 2024</div>
                  <div className="text-[12px] font-bold text-[#c60] mb-2">Compra verificada</div>
                  
                  <div className="text-[14px] text-gray-800 space-y-2">
                     <p>Comprei o G715 há algumas semanas e só tenho elogios. O teclado responde instantaneamente, e o conforto do apoio de pulso em formato de nuvem é sensacional. Acabei usando-o tanto no setup de PC para jogar, quanto conectado via Bluetooth no meu tablet para trabalhar. A transição é rápida e não há atrasos notáveis durante o game.</p>
                     <p>A iluminação é linda. O RGB é muito difuso, parecendo uma aura suave por baixo das teclas. Para quem quer fugir do tradicional preto agressivo gamer, esse estilo é perfeito. Sobre a bateria, mantendo o RGB no médio, dura em torno de 20 a 25 horas mesmo, como prometido na caixa.</p>
                  </div>
                  <div className="mt-4 flex gap-4 text-[13px] text-gray-600">
                      <button className="border border-gray-300 rounded shadow-sm px-3 py-1 bg-white hover:bg-gray-50">Útil</button>
                      <span className="pt-1 border-l border-gray-300 pl-4 cursor-pointer hover:underline">Informar abuso</span>
                  </div>
              </div>

              {/* Individual Review 2 */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          <Star size={16} fill="currentColor" />
                      </div>
                      <span className="font-medium text-[13px]">Felipe S.</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                      <div className="flex text-[#de7921]">
                         <Star size={14} fill="currentColor" />
                         <Star size={14} fill="currentColor" />
                         <Star size={14} fill="currentColor" />
                         <Star size={14} fill="currentColor" />
                         <Star size={14} fill="currentColor" className="text-gray-300" />
                      </div>
                      <span className="font-bold text-[13px] ml-1">Quase perfeito, o software poderia melhorar.</span>
                  </div>
                  <div className="text-[13px] text-gray-500 mb-2">Avaliado no Brasil em 3 de Janeiro de 2024</div>
                  <div className="text-[12px] font-bold text-[#c60] mb-2">Compra verificada</div>
                  
                  <div className="text-[14px] text-gray-800 space-y-2">
                     <p>Fisicamente o teclado é impecável. A sensação dos switches tácteis é excelente, proporcionando ótimo feedback sem o barulho ensurdecedor de teclas clicky. Entretanto, configurar a iluminação e atalhos pelo G HUB ainda é uma experiência meio travada no macOS. De resto, produto sensacional.</p>
                  </div>
                  <div className="mt-4 flex gap-4 text-[13px] text-gray-600">
                      <button className="border border-gray-300 rounded shadow-sm px-3 py-1 bg-white hover:bg-gray-50">Útil (2 pessoas acharam isso útil)</button>
                      <span className="pt-1 border-l border-gray-300 pl-4 cursor-pointer hover:underline">Informar abuso</span>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
}
