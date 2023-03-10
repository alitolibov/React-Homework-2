import { Outlet } from "react-router-dom";
import Dropdown from "../components/Dropdown";

import { AiOutlineSearch } from 'react-icons/ai';

const Layout = () => {
   return ( 
      <>
      <div className="w-[94.3%] m-auto my-[24px] md:w-[96.3%]">
    <div className="md:flex md:items-center md:justify-between md:w-full">
    <div className="w-[132px] bg-no-repeat h-[70px] bg-contain top-logo sm:m-auto mb-[30px] md:mb-[0px] md:h-[50px] md:my-[0px] w-[95px] md:mx-[0px] lg:w-[132px] lg:h-[60px] "></div>
    <div className="h-[50px] px-[12px] bg-[#00AC73] rounded-[15px] mb-[24px] md:my-[0px] md:w-[300px] lg:wlex flex-col gap-[24px]-[400px]">
        <form name="form" className="w-full flex items-center gap-[24px] h-full">
            <input type="text" placeholder="Введите название товара или заболевания" name="search" className="bg-transparent w-full outline-none text-[#ffffff] text-[12px] placeholder:text-[#ffffff]"/>
            <button>
              <AiOutlineSearch size={24} className="invert-[100%] md:w-[20px] h-[20px]"/>
            </button>
        </form>
      </div>
    <div className="flex justify-between h-[50px] mb-[60px] w-full md:justify-start md:hidden">
        <Dropdown/>
        <div className="h-full flex items-center bg-[#00AC73] rounded-[15px] px-[21px] ">
            <p className="text-[#ffffff]">Войти/Регистрация</p>
        </div>

    </div>
      <div className="hidden md:block"><Dropdown/></div>
        <div className="h-[50px] hidden items-center bg-[#00AC73] rounded-[15px] px-[21px] md:flex">
            <p className="text-[#ffffff]">Войти/Регистрация</p>
        </div>
    </div>
</div>
    <main>
      <Outlet/>
    </main>
    <div className="bg-[#00AC73]">
    <div className="w-[94.3%] m-auto py-[24px] flex flex-col gap-[24px] lg:flex-row items-center">
        <div className="flex flex-col gap-[24px] lg:gap-[14px]">
        <div className="w-[196px] h-[70px] bg-contain bgfoot m-auto lg:my-[0px]"></div>
        <p className="text-[20px] text-[#ffffff] leading-[150%] lg:text-[17px]">Серви поддерживает вас и помогает найти лекарства по выгодным ценам и с удобной круглосуточной доставкой почти в любую точку страны. Будьте здоровы с нами!</p>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-[24px] w-[196px] lg:gap-[18px]">
            <p className="text-[24px] font-bold text-[#ffffff]">О компании</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Контакты</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Доставка</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Пользовательское соглашение</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Стать партнёром</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Стать курьером</p>
          </div>
          <div className="flex flex-col gap-[24px] w-[196px] lg:gap-[18px]">
            <p className="text-[24px] font-bold text-[#ffffff]">Помощь</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Часто задаваемые вопросы</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Как заказать</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Обратная связь</p>
            <p className="font-medium text-[#ffffff] cursor-pointer">Правила для оформления отзывов И комментариев</p>
          </div>
        </div>
        <div className="flex flex-col gap-[22px]">
        <p className="font-medium text-[#ffffff] text-center">Мы в социальных сетях</p>
        <div className="imges w-[196px] h-[32px] bg-contain m-auto bg-no-repeat"></div>
        <p className="font-semibold text-[#ffffff] text-[18px] text-center">+998 71 200-00-00</p>
        </div>
    </div>
</div>
      </>
    );
}
 
export default Layout;