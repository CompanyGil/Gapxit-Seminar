
import React, { useState, useEffect } from 'react';

// Helper component for section titles
const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-8 ${className}`}>{children}</h2>
);

// Helper component for list items with checkmarks
const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start space-x-3">
        <div className="flex-shrink-0">
            <i className="fas fa-check-circle text-yellow-400 text-2xl mt-1"></i>
        </div>
        <p className="text-slate-300 text-xl leading-relaxed">{children}</p>
    </li>
);

// Helper component for emphasizing text
const Highlight: React.FC<{ children: React.ReactNode; color?: 'yellow' | 'red' }> = ({ children, color = 'yellow' }) => {
    const colorClass = color === 'yellow' ? 'text-yellow-400' : 'text-red-400';
    return <span className={`font-bold ${colorClass}`}>{children}</span>;
};

// Scrolling Keyword Banner Component
const KeywordMarquee: React.FC = () => {
    const keywords = ['현금 10억 💰', '경제적 자유 💸', '수익률 극대화 📈', '초단기 EXIT ⚡', '소액 투자 ✅', '건물주 시스템 🏡', '정책 자금 활용 🏦'];
    const marqueeContent = keywords.map((k, index) => <span key={index} className="mx-8 text-2xl font-bold">{k}</span>);

    return (
        <div className="relative flex overflow-x-hidden bg-yellow-400 text-slate-900 py-4">
            <div className="flex animate-marquee whitespace-nowrap">
                {marqueeContent}
            </div>
            <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
                {marqueeContent}
            </div>
        </div>
    );
};


const App: React.FC = () => {
    const getTargetDate = () => {
        const target = new Date();
        target.setDate(target.getDate() + 26);
        target.setHours(21);
        target.setMinutes(46);
        target.setSeconds(7);
        return target;
    }
    
    const [targetDate] = useState(getTargetDate());

    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [seatsLeft, setSeatsLeft] = useState(13);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    useEffect(() => {
        if (seatsLeft > 5) {
            const seatsTimer = setInterval(() => {
                setSeatsLeft(prevSeats => (prevSeats > 5 ? prevSeats - 1 : 5));
            }, 45000);
            return () => clearInterval(seatsTimer);
        }
    }, [seatsLeft]);
    
    const formatTime = (time: number) => time.toString().padStart(2, '0');

    const outform_agreement = (e: React.MouseEvent) => {
        e.preventDefault();
        window.open("https://geru.kr/u/a1/?143911", "winAgreement", "left=100,top=100,width=400,height=500,scrollbars=1");
    }

    const scrollToForm = () => {
        document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <div className="bg-slate-900 min-h-screen text-slate-200">
            <main className="max-w-3xl mx-auto bg-slate-800 shadow-lg">

                {/* Hero Section */}
                <section className="bg-slate-800 text-white p-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                        초단기 현금 확보!
                        <br />
                        <span className="text-yellow-400">돈 나오는 토지경매</span> 특별 컨퍼런스
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold mt-8 mb-4 leading-relaxed">
                        “당신의 땅이 현금 시스템이 된다!”
                    </p>
                    <p className="text-xl md:text-2xl leading-relaxed">
                        경매 토지+수목장림 EXIT 전략으로 <span className="bg-yellow-400 text-slate-900 px-2 py-1 rounded">1년 만에 10억 현금화</span>에 도전하세요!
                    </p>
                </section>
                
                <KeywordMarquee />
                
                <section className="p-8 text-center text-lg md:text-xl bg-slate-900">
                    <p className="text-slate-300 leading-relaxed">금리 인하와 부동산 PF 부실로 인해 토지 경매 매물이 폭증하고 있는 지금은 <span className="font-bold text-red-500">토지 투자의 골든타임</span>입니다. 이 기회는 평생 단 한 번 찾아올 수 있는 시장 상황입니다. 복잡한 아파트의 위험은 피하고, 정부와 금융권이 인정하는 절대적 가치의 실물자산, <strong className="text-4xl font-black text-yellow-400">'땅'</strong>으로 당신의 인생을 바꾸세요.</p>
                </section>

                {/* Seminar Info Section */}
                <section className="p-8 m-6 border-4 border-dashed border-slate-600">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-400 mb-2">일시</h3>
                            <p className="text-3xl font-bold text-white">2025. 10. 25. (토)</p>
                            <p className="text-2xl">오후 2시 ~ 4시</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-400 mb-2">장소</h3>
                            <p className="text-3xl font-bold text-white">강남역 인근</p>
                            <p className="text-2xl">(개별 공지)</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-400 mb-2">참가비</h3>
                            <p className="text-5xl font-extrabold text-red-500">무료</p>
                        </div>
                    </div>
                </section>

                {/* Hook Section */}
                <section className="p-6 md:p-8 bg-slate-900">
                    <SectionTitle>📌 당신이 이 특별 세미나를 <Highlight>'반드시'</Highlight> 들어야 하는 이유</SectionTitle>
                    <ul className="space-y-6">
                        <CheckListItem>
                            <span className="font-bold text-white">아파트 투자의 종말:</span> 집값 상승을 전제로 한 갭투자 모델은 이미 무너졌습니다. 더 이상 과거의 수익 모델이 작동하지 않는 시장에서, 당신의 무리한 갭투자는 내일의 파산으로 이어질 수 있습니다.
                        </CheckListItem>
                        <CheckListItem>
                            <span className="font-bold text-white">땅, 현금을 만드는 유일한 자산:</span> 토지는 절대 사라지지 않는 유일한 실물자산입니다. 은행은 토지담보대출을 가장 선호하며, 담보가치의 <span className="font-bold text-red-500">최대 90%까지 대출</span>이 가능합니다 (아파트 40~60% 대비 압도적).
                        </CheckListItem>
                        <CheckListItem>
                            <span className="font-bold text-white">단돈 1,200만 원으로 12억 땅 낙찰:</span> 남들이 모르는 <span className="bg-yellow-400 text-slate-900 px-2 rounded font-bold">'줍줍땅 시대'</span>의 기회. 경매를 통해 감정가 대비 90% 이하로 떨어진 토지를 잡고, 1년 안에 본 감정가로 현금화하는 고수들의 비밀을 그대로 전수받으세요.
                        </CheckListItem>
                    </ul>
                </section>

                {/* Part 1 Section */}
                <section className="p-6 md:p-8">
                    <div className="text-center mb-8">
                        <p className="text-sky-400 font-bold text-2xl">Part 1. 경매 토지 시크릿 EXIT 전략</p>
                        <h3 className="text-4xl font-extrabold text-white mt-2">2천만원에 잡은 땅, <span className="text-yellow-400">수목장림으로 대박내기</span>(전격 공개)</h3>
                        <p className="text-slate-400 mt-3 text-xl">메인 강사: 미래행정사그룹 이효종 / 이태융 행정사</p>
                    </div>
                    <p className="mb-8 bg-slate-700 p-6 rounded-lg text-xl text-slate-300">저평가된 임야를 수목장림 조성을 통해 고가치 자산으로 변모시키는 인허가 전략과 EXIT 시스템을 최초 공개합니다.</p>
                    
                    <div className="space-y-8">
                        <div>
                            <h4 className="font-bold text-2xl mb-3 text-sky-400">🌳 수목장림이 매력적인 이유</h4>
                            <ul className="list-disc list-inside space-y-3 text-slate-300 pl-4 text-xl">
                                <li>모두가 버린땅 → 수십배 돈되는 땅으로 변신</li>
                                <li><span className="font-bold text-white">규제 완화의 핵심:</span> 개발행위허가 없이 그린벨트 등에도 조성이 가능하여 인허가 절차가 간편합니다.</li>
                                <li><span className="font-bold text-white">목사님들, 스님들 반드시 들어야 하는 이유:</span> 종교단체는 12,000평 이하까지 허가받아 대규모 조성이 가능합니다.</li>
                                <li><span className="font-bold text-white">허가나는 땅은 수억 웃돈 거래:</span> 저가 매입 토지에 인허가를 받아 가치를 높여 대출/매각하는 초단기 EXIT 전략의 핵심입니다.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl mb-3 text-sky-400">🔑 핵심 강의 내용</h4>
                            <ul className="list-disc list-inside space-y-3 text-slate-300 pl-4 text-xl">
                                <li><span className="font-bold text-white">토지 가치 극대화 전략:</span> 규제 지역 토지를 수목장림으로 가치 높이는 인허가 실무.</li>
                                <li><span className="font-bold text-white">최적의 조성 주체:</span> 종교단체/법인 설립을 통한 허가 요건 및 절차.</li>
                                <li><span className="font-bold text-white">현금화 사례 분석:</span> 경매 토지 수목장림 허가 및 대출을 통한 단기 현금 확보 시스템 해설.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                {/* Part 2 Section */}
                <section className="p-6 md:p-8 bg-slate-900">
                    <div className="text-center mb-8">
                        <p className="text-sky-400 font-bold text-2xl">Part 2. 이라희 대표의</p>
                        <h3 className="text-4xl font-extrabold text-white mt-2">돈 나오는 <span className="text-yellow-400">토지 경매/토지연금/토지정책자금</span> 3가지 로드맵 & 현금 10억 만들기</h3>
                        <p className="text-slate-400 mt-3 text-xl">메인 강사: 《난생처음 토지투자》 저자, 이라희 대표</p>
                    </div>
                    
                    <div className="space-y-8">
                        <h4 className="font-bold text-3xl mb-4 text-center text-sky-400">💰 돈 나오는 토지 투자 로드맵 3가지</h4>
                        <ul className="space-y-4 text-xl">
                            <li className="bg-slate-800 p-5 rounded-lg shadow-md border border-slate-700"><strong className="text-red-500">돈 나오는 경매 토지:</strong> 감정가 30% 이하 토지만 분석, 소액으로 고수익을 실현하는 초단기 엑시트 노하우 공개.</li>
                            <li className="bg-slate-800 p-5 rounded-lg shadow-md border border-slate-700"><strong className="text-red-500">돈 나오는 토지연금 (농지연금):</strong> 2천만원 땅으로 월 최대 300만원 연금을 평생 받는 농지연금 활용법 공개.</li>
                            <li className="bg-slate-800 p-5 rounded-lg shadow-md border border-slate-700"><strong className="text-red-500">돈 나오는 토지정책자금:</strong> 정부 지원금(정책자금)으로 숲속캠핑장/레스토랑 하는 실전 방법.</li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        <h4 className="font-bold text-3xl mb-6 text-center text-sky-400">📈 GAPXIT 시스템 실전 성공 사례</h4>
                         <div className="bg-slate-800 p-6 rounded-lg shadow-md border border-slate-700 text-center text-xl space-y-4">
                            <p>
                                <strong className="block text-2xl text-white">사례 1: 감정가 대비 대출만으로 현금 확보</strong>
                                감정가 20억 땅을 약 1억원으로 낙찰 성공!
                                <br/>
                                <span className="text-red-500 font-bold text-3xl mt-2 block">→ 시크릿 엑시트 전략으로 현금 10억 확보 가능 : 세미나 현장에서 직접 공개</span>
                            </p>
                            <p>
                                <strong className="block text-2xl text-white">사례 2: 7.5배 수익률 실현</strong>
                                평당 20만 원에 매입 → 평당 150만 원에 매도, 현실적으로 가능한 이유 모두 공개
                            </p>
                         </div>
                    </div>
                     <div className="mt-8 bg-slate-800 border-l-4 border-yellow-500 p-6">
                        <p className="font-bold text-2xl text-yellow-300">경매토지로 수목장림 허가를 득하면 얼마의 현금수익이 가능한가?</p>
                        <p className="mt-3 text-yellow-100 text-xl">이 질문의 핵심은 바로 <Highlight>GAPXIT 전략</Highlight>에 있습니다. 저가 매입한 경매 토지에 <strong className="font-bold text-white">수목장림 허가 (가치 상승)</strong>를 통해 토지 가치를 높여 재감정을 받고, 대출을 극대화하여 현금 유동성을 확보하는 것이 핵심 수익 구조입니다.</p>
                    </div>
                </section>

                {/* Profile Section */}
                <section className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-center gap-8 bg-slate-800">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKA06fHLcWuIuq3uv61mimVvcBrggnOy7qg&s" 
                        alt="이라희 대표 프로필 사진"
                        className="w-52 h-52 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
                    />
                    <div>
                        <h3 className="text-4xl font-bold text-white text-center md:text-left">이라희 대표</h3>
                        <p className="text-slate-400 text-center md:text-left text-xl mt-1">《난생처음 토지투자》 저자</p>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="p-8 md:p-10 bg-yellow-400 text-center">
                    <SectionTitle className="text-slate-900">오늘 신청자만을 위한 <br className="md:hidden"/> <span className="bg-slate-800 text-white px-3 py-1 rounded">특별 혜택</span></SectionTitle>
                    <p className="text-2xl font-bold mb-8 text-slate-800">총 200만 원 상당의 혜택이 오늘 신청자에게만 제공됩니다!</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white font-semibold text-xl">
                        <div className="bg-slate-800/80 p-5 rounded-lg shadow-md flex items-center justify-center">추천물건 10개 권리분석보고서</div>
                        <div className="bg-slate-800/80 p-5 rounded-lg shadow-md flex items-center justify-center">실전 입찰 1:1 콜 지원</div>
                        <div className="bg-slate-800/80 p-5 rounded-lg shadow-md flex items-center justify-center">수료 후 4주 Q&A 지원</div>
                        <div className="bg-slate-800/80 p-5 rounded-lg shadow-md flex items-center justify-center">《현금 나오는 토지경매》 전자책 증정</div>
                    </div>
                </section>
                
                {/* Final CTA */}
                <section id="form-section" className="p-8 text-center bg-slate-900 text-white">
                    <p className="text-3xl font-bold mb-4 leading-snug">"배우기로 결심하고, 그 길을 따라 움직이는 순간" <br/> 당신의 인생이 바뀝니다.</p>
                    <p className="text-2xl mb-8">지금 바로 신청하고, 평생 당신을 먹여 살릴 수 있는 노하우를 얻으세요!</p>
                    
                    <div className="my-8 p-6 bg-slate-800 rounded-lg max-w-md mx-auto border border-slate-700">
                        <div className="space-y-4">
                            <div className="text-3xl">
                                <span className="text-gray-500 line-through">290,000원</span>
                                <span className="text-5xl font-bold text-yellow-400 ml-2">→ 0원</span>
                            </div>
                            <div className="text-4xl font-bold text-red-500 animate-pulse">
                                🔥 50명 선착순 모집
                            </div>
                            
                            <div className="pt-4">
                                <div className="text-lg text-gray-400 mb-2">마감까지 남은 시간</div>
                                <div className="flex justify-center items-center space-x-1 text-5xl font-mono tracking-wider">
                                    <div className="bg-black/50 p-3 rounded-md min-w-[80px]">
                                       <span>{timeLeft.days}</span>
                                        <div className="text-base font-sans">일</div>
                                    </div>
                                     <span className="text-3xl self-start pt-2">:</span>
                                    <div className="bg-black/50 p-3 rounded-md min-w-[80px]">
                                       <span>{formatTime(timeLeft.hours)}</span>
                                        <div className="text-base font-sans">시간</div>
                                    </div>
                                     <span className="text-3xl self-start pt-2">:</span>
                                    <div className="bg-black/50 p-3 rounded-md min-w-[80px]">
                                       <span>{formatTime(timeLeft.minutes)}</span>
                                        <div className="text-base font-sans">분</div>
                                    </div>
                                     <span className="text-3xl self-start pt-2">:</span>
                                    <div className="bg-black/50 p-3 rounded-md min-w-[80px]">
                                       <span>{formatTime(timeLeft.seconds)}</span>
                                        <div className="text-base font-sans">초</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-2xl font-semibold pt-4">
                                현재 남은 좌석: <span className="text-yellow-400 text-4xl font-bold">{seatsLeft}</span>
                            </div>
                        </div>
                    </div>

                    <form name="outform" id="outform" action="https://geru.kr/ln/update.php" method="post" className="max-w-md mx-auto" autoComplete="off">
                        <input type="hidden" name="code" value="TXpjM09UY3NNVFF6T1RFeA==" />
                        <input type="hidden" name="channel" value="outform" />

                        <div className="space-y-4 mb-4">
                            <input 
                                type="text" 
                                name="apc_name" 
                                placeholder="이름" 
                                required 
                                className="w-full p-4 text-xl bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <input 
                                type="tel" 
                                name="apc_hp" 
                                placeholder="휴대폰 ('-' 없이 숫자만 입력)" 
                                required 
                                className="w-full p-4 text-xl bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div className="mb-6 text-base text-gray-400 flex items-center justify-center">
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" id="apc_agree" name="apc_agree" defaultChecked required className="h-5 w-5 rounded border-gray-500 bg-slate-700 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-slate-900" />
                                <span className="ml-2">개인정보 수집동의</span>
                            </label>
                            <a href="#" onClick={outform_agreement} className="ml-4 text-yellow-400 underline hover:text-yellow-300">약관보기</a>
                        </div>
                        
                        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-4xl py-5 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            특별 컨퍼런스 무료 신청하기 <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </form>
                </section>
            </main>

            {/* Sticky Footer CTA for Mobile */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-800 p-3 border-t-2 border-yellow-400 shadow-[0_-2px_10px_rgba(0,0,0,0.2)] z-50">
                <button 
                    onClick={scrollToForm}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-2xl py-4 px-4 rounded-md shadow-lg"
                >
                    무료 세미나 바로 신청
                </button>
            </div>
            {/* Add padding to the bottom of the main content to avoid overlap with sticky footer */}
            <div className="pb-24 md:pb-0"></div> 
        </div>
    );
};

export default App;