const Item = () => {
   return ( 
      <div className="h-[258px] rounded-[15px] shadow-[0_0_0_20px_#e0e0e012] flex flex-col justify-between px-[16px] py-[16px] bg-[#ffffff]">
         <div className="flex flex-col gap-[8px]">
            <div className="h-[140px] w-full bg-[#ffffff] relative">
            <div className="kleksan bg-contain h-full w-full bg-contain bg-no-repeat bg-center"></div>
            </div>
            <p className="text-[12px] text-[#7E7E7E]">Клексан шприц 4000 анти-Ха МЕ/0.4мл №10</p>
         </div>
         <p className="text-[15.5294px] text-[#00AC73]">160 000 сум</p>
      </div>
    );
}
 
export default Item;