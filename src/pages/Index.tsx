import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const gameList = [
  {
    id: 1,
    title: "Cyber Nexus 2077",
    price: 1999,
    discountPrice: 1299,
    discount: 35,
    image: "/img/019d7df3-b70c-4146-b3e2-7fde1b089ba4.jpg",
    rating: 4.8,
    category: "Экшен"
  },
  {
    id: 2,
    title: "Dragon's Quest VII",
    price: 2499,
    discountPrice: 1799,
    discount: 28,
    image: "/img/21f627cc-2867-4045-9656-9e34eb537282.jpg",
    rating: 4.9,
    category: "RPG"
  },
  {
    id: 3,
    title: "Speed Legends",
    price: 1599,
    discountPrice: 999,
    discount: 38,
    image: "/img/bafe7047-6419-4cbb-9c17-16a0f66d5c6f.jpg",
    rating: 4.6,
    category: "Гонки"
  }
];

const reviews = [
  {
    id: 1,
    user: "GameMaster2024",
    game: "Cyber Nexus 2077",
    rating: 5,
    text: "Потрясающая графика и захватывающий геймплей! Рекомендую всем любителям киберпанка."
  },
  {
    id: 2,
    user: "RPGFan",
    game: "Dragon's Quest VII",
    rating: 5,
    text: "Лучшая RPG года! Огромный мир, интересный сюжет, много часов игры."
  }
];

export default function Index() {
  const [cart, setCart] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (gameId: number) => {
    setCart(prev => [...prev, gameId]);
  };

  const filteredGames = gameList.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-orbitron font-bold text-primary">
            STEAM GAMES STORE
          </h1>
          <nav className="hidden md:flex items-center gap-6 font-roboto">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#discounts" className="hover:text-primary transition-colors">Скидки</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <Button variant="outline" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                  {cart.length}
                </Badge>
              )}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 bg-gradient-to-br from-dark-navy via-background to-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-neon-green bg-clip-text text-transparent">
            ИГРОВАЯ ВСЕЛЕННАЯ
          </h2>
          <p className="text-xl font-roboto text-muted-foreground mb-8 max-w-2xl mx-auto">
            Откройте для себя тысячи захватывающих игр с эксклюзивными скидками и мгновенной доставкой
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-8">
            <Input
              type="text"
              placeholder="Поиск игр..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg bg-card border-border"
            />
            <Icon name="Search" size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron">
              <Icon name="Gamepad2" size={20} className="mr-2" />
              Играть сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-orbitron">
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Топ игры
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-orbitron font-bold text-center mb-12">
            КАТАЛОГ ИГР
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map(game => (
              <Card key={game.id} className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {game.discount > 0 && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-orbitron">
                      -{game.discount}%
                    </Badge>
                  )}
                  <Badge variant="outline" className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm">
                    {game.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-orbitron text-xl">{game.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={i < Math.floor(game.rating) ? "text-primary fill-primary" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({game.rating})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {game.discountPrice < game.price && (
                        <span className="text-sm line-through text-muted-foreground">
                          {game.price}₽
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary font-orbitron">
                        {game.discountPrice}₽
                      </span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron"
                    onClick={() => addToCart(game.id)}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <section id="discounts" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-orbitron font-bold text-center mb-12">
            СКИДКИ И АКЦИИ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
              <CardContent className="p-6 text-center">
                <Icon name="Percent" size={40} className="mx-auto mb-4 text-primary" />
                <h4 className="font-orbitron font-bold text-xl mb-2">Скидка до 70%</h4>
                <p className="text-muted-foreground">на хиты прошлого года</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30">
              <CardContent className="p-6 text-center">
                <Icon name="Zap" size={40} className="mx-auto mb-4 text-secondary" />
                <h4 className="font-orbitron font-bold text-xl mb-2">Флеш распродажа</h4>
                <p className="text-muted-foreground">24 часа супер цен</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-neon-green/20 to-neon-green/5 border-neon-green/30">
              <CardContent className="p-6 text-center">
                <Icon name="Gift" size={40} className="mx-auto mb-4 text-neon-green" />
                <h4 className="font-orbitron font-bold text-xl mb-2">Бесплатные игры</h4>
                <p className="text-muted-foreground">каждую неделю новинки</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-vibrant-orange/20 to-vibrant-orange/5 border-vibrant-orange/30">
              <CardContent className="p-6 text-center">
                <Icon name="Crown" size={40} className="mx-auto mb-4 text-vibrant-orange" />
                <h4 className="font-orbitron font-bold text-xl mb-2">VIP подписка</h4>
                <p className="text-muted-foreground">эксклюзивные скидки</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-orbitron font-bold text-center mb-12">
            ОТЗЫВЫ ИГРОКОВ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map(review => (
              <Card key={review.id} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="User" size={20} className="text-primary" />
                      <span className="font-orbitron font-semibold">{review.user}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2 font-roboto">{review.text}</p>
                  <p className="text-sm text-primary font-orbitron">Игра: {review.game}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
            STEAM GAMES STORE
          </h2>
          <p className="text-muted-foreground mb-4 font-roboto">
            Ваш проводник в мире игр
          </p>
          <div className="flex justify-center gap-6">
            <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            <Icon name="Twitter" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            <Icon name="Youtube" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}