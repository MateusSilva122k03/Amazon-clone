import { MapPin, Search, ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      {/* HEADER */}
      <header className="bg-[#131921] h-[60px] flex items-center px-4 justify-between text-white text-sm">
        {/* Left Side: Logo & Location */}
        <div className="flex items-center gap-4 h-full py-2">
          <Link to="/" className="flex flex-col border border-transparent hover:border-white rounded-sm px-2 py-1 cursor-pointer h-full justify-center">
             <div className="flex items-baseline mt-1">
                <span className="font-bold text-2xl tracking-tighter leading-none">amazon</span>
                <span className="text-sm font-medium ml-[2px]">.com.br</span>
             </div>
          </Link>
          
          <div className="flex items-end border border-transparent hover:border-white rounded-sm px-2 py-1 cursor-pointer h-full">
            <MapPin className="mb-1 mr-1" size={18} />
            <div className="flex flex-col leading-tight pb-[2px]">
              <span className="text-[#cccccc] text-[12px]">A entrega será feita em Santarém...</span>
              <span className="font-bold text-[14px]">Atualizar CEP</span>
            </div>
          </div>
        </div>

        {/* Middle: Search */}
        <div className="flex-grow max-w-[800px] h-[40px] flex mx-4 rounded overflow-hidden focus-within:ring-[3px] focus-within:ring-[#f90] border-transparent border focus-within:border-transparent">
          <button className="bg-[#f3f3f3] hover:bg-[#d4d4d4] text-[#555] px-3 font-medium text-xs flex items-center border-r border-[#cdcdcd] outline-none h-full focus:ring-2 focus:ring-[#f90] focus:z-10 rounded-l cursor-pointer">
            Todos <ChevronDown size={14} className="ml-1 text-[#555]" />
          </button>
          <input 
            type="text" 
            placeholder="Pesquisar Amazon.com.br"
            className="flex-grow h-full px-3 text-[#0f1111] outline-none w-full border-none"
          />
          <button className="bg-[#febd69] hover:bg-[#f3a847] w-[45px] h-full flex items-center justify-center outline-none cursor-pointer rounded-r">
            <Search color="#333" size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Right Side: Account, Returns, Cart */}
        <div className="flex items-center gap-1 h-full py-2">
          <div className="flex flex-col border border-transparent hover:border-white rounded-sm px-2 py-1 cursor-pointer leading-tight h-full justify-center">
            <span className="text-[12px]">Olá, faça seu login</span>
            <span className="font-bold text-[14px] flex items-center">Contas e Listas <ChevronDown size={12} className="ml-1 text-[#ccc]" /></span>
          </div>
          <div className="flex flex-col border border-transparent hover:border-white rounded-sm px-2 py-1 cursor-pointer leading-tight h-full justify-center">
            <span className="text-[12px]">Devoluções</span>
            <span className="font-bold text-[14px]">e Pedidos</span>
          </div>
          <div className="flex items-end border border-transparent hover:border-white rounded-sm px-2 pb-[8px] pt-2 cursor-pointer relative h-full">
            <div className="relative flex items-center">
               <span className="absolute -top-3 left-[14px] text-[#f08804] font-bold text-[16px]">0</span>
               <ShoppingCart size={32} />
            </div>
            <span className="font-bold text-[14px] mt-2 h-full flex items-end">Carrinho</span>
          </div>
        </div>
      </header>

      {/* SUB-HEADER */}
      <nav className="bg-[#232f3e] h-[39px] flex items-center justify-between px-4 text-white text-[14px] font-medium">
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 border border-transparent hover:border-white rounded-sm p-1 cursor-pointer">
            <Menu size={20} />
            <span className="font-bold">Todos</span>
          </div>
          <a href="#" className="border border-transparent hover:border-white rounded-sm px-2 py-1.5 cursor-pointer">Venda na Amazon</a>
          <a href="#" className="border border-transparent hover:border-white rounded-sm px-2 py-1.5 cursor-pointer">Ofertas do Dia</a>
          <a href="#" className="border border-transparent hover:border-white rounded-sm px-2 py-1.5 cursor-pointer">Mais Vendidos</a>
        </div>
        <div className="tracking-wide font-bold hover:underline cursor-pointer">
          Aproveite as ofertas da Book Friday
        </div>
      </nav>
    </>
  );
}
