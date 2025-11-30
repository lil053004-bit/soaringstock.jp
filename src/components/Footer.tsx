import { Link } from 'react-router-dom';
import { Shield, FileText, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-white border-t-2 border-border-beige">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Footer Links Section */}
        <div className="pt-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Legal Documents */}
            <div>
              <h4 className="font-bold text-charcoal mb-3 flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4" />
                法的文書
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/company"
                    className="text-charcoal hover:text-yellow-dark hover:underline flex items-center gap-1"
                  >
                    会社概要 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-charcoal hover:text-yellow-dark hover:underline flex items-center gap-1"
                  >
                    利用規約 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-charcoal hover:text-yellow-dark hover:underline flex items-center gap-1"
                  >
                    プライバシーポリシー <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/specified-commercial-transaction-act"
                    className="text-charcoal hover:text-yellow-dark hover:underline flex items-center gap-1"
                  >
                    特定商取引法表記 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-charcoal mb-3 flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                お問い合わせ
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/contact"
                    className="text-charcoal hover:text-yellow-dark hover:underline flex items-center gap-1"
                  >
                    お問い合わせフォーム <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-charcoal/10 pt-4 text-center">
            <p className="text-xs sm:text-sm text-charcoal mb-2 font-medium">
              &copy; {currentYear} All rights reserved.
            </p>
            <p className="text-[10px] sm:text-xs text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
              当サイトで提供される情報は公開市場データに基づく参考情報であり、特定銘柄の売買推奨や投資助言ではありません。投資判断は必ずご自身の責任で行ってください。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
