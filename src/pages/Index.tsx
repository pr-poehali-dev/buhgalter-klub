import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-montserrat font-bold text-xl text-primary">
              Клуб Горбовой
            </div>
            <div className="hidden md:flex space-x-6">
              {['Главная', 'Тарифы', 'Результаты', 'Отзывы', 'Автор', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="главная" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6 leading-tight">
              Бухгалтер, которого ценит директор:{" "}
              <span className="text-primary">уверенность в знаниях</span> и{" "}
              <span className="text-primary">рост дохода</span> за 3 месяца
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Перестань бояться проверок и ошибок. В Клубе ты научишься читать и понимать 
              законодательство, защищать себя и директора, спорить с органами и аргументированно 
              отстаивать свои решения
            </p>
            <Button size="lg" className="px-8 py-4 text-lg font-semibold animate-scale-in">
              Получить 3 бесплатных ответа из Базы знаний
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Problems Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16">
            Каждый день бухгалтера полон новых задач
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "MessageSquare",
                title: "Вопросы директора",
                description: "Директор задает вопросы по бизнесу и ждет гениальных решений: но как и налоги уменьшить, и под уклонение не попасть?"
              },
              {
                icon: "FileText",
                title: "Запросы налоговой",
                description: "Запросы от налоговой участились: как оценить, будет ли безопасно и стоит ли предоставлять все пояснения и документы?"
              },
              {
                icon: "AlertTriangle",
                title: "Исправление ошибок",
                description: "Обнаружена ошибка: как уметь исправлять любые ошибки или снижать штрафы до нуля, даже если тебя уже вызывают на протокол?"
              },
              {
                icon: "HelpCircle",
                title: "Бесконечные сомнения",
                description: "Даже опытный бухгалтер не всегда уверен, всё ли учтено правильно, не подкопается ли проверка к налогу или документу?"
              }
            ].map((problem, index) => (
              <Card key={index} className="h-full animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={problem.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="destructive" className="mb-4">
                ❌ Если ничего не менять
              </Badge>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
                Что будет, если оставить всё как есть?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Ты так и останешься оператором 1С без уважения и роста",
                "Каждый отчётный период — стресс, бессонные ночи и слёзы на кухне",
                "Штрафы будут выписывать на тебя, даже если виноват не ты",
                "Ежедневная рутина первички не даст тебе расти и много зарабатывать",
                "Ошибки и штрафы сожрут и нервы, и зарплату",
                "Чувствуешь? Внутри копится злость и апатия: «Может, бухгалтерия — это вообще не моё?»"
              ].map((pain, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg border">
                  <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="X" className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">
              🟢 Решение — Клуб Горбовой
            </Badge>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
              Решение есть: вам нужно сменить окружение!
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              В скудной почве не прорастут даже лучшие семена. Вы достойны видеть рядом 
              адекватных коллег и расти с ними в свое удовольствие!
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-800">
                🟢 Кому подойдёт / не подойдёт
              </Badge>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold">
                Кому подойдёт Клуб?
              </h2>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-green-700">✅ Подойдёт:</h3>
              <div className="grid gap-4">
                {[
                  "Тем, кто запутался в законах. Когда кажется, что любая норма трактуется по-разному, и страшно ошибиться в мелочи.",
                  "Тем, кто боится ответственности. Знаете, что штрафы и протоколы выписывают на бухгалтера, даже если решение принял директор?",
                  "Тем, у кого директор «давит». Когда требуют «и налоги снизить, и рисков не допустить», а вы понимаете, что крайним будете именно вы.",
                  "Тем, кто хочет не теорию, а конкретику. Что сказать проверяющему? Какие документы показывать, а какие нет?",
                  "Тем, кто устал работать в одиночестве. Когда некому задать вопрос и подтвердить свои действия.",
                  "Тем, кто хочет расти. Знание законов и умение работать безопасно повышает вашу ценность."
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-green-200">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-red-700">❌ Не подойдёт:</h3>
              <div className="grid gap-4">
                {[
                  "тем, кто ищет чудо-кнопку «всё само решится»",
                  "тем, кто не готов уделять своему развитию 10–15 минут в день",
                  "тем, кто уверен, что «и так всё знает»"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-red-200">
                    <Icon name="XCircle" className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16">
              Как будет проходить
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "Calendar",
                  title: "Каждый день",
                  description: "свежие обзоры законов и разборы госкомментариев"
                },
                {
                  icon: "Video",
                  title: "Раз в неделю",
                  description: "эфир с живыми ответами на вопросы"
                },
                {
                  icon: "Database",
                  title: "База знаний",
                  description: "600+ реальных ситуаций, готовых к применению"
                },
                {
                  icon: "MessageCircle",
                  title: "Чат",
                  description: "бухгалтера, юристы и предприниматели на связи"
                },
                {
                  icon: "Shield",
                  title: "Алгоритмы защиты",
                  description: "от «запроса налоговой» до «обыска и протокола»"
                },
                {
                  icon: "BookOpen",
                  title: "Библиотека решений",
                  description: "готовые алгоритмы «что делать, если»"
                }
              ].map((feature, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon name={feature.icon} className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="тарифы" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16">
            Тарифы
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "CHAT",
                price: "100",
                description: "Для тех, кто хочет иметь доступ к сообществу бухгалтеров, но не готов расти быстро.",
                features: [
                  "Канал со всеми рубриками (обзор законодательства, новостей и комментариев госорганов)",
                  "Чат с ценными бухгалтерами, юристами и предпринимателями",
                  "Эфир каждую неделю"
                ],
                popular: false
              },
              {
                name: "FULL",
                price: "150",
                description: "Для тех, кто хочет начать понимать законодательство, получать ответы на свои вопросы и расти быстро.",
                features: [
                  "Всё из тарифа CHAT",
                  "База знаний из 600+ видеоответов на вопросы",
                  "Возможность задать вопрос и получить видеоразбор в рамках рубрики \"Вопрос-Ответ\"",
                  "Обзорный эфир по практическому внедрению изменений законодательства за прошедший месяц"
                ],
                popular: true
              },
              {
                name: "BUSINESS",
                price: "250",
                description: "Для тех, кто хочет глубоко разбираться в законодательстве и безопасности бизнеса, знать ответы на все вопросы директора и стремительно расти в доходе.",
                features: [
                  "Всё из тарифа FULL",
                  "Библиотека решений: алгоритм действий для защиты бизнеса для каждого вида проверок",
                  "База знаний по бизнес тематике (60+ материалов, задания для быстрого внедрения и роста бизнеса)",
                  "База знаний по женскому саморазвитию (40+ материалов, 50 часов лекций)",
                  "Вебинар на тему месяца (4 часа глубокого погружения в актуальную тему)"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-montserrat">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price} <span className="text-lg text-muted-foreground">byn</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Icon name="Check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="результаты" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">
              Результаты поражают!
            </Badge>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold">
              Через 3 месяца бухгалтеры в Клубе
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                period: "Через 3 месяца",
                results: [
                  "Начинают понимать законодательство и видеть закономерности в изменениях",
                  "Выигрывают споры с налоговой за счет работающих аргументов",
                  "Находят подруг, которые не гнобят и не самоутверждаются за их счет, а поддерживают и радуются успехам"
                ]
              },
              {
                period: "Через полгода",
                results: [
                  "Зарабатывают в 2-3 раза больше за счет грамотного консультирования директора во всех его вопросах",
                  "Начинают успешно и безопасно оптимизировать налоги в первые полгода нахождения в Клубе",
                  "Перестают бояться налоговой и ДФР за счет знаний и точного плана действий при проверках, обысках и допросах"
                ]
              },
              {
                period: "В итоге",
                results: [
                  "Предприниматели получают сверхсотрудника: юрист со знанием бухгалтерии",
                  "который умеет обеспечить безопасность по каждой сделке",
                  "Бухгалтеры становятся незаменимыми экспертами в своей области"
                ]
              }
            ].map((result, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{result.period}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {result.results.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Icon name="TrendingUp" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="отзывы" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16">
            Кейсы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Бухгалтер Вика",
                before: "хотела больше зарабатывать, но на работе с ее мнением не считался ни директор, ни главный бухгалтер",
                after: "Через несколько месяцев нахождения в Клубе сменила должность на главного бухгалтера, повысила доход, умеет доносить ценность своей работы и знает ответы на вопросы директора"
              },
              {
                name: "Главный бухгалтер Ольга",
                before: "смирялась с задержками зарплаты, не могла донести ценность работодателю, боялась сменить работу",
                after: "За время нахождения в Клубе стала оказывать консультации сторонним клиентам, директоры завалили предложениями о работе, наперебой повышая размер зарплаты. Сейчас Ольга увеличила доход в 10(!) раз"
              },
              {
                name: "Предприниматель Юлия",
                before: "хотела легко и непринужденно зарабатывать 5.000$ месяц",
                after: "За счет информации в Клубе повысила бизнес-навыки, дополнила линейку своих продуктов и вышла на доход 5000$+. Сейчас Юлия идет к доходу 10.000$ в месяц!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Было:</p>
                    <p className="text-sm">{testimonial.before}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-2">Стало:</p>
                    <p className="text-sm">{testimonial.after}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="автор" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
              Чей Клуб?
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-montserrat font-bold text-primary mb-6">
                Катерина Горбова
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {[
                  "Прошла 400+ проверок",
                  "Самый громкий кейс: выиграла суд Клиенту на 2.7млн$ за счет отстройки дела с помощью бухучета",
                  "Обучила более 1000+ предпринимателей и бухгалтеров, среди которых есть мои преподаватели из нархоза",
                  "Разрабатываю стратегии успешной защиты предпринимателей в рамках уголовных дел",
                  "Занимаюсь комплексной безопасностью бизнеса любого размера",
                  "С нуля основала одно из крупнейших бухагентств Беларуси AJOURE: более 2500 Клиентов с 2012",
                  "Владелец бизнеса, бухгалтер с чеком от 50.000$, решаю сложные экспертные задачи",
                  "Коллеги называют мои обучения лучшими на рынке за простоту, живую подачу и рост дохода учеников"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="Award" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16">
            Частые вопросы
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "«Изучать законодательство скучно и сложно».",
                answer: "Нет! Я объясняю простым языком и только то, что решает реальные проблемы."
              },
              {
                question: "«А если у меня мало времени?»",
                answer: "Достаточно 10–15 минут в день, чтобы быть в теме. А рутинные задачи вы сможете автоматизировать с помощью Клуба."
              },
              {
                question: "«Это дорого?»",
                answer: "Нет. 3-8руб в день, окупаемость — в сотни раз."
              },
              {
                question: "«Я предприниматель, мне это не нужно».",
                answer: "Нужно! Запомните: свою безопасность нельзя делегировать. Эти знания сохранят ваши деньги и бизнес."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start space-x-2">
                    <Icon name="HelpCircle" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground pl-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Попробуй Клуб бесплатно
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Получи доступ к 3 видеоответам из Базы знаний!<br />
            600+ реальных вопросов и решений ждут тебя внутри.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
            Получить 3 бесплатных ответа
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="контакты" className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="font-montserrat font-bold text-xl mb-4">
            Клуб Горбовой
          </div>
          <p className="text-white/70">
            Бухгалтер, которого ценит директор
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Index;