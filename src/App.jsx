

function App() {

    return (
    <div className="w-[94.3%] m-auto my-[24px]">
        <div className="w-[132px] h-[70px] bg-contain top-logo m-auto mb-[30px]"></div>
        <div className="h-[50px] flex justify-between items-center px-[16px] bg-[#00AC73] rounded-[15px] mb-[24px]">
          <p className="text-[12px] text-[#ffffff]">Введите название товара или заболевания</p>
          <div className="search w-[24px] h-[24px]"></div>
        </div>
        <div className="flex justify-between h-[50px] mb-[60px]">
          <div className="h-full flex items-center gap-[10px] bg-[#00AC73] rounded-[15px] px-[13px]">
            <div className="rus bg-contain w-[24px] h-[24px]"></div>
            <div className="bottomIcon w-[24px] h-[24px]"></div>
          </div>
          <div className="h-full flex items-center bg-[#00AC73] rounded-[15px] px-[21px]">
            <p className="text-[#ffffff]">Войти/Регистрация</p>
          </div>
        </div>
        <div className="h-[300px] bag relative bg-no-repeat overflow-hidden rounded-[30px] bg-cover">
          <div className="absolute w-full h-full inset-0 bg-[#00AC7340] flex flex-col items-center py-[24px] gap-[24px]">
            <p className="w-[325px] text-[32px] text-center leading-[39px] text-[#ffffff] font-semibold">ZAK Pharmacy ваш здоровый выбор</p>
            <p className="w-[325px] text-[24px] text-center text-[#ffffff]">Найти лекарства стало очень просто</p>
            <button className="h-[56px] w-[196px] bg-[#00AC73] text-[#ffffff] rounded-[15px] cursor-pointer">Начать</button>
          </div>
        </div>
        <p className="text-[32px] font-bold text-center mt-[50px] mb-[6px]">Популярные товары</p>
    </div>
    )
}

export default App;
