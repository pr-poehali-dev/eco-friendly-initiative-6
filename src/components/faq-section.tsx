import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Это законно — использовать VPN?",
      answer:
        "Да, использование VPN является законным в большинстве стран. VPN — это инструмент защиты приватности, который используют миллионы людей по всему миру: от обычных пользователей до крупных компаний.",
    },
    {
      question: "Насколько сложно настроить VPN?",
      answer:
        "Очень просто! Вы скачиваете приложение, вводите логин и пароль, нажимаете «Подключить» — и готово. Весь процесс занимает не более 2 минут. Никаких технических знаний не требуется.",
    },
    {
      question: "Замедлится ли интернет при использовании VPN?",
      answer:
        "При правильно настроенном VPN на качественных серверах замедление минимально — обычно менее 10%. Вы не заметите разницы при просмотре видео, работе в браузере или звонках.",
    },
    {
      question: "Сколько устройств можно подключить?",
      answer:
        "Столько, сколько нужно вам и вашим близким. Смартфоны, ноутбуки, планшеты — все устройства работают с одним аккаунтом без ограничений.",
    },
    {
      question: "Вы храните мои данные и историю?",
      answer:
        "Нет. Мы придерживаемся строгой политики нулевых логов — история ваших действий в сети нигде не записывается и не хранится. Ваша приватность — наш приоритет.",
    },
    {
      question: "Что если VPN перестанет работать?",
      answer:
        "Функция Kill Switch автоматически блокирует интернет-соединение, если VPN отключается — чтобы ваши данные никогда не оказались незащищёнными. Приложение мгновенно переподключится к серверу.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о нашем VPN-сервисе, безопасности и использовании.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
