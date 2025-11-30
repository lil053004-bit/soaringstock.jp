import { StockInfo } from '../types/stock';

interface HeaderSectionProps {
  stockInfo: StockInfo | null;
}

export default function HeaderSection({ stockInfo }: HeaderSectionProps) {
  if (!stockInfo) {
    return (
      <div className="relative h-[25vh] bg-[#fdc27b] flex items-center justify-center overflow-hidden">
        <img src="/assets/grean1.svg" alt="" className="absolute -top-[2rem] -left-12 md:-top-16 md:-left-16 w-24 h-24 md:w-32 md:h-32 pointer-events-none" />
        <img src="/assets/grean2.svg" alt="" className="absolute -top-[2rem] -right-12 md:-top-16 md:-right-16 w-24 h-24 md:w-32 md:h-32 pointer-events-none" />
        <img src="/assets/grean3.svg" alt="" className="absolute -bottom-[1rem] -left-12 md:-bottom-16 md:-left-16 w-24 h-24 md:w-32 md:h-32 pointer-events-none" />
        <img src="/assets/grean4.svg" alt="" className="absolute -bottom-[1rem] -right-12 md:-bottom-16 md:-right-16 w-24 h-24 md:w-32 md:h-32 pointer-events-none" />

        <div className="text-center">
          <p className="text-gray-700 text-sm">株式コードを入力してください</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price: string) => {
    return `¥${price}`;
  };

  return (
    <div className="relative h-[25vh] bg-[#fdc27b] flex items-center justify-center overflow-hidden">
      <img src="/assets/grean1.svg" alt="" className="absolute -top-[2rem] -left-12 md:-top-16 md:-left-16 w-24 h-24 md:w-32 md:h-32 pointer-events-none" />
      <img src="/assets/grean2.svg" alt="" className="absolute -top-[2rem] -right-12 md:-top-16 md:-right-16 w-24 h-24 md:w-32 md:h-32 pointer-events-none" />
      <img src="/assets/grean3.svg" alt="" className="absolute -bottom-[1rem] -left-12 md:-bottom-16 md:-left-16 w-24 h-24 md:w-32 md:h-32 pointer-events-none" />
      <img src="/assets/grean4.svg" alt="" className="absolute -bottom-[1rem] -right-12 md:-bottom-16 md:-right-16 w-24 h-24 md:w-32 md:h-32 pointer-events-none" />

      <div className="relative z-10 text-center px-4 py-4 flex flex-col justify-center h-full">
        <div className="mb-2">
          <h1 className="text-base md:text-lg font-bold text-gray-900">
            {stockInfo.name}
          </h1>
        </div>

        <div className="mb-3">
          <p className="text-3xl md:text-4xl font-bold text-gray-900">
            {formatPrice(stockInfo.price)}
          </p>
          {stockInfo.change && (
            <p className={`text-sm mt-1 ${stockInfo.change.startsWith('-') ? 'text-red-700' : 'text-green-700'}`}>
              {stockInfo.change} ({stockInfo.changePercent})
            </p>
          )}
        </div>

        <div className="flex items-center justify-center gap-4 mb-3 flex-wrap">
          {stockInfo.market && (
            <div className="text-sm">
              <span className="font-semibold text-gray-700">市場: </span>
              <span className="text-gray-900">{stockInfo.market}</span>
            </div>
          )}
          {stockInfo.industry && (
            <div className="text-sm">
              <span className="font-semibold text-gray-700">業種: </span>
              <span className="text-gray-900">{stockInfo.industry}</span>
            </div>
          )}
        </div>

        <div className="mt-auto">
          <p className="text-xs text-gray-600">
            データは公開情報に基づいています
          </p>
        </div>
      </div>
    </div>
  );
}
