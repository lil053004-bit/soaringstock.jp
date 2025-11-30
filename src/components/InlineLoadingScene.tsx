import LoadingProgressBars from './LoadingProgressBars';

interface InlineLoadingSceneProps {
  isVisible: boolean;
}

export default function InlineLoadingScene({ isVisible }: InlineLoadingSceneProps) {
  if (!isVisible) return null;

  return (
    <div className="w-full animate-fadeIn px-4">
      <div className="bg-white rounded-2xl p-8 border border-yellow-primary/30 shadow-card-shadow max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-primary/10 rounded-full mb-4">
            <div className="w-8 h-8 border-4 border-yellow-primary/30 border-t-yellow-primary rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-2" style={{ fontFamily: 'M PLUS Rounded 1c, sans-serif' }}>
            データ処理中
          </h2>
          <p className="text-sm md:text-base text-charcoal-light" style={{ fontFamily: 'M PLUS Rounded 1c, sans-serif' }}>
            少々お待ちください...
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <LoadingProgressBars isVisible={isVisible} />
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-charcoal-light leading-relaxed" style={{ fontFamily: 'M PLUS Rounded 1c, sans-serif' }}>
            公開されている市場データを集約しています。
            <br className="hidden sm:inline" />
            参考情報として表示いたします。
          </p>
        </div>
      </div>
    </div>
  );
}
