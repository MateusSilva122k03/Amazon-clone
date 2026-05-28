import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="relative mx-auto max-w-[1500px]">
      {/* HERO CAROUSEL */}
      <div className="relative h-[600px] w-full" style={{
          background: 'linear-gradient(to right, #f86f21 0%, #d83b0f 50%, #1e1e1e 50.1%, #1e1e1e 100%)'
      }}>
          {/* Dark background side representation */}
          <div className="absolute right-0 top-0 w-1/2 h-[300px] bg-[#222]">
              <div className="w-full h-full flex flex-wrap opacity-60">
                  <div className="w-1/3 h-1/2 border border-[#444] bg-[#555] flex items-center justify-center text-white/50 text-2xl font-bold font-serif">NETFLIX</div>
                  <div className="w-1/3 h-1/2 border border-[#444] bg-[#333] flex items-center justify-center text-white/50 text-xl font-bold">sr. & sra. smith</div>
                  <div className="w-1/3 h-1/2 border border-[#444] bg-[#d61e38] flex items-center justify-center text-white/80 font-bold text-xl">globo<br/>play</div>
                  <div className="w-1/3 h-1/2 border border-[#444] bg-[#423121] flex items-center justify-center text-white/50 text-2xl font-bold font-serif">Fallout</div>
                  <div className="w-1/3 h-1/2 border border-[#444] bg-[#00A8E1] flex flex-col items-center justify-center text-white font-bold"><span className="text-xl">prime video</span></div>
                  <div className="w-1/3 h-1/2 border border-[#444] bg-[#111] flex items-center justify-center text-white/50 text-3xl font-black tracking-tighter">THE BOYS</div>
              </div>
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-start justify-center pt-[60px] z-0 px-20">
               {/* Left copy */}
               <div className="w-1/2 flex flex-col items-center pl-10 pt-4">
                  <h1 className="text-white text-[54px] font-bold text-center leading-[1.1] tracking-tight">Fire TV Stick<br/>com Alexa</h1>
                  <div className="mt-6 bg-[#232f3e] rounded-full px-6 py-2 pb-2.5 text-white font-bold flex items-center border border-gray-600 shadow-xl cursor-pointer hover:bg-black text-[20px]">
                      Frete GRÁTIS Prime 
                      <div className="ml-2 w-8 h-6 bg-[#00A8E1] relative rounded flex items-center justify-center border border-cyan-300 shadow overflow-hidden group">
                         <div className="absolute inset-0 border-t border-white/40 rounded"></div>
                      </div>
                  </div>
               </div>

               {/* Middle stick images */}
               <div className="w-1/2 flex items-start -ml-20 z-10 relative">
                   <div className="w-[110px] h-[340px] bg-gradient-to-t from-gray-800 to-gray-700 rounded-md mx-6 shadow-[20px_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden border border-gray-600">
                      {/* Remote top button */}
                      <div className="absolute top-6 w-full flex justify-center"><div className="w-[32px] h-[32px] rounded-full bg-[#111] border border-gray-900 shadow-inner flex items-center justify-center"><div className="w-[20px] h-[20px] rounded-full bg-blue-500/80 blur-[2px]"></div></div></div>
                      <div className="absolute top-20 w-full flex justify-center"><div className="w-[45px] h-[45px] rounded-full border-[3px] border-[#333] shadow-md"></div></div>
                      
                      <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-3">
                         <div className="w-16 h-8 bg-black rounded shadow text-[9px] text-[#00A8E1] flex items-center justify-center font-bold px-1 text-center leading-tight border border-gray-800">prime<br/>video</div>
                         <div className="w-16 h-8 bg-black rounded shadow text-[10px] text-red-500 flex items-center justify-center font-bold px-1 text-center border border-gray-800">NETFLIX</div>
                         <div className="font-bold text-gray-500 text-xs mt-2 fire-tv-logo">fire tv</div>
                      </div>
                   </div>
                   <div className="w-[50px] h-[190px] bg-black shadow-[15px_15px_40px_rgba(0,0,0,0.5)] relative flex flex-col items-center text-white text-xs mt-12 pr-1 border border-gray-800 rounded-sm rounded-l-none border-l-0">
                       <div className="h-full border-l-[3px] border-gray-700 absolute left-0 w-1 blur-[1px]"></div>
                       <div className="mt-auto mb-6 opacity-30 text-[10px] tracking-widest rotate-90 w-max whitespace-nowrap ml-2">amazon</div>
                   </div>
               </div>
          </div>

          {/* Arrows */}
          <button className="absolute left-[30px] top-[100px] bg-transparent border-2 border-transparent text-white p-2 h-[80px] w-[50px] hover:border-white focus:outline-none rounded-sm border-opacity-50">
              <ChevronLeft size={48} strokeWidth={1} />
          </button>
          <button className="absolute right-[30px] top-[100px] bg-transparent border-2 border-transparent text-white p-2 h-[80px] w-[50px] hover:border-white focus:outline-none rounded-sm border-opacity-50 z-30">
              <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Bottom gradient fade for background transition - critical for Amazon layout */}
          <div className="absolute top-[300px] h-[300px] w-full bg-gradient-to-t from-[#e3e6e6] to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* OVERLAPPING CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-5 z-20 relative -mt-[325px] pb-12">
          
          {/* Card 1 */}
          <div className="bg-white p-5 flex flex-col relative z-20 cursor-pointer group pb-[18px]">
              <h2 className="text-[21px] font-bold mb-3 text-[#0f1111] leading-[1.3] pr-2">Mais amados na Book Friday</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 flex-grow mb-[2px]">
                  <div className="flex flex-col">
                      <div className="h-[140px] bg-gray-100 flex items-center justify-center mb-1 border border-gray-100 overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200&h=250" className="object-cover h-full w-full" alt="Nunca Minta"/>
                      </div>
                      <span className="text-[12px] leading-tight text-[#0f1111] line-clamp-1">Nunca Minta</span>
                  </div>
                  <div className="flex flex-col">
                      <div className="h-[140px] bg-gray-100 flex items-center justify-center mb-1 border border-gray-100 overflow-hidden relative">
                         <div className="absolute inset-0 bg-green-800 flex items-center justify-center text-white text-[10px] text-center font-bold px-2 uppercase shadow-inner opacity-90 backdrop-blur-sm">A<br/>Biblioteca<br/>Da<br/>Meia-Noite</div>
                         <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=200&h=250" className="object-cover h-full w-full mix-blend-overlay" alt="A Biblioteca da Meia..."/>
                      </div>
                      <span className="text-[12px] leading-tight text-[#0f1111] line-clamp-1">A Biblioteca da Meia...</span>
                  </div>
                  <div className="flex flex-col">
                      <div className="h-[140px] bg-gray-100 flex items-center justify-center mb-1 border border-gray-100 overflow-hidden relative">
                         <div className="absolute inset-0 bg-yellow-700 flex items-end justify-center text-white text-[10px] text-center font-bold p-2 uppercase shadow-inner opacity-90 mix-blend-multiply">A HORA<br/>DA<br/>ESTRELA</div>
                         <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=200&h=250" className="object-cover h-full w-full grayscale contrast-150" alt="A Hora da Estrela"/>
                      </div>
                      <span className="text-[12px] leading-tight text-[#0f1111] line-clamp-1">A Hora da Estrela</span>
                  </div>
                  <div className="flex flex-col">
                      <div className="h-[140px] bg-gray-100 flex items-center justify-center mb-1 border border-gray-100 overflow-hidden relative">
                         <div className="absolute inset-0 bg-orange-900 flex items-center justify-center text-yellow-500 text-[10px] text-center font-serif p-2 shadow-inner opacity-90 border-[3px] m-1 border-yellow-600/50 mix-blend-color-burn">Confissões<br/>de<br/>Santo<br/>Agostinho</div>
                         <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=200&h=250" className="object-cover h-full w-full" alt="Confissões de Sant..."/>
                      </div>
                      <span className="text-[12px] leading-tight text-[#0f1111] line-clamp-1">Confissões de Sant...</span>
                  </div>
              </div>
              <a href="#" className="text-[#007185] hover:text-[#c60] hover:underline text-[13px] mt-2 mb-0">Ver todas as ofertas em li...</a>
          </div>

          {/* Card 2 */}
          <Link to="/product/1" className="bg-white p-5 flex flex-col relative z-20 cursor-pointer group pb-[18px] hover:shadow-lg transition-shadow">
              <h2 className="text-[21px] font-bold mb-3 text-[#0f1111] leading-[1.3] group-hover:text-[#c60]">Continue comprando ofertas</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 flex-grow mb-[2px]">
                  <div className="flex flex-col">
                      <div className="h-[140px] flex items-center justify-center mb-1 overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=200&h=200" className="object-cover h-full w-full" alt="KB 1"/>
                      </div>
                  </div>
                  <div className="flex flex-col">
                      <div className="h-[140px] flex items-center justify-center mb-1 overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=200&h=200" className="object-cover h-full w-full" alt="KB 2"/>
                      </div>
                  </div>
                  <div className="flex flex-col">
                      <div className="h-[140px] flex items-center justify-center mb-1 overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1621360058913-c9eaddb200b8?auto=format&fit=crop&q=80&w=200&h=200" className="object-cover h-full w-full" alt="KB 3"/>
                      </div>
                  </div>
                  <div className="flex flex-col">
                      <div className="h-[140px] flex items-center justify-center mb-1 overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=200&h=200" className="object-cover h-full w-full" alt="KB 4"/>
                      </div>
                  </div>
              </div>
              <span className="text-[#007185] hover:text-[#c60] hover:underline text-[13px] mt-2 mb-0">Veja o seu histórico...</span>
          </Link>

          {/* Card 3 */}
          <div className="bg-white p-5 flex flex-col relative z-20 cursor-pointer group pb-[18px]">
              <h2 className="text-[21px] font-bold mb-3 text-[#0f1111] leading-[1.3]">Descubra Álbuns e HQs</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 flex-grow mb-[2px]">
                  <div className="flex flex-col h-[140px] items-center justify-center p-2 border border-transparent hover:border-gray-100 transition-colors">
                      <div className="relative w-[100px] h-[100px]">
                          <div className="absolute inset-0 bg-blue-100 rotate-12 shadow-sm rounded-sm"></div>
                          <div className="absolute inset-0 bg-white border border-gray-200 shadow rounded-sm flex items-center justify-center"><span className="text-[8px] font-black tracking-tighter w-full text-center text-blue-900 border-b border-t py-1">2026</span></div>
                          <div className="absolute top-1 left-1 text-[8px]">FIFA</div>
                      </div>
                  </div>
                  <div className="flex flex-col h-[140px] items-center justify-center p-2 border border-transparent hover:border-gray-100 transition-colors">
                       <div className="relative w-[80px] h-[110px] bg-yellow-400 border border-gray-300 shadow rounded flex flex-col items-center">
                          <div className="w-full bg-red-600 h-[10px]"></div>
                          <span className="font-extrabold text-[12px] mt-2 tracking-tighter">2026</span>
                          <div className="rounded-full bg-white w-6 h-6 mt-1 flex items-center justify-center opacity-50"><div className="w-4 h-4 rounded-full border border-black"></div></div>
                       </div>
                  </div>
                  <div className="flex flex-col h-[140px] items-center justify-center p-2 border border-transparent hover:border-gray-100 transition-colors">
                      <div className="relative w-[90px] h-[110px] bg-white border border-gray-300 shadow-md rounded flex items-center justify-center overflow-hidden">
                         <div className="absolute inset-0 flex">
                            <div className="w-1/3 bg-green-500 h-full skew-x-12 -ml-2"></div>
                            <div className="w-1/3 bg-yellow-400 h-full skew-x-12"></div>
                            <div className="w-1/3 bg-blue-500 h-full skew-x-12 mr-2"></div>
                         </div>
                         <div className="bg-white rounded px-2 py-0.5 z-10 shadow font-bold text-[8px]">FIFA WORLD CUP</div>
                      </div>
                  </div>
                  <div className="flex flex-col h-[140px] items-center justify-center p-2 border border-transparent hover:border-gray-100 transition-colors">
                      <div className="relative w-[80px] h-[110px] bg-gradient-to-br from-purple-200 to-pink-200 border border-gray-300 shadow rounded flex flex-col items-center justify-center p-2 text-center text-[10px] font-bold text-purple-900">
                         <span className="text-[8px] opacity-70">FIFA</span>
                         <span className="text-[14px]">2026</span>
                         <span>ALBUM</span>
                      </div>
                  </div>
              </div>
              <a href="#" className="text-[#007185] hover:text-[#c60] hover:underline text-[13px] mt-2 mb-0">Comprar mais</a>
          </div>

          {/* Right Column Cards */}
          <div className="flex flex-col gap-5 z-20">
              {/* Login Card */}
              <div className="bg-white p-5 flex flex-col h-[140px] shadow">
                  <h2 className="text-[21px] font-bold mb-4 leading-[1.3] text-[#0f1111]">Acesse uma conta para ter a melhor experiência</h2>
                  <button className="bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] w-full py-1.5 rounded-lg shadow-sm border border-[#fcd200] font-medium text-[13px] hover:border-[#f2c200] cursor-pointer">
                      Fazer login de forma segura
                  </button>
              </div>
              
              {/* Ad Card */}
              <div className="bg-white flex flex-col p-4 shadow h-[270px] overflow-hidden justify-center relative cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=300" className="object-cover w-[110%] h-[110%] absolute inset-0 opacity-80" alt="Ad"/>
                  
                  {/* Simulated Text overlay for the Ad to increase fidelity */}
                  <div className="absolute inset-x-0 bottom-4 text-center pb-2 z-10">
                     <p className="text-white font-serif text-[10px] uppercase tracking-widest drop-shadow-md mb-1 bg-black/20 w-max mx-auto px-2">L'ORÉAL PARIS</p>
                     <p className="text-white text-[12px] font-bold uppercase tracking-wider drop-shadow-md pb-0.5" style={{textShadow: "1px 1px 2px rgba(0,0,0,0.8)"}}>ELSEVE</p>
                     <p className="text-white text-[14px] font-bold uppercase drop-shadow-md" style={{textShadow: "1px 1px 2px rgba(0,0,0,0.8)"}}>COLLAGEN LIFTER</p>
                  </div>

                  <div className="absolute bottom-1 right-2 text-[11px] text-white/80 font-medium">Patrocinado</div>
              </div>
          </div>

      </div>
    </main>
  );
}
