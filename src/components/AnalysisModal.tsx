import { X, ExternalLink, Loader2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import AnalysisRenderer from './AnalysisRenderer';
import AIAccuracyChart from './AIAccuracyChart';

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysis: string;
  stockCode: string;
  stockName: string;
  onLineConversion: () => void;
  onReportDownload: () => void;
  isStreaming?: boolean;
  isConnecting?: boolean;
}

export default function AnalysisModal({
  isOpen,
  onClose,
  analysis,
  stockCode,
  stockName,
  onLineConversion,
  onReportDownload,
  isStreaming = false,
  isConnecting = false,
}: AnalysisModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset scroll position to top when modal opens
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-modal-open', 'true');

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.removeAttribute('data-modal-open');
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm" style={{ touchAction: 'none', background: 'rgba(45, 45, 45, 0.7)' }}>
      <div className="relative w-full max-w-3xl max-h-[90vh]">
        <div className="relative backdrop-blur-xl rounded-2xl border overflow-hidden" style={{ touchAction: 'auto', background: '#FFFFFF', borderColor: 'rgba(37, 99, 235, 0.3)', boxShadow: '0 8px 40px rgba(37, 99, 235, 0.3)' }}>
          <div
            className="sticky top-0 px-6 py-4 flex items-center justify-between border-b"
            style={{ background: 'linear-gradient(90deg, #E3F0FF, #FAFCFF)', borderColor: '#BFDBFE' }}
          >
          <div className="flex-1 text-center">
            <h2 className="text-sm font-bold text-charcoal">
              {stockName}（{stockCode}）AI市場データ分析レポート
            </h2>
            {isConnecting && (
              <div className="flex items-center gap-2 text-charcoal text-sm justify-center mt-2">
                <Loader2 className="w-4 h-4 animate-spin text-yellow-primary" />
                <span>AIサーバーに接続中...</span>
              </div>
            )}
            {isStreaming && !isConnecting && (
              <div className="flex items-center gap-2 text-charcoal text-sm justify-center mt-2">
                <Loader2 className="w-4 h-4 animate-spin text-yellow-primary" />
                <span>レポート生成中...</span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition-colors ml-4 hover:bg-beige-light"
            aria-label="閉じる"
          >
            <X className="w-6 h-6 text-charcoal" />
          </button>
        </div>

        <div ref={contentRef} className="overflow-y-auto max-h-[calc(90vh-180px)] px-6 py-6" style={{ background: '#F0F7FF' }}>
          <div className="mb-6">

            <div className="rounded-xl p-6 relative bg-white border border-border-light shadow-soft-shadow">
              <div className="prose prose-sm max-w-none text-charcoal">
                {isConnecting ? (
                  <div className="text-center py-8">
                    <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-yellow-primary" />
                    <p className="font-semibold text-charcoal">AI分析中...</p>
                    <p className="text-sm mt-2 text-charcoal-light">処理中...</p>
                  </div>
                ) : (
                  <div>
                    <AnalysisRenderer text={analysis} />
                    {isStreaming && (
                      <span className="inline-block w-2 h-5 animate-pulse ml-1 bg-yellow-primary"></span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={onLineConversion}
              className="relative w-full font-bold py-5 px-6 rounded-2xl transition-all flex items-center justify-center gap-3 text-base mt-6 hover:scale-105 overflow-hidden shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
                color: '#FFFFFF'
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-2 h-2 bg-white/50 rounded-full animate-float-1" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
                <div className="absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-float-2" style={{ top: '60%', left: '25%', animationDelay: '1s' }} />
                <div className="absolute w-2 h-2 bg-white/50 rounded-full animate-float-3" style={{ top: '40%', left: '70%', animationDelay: '1.5s' }} />
                <div className="absolute w-1 h-1 bg-white/60 rounded-full animate-float-1" style={{ top: '70%', left: '80%', animationDelay: '0.5s' }} />
                <div className="absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-float-2" style={{ top: '30%', left: '50%', animationDelay: '2s' }} />
                <div className="absolute w-2 h-2 bg-white/50 rounded-full animate-float-3" style={{ top: '80%', left: '40%', animationDelay: '1.2s' }} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-shine" />
              <ExternalLink className="w-7 h-7 flex-shrink-0 relative z-10" />
              <span className="relative z-10 font-bold">LINE友だち追加で情報を受け取る（任意）</span>
            </button>

            <div className="mt-3 p-4 rounded-xl bg-beige-light border border-border-beige">
              <div className="flex items-start gap-2 mb-2">
                <ExternalLink className="w-5 h-5 flex-shrink-0 mt-0.5 text-charcoal" />
                <p className="text-sm font-bold text-charcoal">
                  【重要】外部サービスについて
                </p>
              </div>
              <ul className="text-xs text-charcoal leading-relaxed space-y-1.5 ml-1">
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5 text-charcoal">•</span>
                  <span>このボタンをクリックすると、<strong>LINE（第三者サービス）へ移動</strong>します</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5 text-charcoal">•</span>
                  <span>LINEは当サービスとは<strong>別の独立したサービス</strong>です</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5 text-yellow-dark">✓</span>
                  <span>追加料金は発生しません</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5 text-yellow-dark">✓</span>
                  <span>LINE友だち追加により、市場情報のお知らせを受け取れます（任意）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
