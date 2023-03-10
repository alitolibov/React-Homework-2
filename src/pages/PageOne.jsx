import Item from "../components/Item";

const PageOne = () => {
   return ( 
   <>
    <div className="w-[94.3%] m-auto my-[24px] md:w-[96.3%]">
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
    </div>
    <p className="text-[32px] font-bold text-center mt-[50px] mb-[6px]">Популярные товары</p>
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
    <div className="bigbg w-full h-[404px] bg-contain mb-[30px] bg-no-repeat md:m-auto md:w-[404px]"></div>
    <p className="text-[24px] leading-[25px] mb-[24px] md:mt-[30px]">Наши товары делают жизнь
        комфортной и безопасной. Высокий уровень сервиса и понимание к каждому
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
    <div className="appbg w-[738px] h-[220px] m-auto bg-contain bg-no-repeat hidden md:block"></div>
</div>
   </>
   );
}
 
export default PageOne;