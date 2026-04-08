import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Военное шифрование",
    description: "Протокол WireGuard с шифрованием AES-256. Ваш трафик защищён даже в публичных Wi-Fi сетях.",
    icon: "lock",
    badge: "Безопасность",
  },
  {
    title: "Без логов",
    description: "Мы не храним историю вашей активности. Полная конфиденциальность — никто не знает, что вы делаете в сети.",
    icon: "shield",
    badge: "Приватность",
  },
  {
    title: "Высокая скорость",
    description: "Серверы оптимизированы для стриминга, игр и звонков. Никаких тормозов и обрывов соединения.",
    icon: "zap",
    badge: "Скорость",
  },
  {
    title: "Для всей семьи",
    description: "Подключайте сколько нужно устройств — смартфоны, ноутбуки, планшеты всех близких на одном аккаунте.",
    icon: "users",
    badge: "Семья",
  },
  {
    title: "Простая настройка",
    description: "Установка за 2 минуты. Никаких технических знаний не нужно — один клик и вы защищены.",
    icon: "globe",
    badge: "Просто",
  },
  {
    title: "Всегда онлайн",
    description: "Автоматическое переподключение и Kill Switch — если VPN отключится, интернет заблокируется до восстановления.",
    icon: "target",
    badge: "Надёжность",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Надёжная защита без лишних сложностей</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё необходимое для безопасного интернета — для вас и ваших близких
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "lock" && "🔒"}
                    {feature.icon === "shield" && "🛡️"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "users" && "👨‍👩‍👧‍👦"}
                    {feature.icon === "globe" && "🌐"}
                    {feature.icon === "target" && "🎯"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
