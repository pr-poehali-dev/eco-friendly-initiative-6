import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей М.",
    role: "Пользователь с 2023 года",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Наконец-то нормальный VPN без лишних заморочек. Поставил родителям — они даже не заметили, что что-то изменилось. Просто работает.",
  },
  {
    name: "Марина К.",
    role: "Фрилансер, Москва",
    avatar: "/professional-woman-scientist.png",
    content:
      "Работаю с зарубежными клиентами, нужен стабильный доступ к иностранным сервисам. SecureVPN не подводил ни разу за 8 месяцев использования.",
  },
  {
    name: "Денис Т.",
    role: "Пользователь с семьёй",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Подключил всю семью — жену, детей, родителей. Один аккаунт на всех, никаких проблем. Скорость хорошая, стриминг не тормозит.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят пользователи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные отзывы людей, которые доверяют нам защиту своей приватности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
