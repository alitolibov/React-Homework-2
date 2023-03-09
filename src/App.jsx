import Dropdown from "./components/Dropdown";
import Item from "./components/Item";



function App() {

    return (
    <>
    <div className="w-[94.3%] m-auto my-[24px] md:w-[96.3%]">
    <div className="w-[132px] h-[70px] bg-contain top-logo m-auto mb-[30px] md:hidden"></div>
    <div
        className="h-[50px] w-full flex justify-between items-center px-[12px] bg-[#00AC73] rounded-[15px] mb-[24px] md:hidden">
        <p className="text-[12px] text-[#ffffff]">Введите название товара или заболевания</p>
        <div className="search w-[20px] h-[20px]"></div>
    </div>
    <div className="flex justify-between h-[50px] mb-[60px] w-full md:hidden">
        <Dropdown/>
        <div className="h-full flex items-center bg-[#00AC73] rounded-[15px] px-[21px] md:hidden">
            <p className="text-[#ffffff]">Войти/Регистрация</p>
        </div>

    </div>
    <div className="hidden md:flex gap-[10px]">
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
    </div>
    <div
        className="h-[300px] bag relative bg-no-repeat overflow-hidden rounded-[30px] bg-cover">
        <div
            className="absolute w-full h-full inset-0 bg-[#00AC7340] flex flex-col items-center py-[24px] gap-[24px]">
            <p
                className="w-[325px] text-[32px] text-center leading-[39px] text-[#ffffff] font-semibold">ZAK Pharmacy ваш здоровый выбор</p>
            <p className="w-[325px] text-[24px] text-center text-[#ffffff]">Найти лекарства стало очень просто</p>
            <button
                className="h-[56px] w-[196px] bg-[#00AC73] text-[#ffffff] rounded-[15px] cursor-pointer">Начать</button>
        </div>
    </div>
    <p className="text-[32px] font-bold text-center mt-[50px] mb-[6px]">Популярные товары</p>
</div>
<div className="bg-[#f2f2f2]">
    <div className="w-[94.3%] m-auto py-[50px] bg-[#f2f2f2]">
        <div className="sm:w-[95%] grid grid-cols-2 m-auto gap-[12px] md:hidden">
            <Item/>
            <Item/>
        </div> 
        <div className="sm:w-[95%] hidden grid-cols-3 m-auto gap-[12px] md:grid">
            <Item/>
            <Item/>
            <Item/>
        </div>
    </div>
</div>
<div className="w-[94.3%] m-auto mt-[30px] mb-[50px]">
    <button
        className="py-[19px] px-[54px] m-auto mb-[50px] text-[#ffffff] block bg-[#00AC73] rounded-[15px] cursor-pointer">Подробнее</button>
    <p className="text-[32px] font-bold text-center mt-[50px] mb-[30px]">Часто покупают</p>
    <div className="w-[95%] grid grid-cols-2 m-auto mb-[30px] gap-[12px] md:hidden">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </div>
    <div className="w-[95%] hidden grid-cols-3 m-auto mb-[30px] gap-[12px] md:grid">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </div>
    <button
        className="py-[19px] px-[54px] m-auto mb-[50px] text-[#ffffff] block bg-[#00AC73] rounded-[15px] cursor-pointer">Подробнее</button>
    <p className="text-[32px] font-bold text-center mt-[50px] mb-[30px]">О нас</p>
    <div className="bigbg w-full h-[404px] bg-contain mb-[30px] bg-no-repeat md:m-auto w-[404px]"></div>
    <p className="text-[24px] leading-[25px] mb-[24px] md:mt-[30px]">Наши товары делают жизнь
        комфортной и безопасной. Высокий уровень сервиса и понимания к каждому
        покупателю.</p>
    <div className="flex flex-col gap-[16px] mb-[50px]">
        <div className="flex flex-col gap-[8px]">
            <p>01. Большой ассортимент</p>
            <p className="text-[14px] text-[#7E7E7E]">Для ванной комнаты с различным покрытием</p>
        </div>
        <div className="flex flex-col gap-[8px]">
            <p>02. Доступные цены</p>
            <p className="text-[14px] text-[#7E7E7E]">Сантехника под любой запрос</p>
        </div>
        <div className="flex flex-col gap-[8px]">
            <p>03. Высокий уровень сервиса</p>
            <p className="text-[14px] text-[#7E7E7E]">Решаем неудовлетворенные потребности
                покупателей, ценим клиентов как деловых партнеров</p>
        </div>
        <div className="flex flex-col gap-[8px]">
            <p>04. Круглосуточная доставка</p>
            <p className="text-[14px] text-[#7E7E7E]">Предоставляем круглосуточную доставку по всему Узбекистану</p>
        </div>
    </div>
    <div
        className="h-[438px] bg-[#00504D] rounded-[30px] py-[24px] px-[33px] flex flex-col md:hidden">
        <p className="text-[#ffffff] text-[24px] leading-[29px] text-center">Пользуйтесь нашим приложением для большего удобства</p>
        <div className="h-[303px] flex items-center justify-center">
            <p className="text-[#ffffff] text-[24px]">Фото</p>
        </div>
    </div>
    <div className="appbg w-full h-[220px] bg-contain bg-no-repeat hidden md:block"></div>
</div>
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
};

export default App;
