import { Outlet } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import SearchAppBar from "../components/SearchAppBar";

const Layout = () => {
   return ( 
      <>
      <div className="w-[94.3%] m-auto my-[24px] md:w-[96.3%]">
    <div className="">
    <div className="w-[132px] h-[70px] bg-contain top-logo m-auto mb-[30px] md:hidden"></div>
    {/* <div
        className="h-[50px] w-full flex justify-between items-center px-[12px] bg-[#00AC73] rounded-[15px] mb-[24px] md:hidden">
        <p className="text-[12px] text-[#ffffff]">Введите название товара или заболевания</p>
        <div className="search w-[20px] h-[20px]"></div>
    </div> */}
    <SearchAppBar/>
    <div className="flex justify-between h-[50px] mb-[60px] w-full md:hidden">
        <Dropdown/>
        <div className="h-full flex items-center bg-[#00AC73] rounded-[15px] px-[21px] md:hidden">
            <p className="text-[#ffffff]">Войти/Регистрация</p>
        </div>

    </div>
    </div>
    {/* <div className="hidden md:flex gap-[10px]">
    <div className="w-[122px] h-[65px] bg-contain top-logo m-auto mb-[0px] bg-no-repeat"></div>
    <div
        className="h-[50px] w-full flex justify-between items-center px-[12px] bg-[#00AC73] rounded-[15px] mb-[24px] md:mb-[0px] gap-[10px] h-[48px]">
        <p className="text-[12px] text-[#ffffff]">Введите название товара или заболевания</p>
        <div className="search w-[20px] h-[20px]"></div>
    </div>
    <div
            className="sm:h-[48px] hidden gap-[8px] bg-[#00AC73] rounded-[15px] px-[12px] md:flex items-center">
            <div className="rus bg-contain w-[22px] h-[22px]"></div>
            <div className="bottomIcon w-[20px] h-[20px]"></div>
        </div>
        <div className="sm:h-[48px] hidden bg-[#00AC73] rounded-[15px] px-[18px] md:flex items-center">
            <p className="text-[#ffffff] text-[15px]">Войти/Регистрация</p>
        </div>
    </div> */}
    
</div>
    <main>
      <Outlet/>
    </main>
    <div className="bg-[#00AC73]">
    <div className="w-[94.3%] m-auto py-[24px] flex flex-col gap-[24px]">
        <div className="w-[196px] h-[70px] bg-contain bgfoot m-auto"></div>
        <p className="text-[20px] text-[#ffffff] leading-[150%]">Серви поддерживает вас и помогает найти лекарства по выгодным ценам и с удобной круглосуточной доставкой почти в любую точку страны. Будьте здоровы с нами!</p>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-[24px] w-[196px]">
            <p className="text-[24px] font-bold text-[#ffffff]">О компании</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Контакты</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Доставка</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Пользовательское соглашение</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Стать партнёром</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Стать курьером</p>
          </div>
          <div className="flex flex-col gap-[24px] w-[196px]">
            <p className="text-[24px] font-bold text-[#ffffff]">Помощь</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Часто задаваемые вопросы</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Как заказать</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Обратная связь</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Правила для оформления отзывов И комментариев</p>
          </div>
        </div>
        <p className="font-medium text-[#ffffff] text-center">Мы в социальных сетях</p>
        <div className="imges w-[196px] h-[32px] bg-contain m-auto"></div>
        <p className="font-semibold text-[#ffffff] text-[18px] text-center">+998 71 200-00-00</p>
    </div>
</div>
      </>
    );
}
 
export default Layout;