import { useState, type FormEvent } from 'react'
import { supabase } from './lib/supabase'
import { CoupleIllustration } from './components/CoupleIllustration'
import { HeartIcon } from './components/HeartIcon'
import { CheckCircle, MessageCircle, Users, ShieldCheck, Star, AlertCircle } from 'lucide-react'
import { REGIONS } from './data/regions'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function App() {
  const [gender, setGender] = useState('')
  const [sido, setSido] = useState('')
  const [sigungu, setSigungu] = useState('')
  const [age, setAge] = useState('')
  const [contact, setContact] = useState('')
  const [ageCheck, setAgeCheck] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const region = sido && sigungu ? `${sido} ${sigungu}` : ''
  const isValid = gender && region && age && contact.trim() && ageCheck

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isValid) return

    setStatus('submitting')
    setErrorMsg('')

    if (!supabase) {
      setStatus('error')
      setErrorMsg('서버 연결이 설정되지 않았습니다.')
      return
    }

    const { error } = await supabase.from('applications').insert([
      {
        gender,
        region,
        age: Number(age),
        contact: contact.trim(),
        age_confirmed: ageCheck,
      },
    ])

    if (error) {
      setStatus('error')
      setErrorMsg('제출 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
      return
    }

    setStatus('success')
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-2xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartIcon className="w-5 h-5 text-pink-500" />
            <span className="font-bold text-lg tracking-tight">매칭만</span>
          </div>
          <a
            href="#apply"
            className="text-sm font-medium text-pink-500 hover:text-pink-600 transition-colors"
          >
            신청하기
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-pink-50 to-bg" />

        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-2xl" />
        <div className="absolute top-20 right-10 w-40 h-40 bg-peach rounded-full opacity-20 blur-2xl" />

        <div className="relative max-w-2xl mx-auto px-5 pt-12 pb-6 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-white rounded-full text-sm text-pink-500 font-medium border border-pink-100 shadow-sm">
            무료 · 랜덤 매칭
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-4">
            동네에서,
            <br />
            <span className="text-pink-500">매칭만</span> 해드립니다.
          </h1>

          <p className="text-text-sub text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            프로필 경쟁도, 결제 유도도 없습니다.
            <br />
            지역 기반으로 1:1 랜덤 매칭 →
            <br />
            연락은 두 분이 알아서.
          </p>

          {/* Illustration */}
          <div className="mt-6 flex justify-center">
            <CoupleIllustration className="w-72 sm:w-80 h-auto" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-2xl mx-auto px-5 py-16">
        <h2 className="text-2xl font-bold text-center mb-2">이용 방법</h2>
        <p className="text-text-sub text-center text-sm mb-10">복잡한 건 없습니다. 딱 3단계.</p>

        <div className="grid gap-6">
          {[
            {
              step: 1,
              icon: <CheckCircle className="w-6 h-6" />,
              title: '신청서 작성',
              desc: '성별, 지역, 연락처만 알려주세요. 프로필 사진이나 자기소개는 필요 없습니다.',
            },
            {
              step: 2,
              icon: <Users className="w-6 h-6" />,
              title: '1:1 랜덤 매칭',
              desc: '같은 지역 내에서 랜덤으로 1:1 매칭됩니다. 알고리즘 없이, 운영자가 직접.',
            },
            {
              step: 3,
              icon: <MessageCircle className="w-6 h-6" />,
              title: '연락처 교환',
              desc: '매칭되면 서로의 연락처를 전달해드립니다. 그다음은 두 분 몫.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 p-5 bg-white rounded-2xl border border-pink-100 shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-pink-50 text-pink-500 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-pink-400 bg-pink-50 px-2 py-0.5 rounded-full">
                    STEP {item.step}
                  </span>
                  <h3 className="font-bold text-base">{item.title}</h3>
                </div>
                <p className="text-text-sub text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Policy */}
      <section className="bg-white border-y border-pink-100">
        <div className="max-w-2xl mx-auto px-5 py-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-6 h-6 text-pink-500" />
            <h2 className="text-2xl font-bold">리뷰 의무 정책</h2>
          </div>
          <p className="text-text-sub text-center text-sm mb-8">
            서로를 위한 최소한의 장치입니다.
          </p>

          <div className="bg-pink-50 rounded-2xl p-6 sm:p-8 border border-pink-100">
            <div className="space-y-5">
              <div className="flex gap-3">
                <Star className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">매칭 후 리뷰 작성 의무</h4>
                  <p className="text-text-sub text-sm leading-relaxed">
                    매칭이 끝나면 양쪽 모두 간단한 리뷰를 작성합니다.
                    "괜찮았다 / 별로였다" 수준이면 충분합니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">리뷰 미작성 시 재매칭 제한</h4>
                  <p className="text-text-sub text-sm leading-relaxed">
                    리뷰를 쓰지 않으면 다음 매칭 신청이 제한됩니다.
                    매너 있는 분들끼리 만날 수 있도록.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="max-w-2xl mx-auto px-5 py-16">
        <h2 className="text-2xl font-bold text-center mb-2">매칭 신청</h2>
        <p className="text-text-sub text-center text-sm mb-8">
          30초면 끝납니다. 필요한 것만 물어볼게요.
        </p>

        {status === 'success' ? (
          <div className="text-center py-12 px-6 bg-white rounded-2xl border border-pink-100 shadow-sm">
            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartIcon className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">신청 완료!</h3>
            <p className="text-text-sub text-sm leading-relaxed">
              접수되었습니다. 매칭이 되면 연락드릴게요.
              <br />
              조금만 기다려주세요.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Gender */}
            <fieldset>
              <legend className="text-sm font-semibold mb-3">성별</legend>
              <div className="flex gap-3">
                {[
                  { value: 'male', label: '남성' },
                  { value: 'female', label: '여성' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setGender(opt.value)}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-all ${
                      gender === opt.value
                        ? 'bg-pink-500 text-white border-pink-500 shadow-sm'
                        : 'bg-pink-50 text-text-sub border-pink-100 hover:border-pink-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Region */}
            <div>
              <label className="block text-sm font-semibold mb-2">지역</label>
              <div className="flex gap-3">
                <select
                  value={sido}
                  onChange={(e) => {
                    setSido(e.target.value)
                    setSigungu('')
                  }}
                  className="flex-1 px-4 py-3 rounded-xl border border-pink-100 bg-pink-50 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent appearance-none"
                >
                  <option value="">시/도</option>
                  {Object.keys(REGIONS).map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <select
                  value={sigungu}
                  onChange={(e) => setSigungu(e.target.value)}
                  disabled={!sido}
                  className="flex-1 px-4 py-3 rounded-xl border border-pink-100 bg-pink-50 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent appearance-none disabled:opacity-40"
                >
                  <option value="">시/군/구</option>
                  {sido &&
                    REGIONS[sido].map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                </select>
              </div>
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-sm font-semibold mb-2">
                나이
              </label>
              <input
                id="age"
                type="number"
                inputMode="numeric"
                min="19"
                max="100"
                placeholder="만 나이"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-pink-50 text-sm placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
            </div>

            {/* Contact */}
            <div>
              <label htmlFor="contact" className="block text-sm font-semibold mb-2">
                연락처
              </label>
              <input
                id="contact"
                type="text"
                placeholder="전화번호"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-pink-50 text-sm placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
            </div>

            {/* Age Check */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={ageCheck}
                onChange={(e) => setAgeCheck(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-pink-200 text-pink-500 accent-pink-500"
              />
              <span className="text-sm text-text-sub leading-relaxed">
                만 19세 이상이며, 매칭 서비스 이용에 동의합니다.
              </span>
            </label>

            {errorMsg && (
              <p className="text-sm text-red-500 bg-red-50 px-4 py-2 rounded-lg">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={!isValid || status === 'submitting'}
              className={`w-full py-4 rounded-xl text-base font-bold transition-all ${
                isValid
                  ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 active:scale-[0.98]'
                  : 'bg-pink-100 text-pink-300 cursor-not-allowed'
              }`}
            >
              {status === 'submitting' ? '제출 중...' : '매칭 신청하기'}
            </button>

            <p className="text-xs text-center text-pink-300">
              수집된 정보는 매칭 목적으로만 사용됩니다.
            </p>
          </form>
        )}

        {/* 신고 안내 */}
        <div className="mt-6 flex gap-3 p-4 bg-pink-50 rounded-xl border border-pink-100">
          <AlertCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold mb-1">불쾌한 상대를 만나셨나요?</h4>
            <p className="text-text-sub text-xs leading-relaxed">
              이상한 사람을 만나셨다면 바로 신고해주세요.
              <br />
              확인 즉시 검토 후 해당 사용자는 영구 차단됩니다.
              <br />
              안전한 매칭을 위해 적극 조치합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-100 bg-white">
        <div className="max-w-2xl mx-auto px-5 py-8 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <HeartIcon className="w-4 h-4 text-pink-400" />
            <span className="font-bold text-sm">매칭만</span>
          </div>
          <p className="text-xs text-text-sub leading-relaxed">
            과장 없이, 매칭만 해드리는 1인 개발 프로젝트입니다.
            <br />
            문의: matchingman.dev@gmail.com
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
