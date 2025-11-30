import { useState } from 'react';
import { ArrowLeft, Mail, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry_type: '',
    message: '',
    agreedToPrivacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          inquiry_type: formData.inquiry_type,
          message: formData.message
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit contact form');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        inquiry_type: '',
        message: '',
        agreedToPrivacy: false
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '送信に失敗しました。しばらくしてからもう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-yellow-dark hover:text-yellow-deeper mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          トップページに戻る
        </Link>

        <div className="bg-white rounded-xl shadow-card-shadow p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-primary/10 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-yellow-dark" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">お問い合わせ</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              AI株式情報分析サービスをご利用いただき、誠にありがとうございます。
              ご質問、ご要望、不具合のご報告など、お気軽にお問い合わせください。
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">受付時間</h2>
              <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">24時間受付</p>
                  <p className="text-sm text-gray-600">
                    ※メールでのお問い合わせは24時間受け付けております<br />
                    ※ご返信は営業日（平日 9:00-18:00）内に順次対応いたします<br />
                    ※土日祝日、年末年始の返信は翌営業日となります
                  </p>
                </div>
              </div>
            </section>

            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 animate-fadeIn">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900 mb-1">送信完了</p>
                  <p className="text-sm text-green-800">
                    お問い合わせを受け付けました。ご返信まで今しばらくお待ちください。
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 animate-fadeIn">
                <p className="text-red-900 font-semibold mb-1">送信エラー</p>
                <p className="text-sm text-red-800">{errorMessage}</p>
              </div>
            )}

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">お問い合わせフォーム</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    お名前 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-primary focus:border-transparent"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    メールアドレス <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-primary focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry_type" className="block text-sm font-semibold text-gray-700 mb-2">
                    お問い合わせ種別 <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-primary focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="service">サービス内容について</option>
                    <option value="technical">技術的な問題</option>
                    <option value="billing">料金について</option>
                    <option value="account">アカウントについて</option>
                    <option value="feature">機能リクエスト</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-primary focus:border-transparent resize-none"
                    placeholder="お問い合わせ内容を詳しくご記入ください"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="agreedToPrivacy"
                      checked={formData.agreedToPrivacy}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 text-yellow-primary border-gray-300 rounded focus:ring-yellow-primary"
                    />
                    <span className="text-sm text-gray-700">
                      <Link to="/privacy" className="text-yellow-dark hover:underline">プライバシーポリシー</Link>
                      に同意します <span className="text-red-600">*</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-dark transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </form>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">投資に関するご相談について</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-900 font-bold mb-2">重要なお知らせ</p>
                <div className="text-red-800 leading-relaxed space-y-2">
                  <p>
                    当サービスは金融商品取引業者（投資助言・代理業、投資運用業等）ではないため、個別の投資助言や特定銘柄の売買推奨を行うことはできません。
                  </p>
                  <p>
                    本サービスは公開市場データに基づく参考情報の提供のみを目的としており、特定銘柄の売買を勧誘するものではありません。
                  </p>
                  <p>
                    投資に関する具体的なご相談は、証券会社等の金融商品取引業者にお問い合わせください。
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-slate-100 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                運営会社情報
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>会社名:</strong> 株式会社サーチエンジン (Search Engine Co., Ltd.)
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>所在地:</strong> 〒107-0062 東京都港区南青山3-13-14 南青山ビル4階
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>設立:</strong> 2013年7月
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>業種:</strong> SEO／デジタルマーケティング／広告運用
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>メールアドレス:</strong> support@soaringstock.jp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
